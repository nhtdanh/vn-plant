import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ImageEditor } from "@/components/shared/ImageEditor";
import {
  ChevronLeft,
  Loader2,
  Save,
  Plus,
  Trash2,
  Image as ImageIcon,
  Leaf,
  Info,
  Layers,
  MapPin,
  Search,
  X,
  Globe,
  Upload,
  Star,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { adminService } from "@/services/admin.service";
import { fetchProvinces, fetchTaxonSuggestions } from "@/services/taxon.service";
import type { 
  TaxonDetail,
  Province,
  TaxonImage,
  TaxonSuggestion
} from "@/types";
import { motion, AnimatePresence } from "framer-motion";

// schema validation chuyên sâu cho taxon - đồng bộ với backend dto
const taxonSchema = z.object({
  scientificName: z.string().min(1, "Tên khoa học là bắt buộc"),
  author: z.string().nullish(),
  vietnameseName: z.string().nullish(),
  rank: z.string().min(1, "Cấp bậc là bắt buộc"),
  plantGroup: z.string().nullish(),
  status: z.string(),
  hasVietnamRecord: z.boolean().default(true),
  parentId: z.number().nullish(),
  description: z.string().nullish(),
  habit: z.string().nullish(),
  leaf: z.string().nullish(),
  reproduction: z.string().nullish(),
  phenology: z.string().nullish(),
  value: z.string().nullish(),
  distributionText: z.string().nullish(),
  note: z.string().nullish(),
  rawDescriptionInBook: z.string().nullish(),
  sourceName: z.string().nullish(),
  orderInBook: z.string().nullish(),
  provinceIds: z.array(z.number()).default([]),
  // lưu ý: deleteimageids được quản lý bằng state riêng (không thuộc form schema)
  synonyms: z.array(z.object({
    id: z.number().optional(),
    scientificName: z.string().min(1),
    sourceName: z.string().nullish().optional(),
  })).default([]),
  commonNames: z.array(z.object({
    id: z.number().optional(),
    name: z.string().min(1),
    language: z.string().nullish().optional(),
    regionNote: z.string().nullish().optional(),
    isPrimary: z.boolean().default(false),
  })).default([]),
});


// taxonformpage - trình soạn thảo dữ liệu thực vật thực tế
export function TaxonFormPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [activeSection, setActiveSection] = useState("identity");
  
  const [editingBlob, setEditingBlob] = useState<{ id: string; url: string } | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [isLoading, setIsLoading] = useState(isEditMode);
  const [isSaving, setIsSaving] = useState(false);
  
  // các trạng thái quản lý hình ảnh
  const [existingImages, setExistingImages] = useState<TaxonImage[]>([]);
  const [newImageFiles, setNewImageFiles] = useState<{ 
    id: string; 
    file: File; 
    preview: string; 
    isPrimary: boolean;
    caption?: string;
    author?: string;
  }[]>([]);
  const [deleteImageIds, setDeleteImageIds] = useState<number[]>([]);

  // các trạng thái cho tìm kiếm phân cấp
  const [parentSearch, setParentSearch] = useState("");
  const [parentSuggestions, setParentSuggestions] = useState<TaxonSuggestion[]>([]);
  const [selectedParent, setSelectedParent] = useState<TaxonSuggestion | null>(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm<any>({
    resolver: zodResolver(taxonSchema),
    defaultValues: {
      status: "draft",
      rank: "species",
      hasVietnamRecord: true,
      synonyms: [],
      commonNames: [],
      provinceIds: [],
    },
  });

  const { fields: synonymFields, append: appendSynonym, remove: removeSynonym } = useFieldArray({
    control,
    name: "synonyms",
  });

  const { fields: commonNameFields, append: appendCommonName, remove: removeCommonName } = useFieldArray({
    control,
    name: "commonNames",
  });

  const watchProvinceIds = watch("provinceIds") || [];
  const watchScientificName = watch("scientificName") || "";
  const watchVietnameseName = watch("vietnameseName") || "";
  const watchCommonNames = watch("commonNames") || [];
  
  // cảnh báo khi rời trang nếu có thay đổi chưa lưu
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty && !isSaving) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, isSaving]);

  const isSyncingRef = useRef(false);

  // đồng bộ tên tiếng việt sang tên thường gọi chính
  useEffect(() => {
    if (isSyncingRef.current) return;
    
    const primaryIndex = watchCommonNames.findIndex((cn: any) => cn.isPrimary === true);
    
    if (watchVietnameseName) {
      isSyncingRef.current = true;
      if (primaryIndex === -1) {
        // tạo mới nếu chưa tồn tại
        appendCommonName({ name: watchVietnameseName, language: "vi", isPrimary: true });
      } else if (watchCommonNames[primaryIndex].name !== watchVietnameseName) {
        // cập nhật nếu đã tồn tại
        setValue(`commonNames.${primaryIndex}.name`, watchVietnameseName);
      }
      setTimeout(() => { isSyncingRef.current = false; }, 50);
    }
  }, [watchVietnameseName]);

  // đồng bộ tên thường gọi chính sang tên tiếng việt
  useEffect(() => {
    if (isSyncingRef.current) return;
    
    const primary = watchCommonNames.find((cn: any) => cn.isPrimary === true);
    if (primary && primary.name !== watchVietnameseName) {
      isSyncingRef.current = true;
      setValue("vietnameseName", primary.name);
      setTimeout(() => { isSyncingRef.current = false; }, 50);
    }
  }, [watchCommonNames]);

  // tải dữ liệu ban đầu
  useEffect(() => {
    const loadData = async () => {
      try {
        const [provRes, taxonRes] = await Promise.all([
          fetchProvinces(),
          isEditMode ? adminService.getTaxon(Number(id)) : Promise.resolve(null),
        ]);

        setProvinces(provRes.data);
        
        if (taxonRes) {
          const data = taxonRes as TaxonDetail;
          reset({
            scientificName: data.scientificName,
            author: data.author,
            vietnameseName: data.vietnameseName,
            rank: data.rank,
            plantGroup: data.plantGroup,
            status: data.status,
            hasVietnamRecord: data.hasVietnamRecord,
            parentId: data.parentId,
            description: data.description,
            rawDescriptionInBook: data.rawDescriptionInBook,
            habit: data.habit,
            leaf: data.leaf,
            reproduction: data.reproduction,
            phenology: data.phenology,
            value: data.value,
            distributionText: data.distributionText,
            note: data.note,
            orderInBook: data.orderInBook,
            provinceIds: data.provinces?.map(p => p.provinceId) || [],
            synonyms: data.synonyms?.map(s => ({ 
               scientificName: s.scientificName, 
               sourceName: s.sourceName 
            })) || [],
            commonNames: data.commonNames?.map(c => ({ 
               name: c.name, 
               language: c.language, 
               regionNote: c.regionNote, 
               isPrimary: c.isPrimary 
            })) || [],
            deleteImageIds: [],
          });
          
          setExistingImages(data.images || []);
          
          if (data.parentId) {
            setSelectedParent({ id: data.parentId, scientificName: data.parent?.scientificName || "Taxon không xác định" } as TaxonSuggestion);
          }
        }
      } catch (error) {
        toast.error("Không thể tải dữ liệu");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [id, reset, isEditMode]);

  // dọn dẹp các đường dẫn (url) của đối tượng
  useEffect(() => {
    return () => {
      newImageFiles.forEach(img => URL.revokeObjectURL(img.preview));
    };
  }, [newImageFiles]);

  // xử lý tìm kiếm gợi ý
  useEffect(() => {
    if (parentSearch.length < 2) {
      setParentSuggestions([]);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await fetchTaxonSuggestions(parentSearch, 5);
        setParentSuggestions(res.data);
      } catch (err) {
        console.error(err);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [parentSearch]);

  const onSubmit = async (values: any) => {
    setIsSaving(true);
    try {
      const formData = new FormData();

      // đảm bảo tên thường gọi chính luôn tồn tại nếu có tên tiếng việt
      const finalCommonNames = [...(values.commonNames ?? [])];
      if (values.vietnameseName?.trim() && !finalCommonNames.some((c: any) => c.isPrimary)) {
        finalCommonNames.push({
          name: values.vietnameseName.trim(),
          language: "vi",
          isPrimary: true,
        });
      }

      // xử lý thông tin metadata hình ảnh (tất cả ảnh: cũ và mới)
      const imageMetadata = [
        ...existingImages.map(img => ({
          url: img.url,
          isPrimary: img.isPrimary,
          caption: img.caption || "",
          author: img.author || "",
        })),
        ...newImageFiles.map(img => ({
          url: "new_upload",
          isPrimary: img.isPrimary,
          caption: img.caption || "",
          author: img.author || "",
        })),
      ];

      // gom tất cả dữ liệu thành một chuỗi json trong trường "data"
      // Giúp giữ nguyên kiểu dữ liệu (boolean, number, array) qua network.
      // backend đã hỗ trợ xử lý dữ liệu dạng chuỗi json
      const payload = {
        // các trường dữ liệu lõi
        scientificName: values.scientificName?.trim(),
        author: values.author?.trim() || undefined,
        vietnameseName: values.vietnameseName?.trim() || undefined,
        rank: values.rank,
        plantGroup: values.plantGroup || undefined,
        status: values.status,
        hasVietnamRecord: Boolean(values.hasVietnamRecord), // ✅ đảm bảo là boolean thực
        parentId: values.parentId ?? undefined,
        description: values.description?.trim() || undefined,
        rawDescriptionInBook: values.rawDescriptionInBook?.trim() || undefined,
        habit: values.habit?.trim() || undefined,
        leaf: values.leaf?.trim() || undefined,
        reproduction: values.reproduction?.trim() || undefined,
        phenology: values.phenology?.trim() || undefined,
        value: values.value?.trim() || undefined,
        distributionText: values.distributionText?.trim() || undefined,
        note: values.note?.trim() || undefined,
        sourceName: values.sourceName?.trim() || undefined,
        orderInBook: values.orderInBook?.trim() || undefined,
        // các mảng dữ liệu (giữ nguyên kiểu số/logic)
        provinceIds: (values.provinceIds ?? []).map(Number), // ✅ number[]
        deleteImageIds: deleteImageIds.map(Number),           // ✅ number[]
        synonyms: (values.synonyms ?? []).map((s: any) => ({
          scientificName: s.scientificName?.trim(),
          sourceName: s.sourceName?.trim() || undefined,
        })),
        commonNames: finalCommonNames.map((c: any) => ({
          name: c.name?.trim(),
          language: c.language || "vi",
          isPrimary: Boolean(c.isPrimary), // ✅ boolean thực
          regionNote: c.regionNote?.trim() || undefined,
        })),
        images: imageMetadata,
      };

      // thêm toàn bộ dữ liệu dưới dạng chuỗi json - giữ nguyên kiểu dữ liệu
      formData.append("data", JSON.stringify(payload));

      // thêm file ảnh riêng lẻ
      newImageFiles.forEach(img => {
        formData.append("files", img.file);
      });

      if (isEditMode) {
        await adminService.updateTaxon(Number(id), formData);
        toast.success("Cập nhật thành công");
      } else {
        await adminService.createTaxon(formData);
        toast.success("Tạo mới thành công");
        navigate("/admin/taxons");
      }
    } catch (error: any) {
      console.error("[TaxonForm] Submit error:", error);
      // hiển thị thông báo từ máy chủ hoặc thông báo mặc định
      const serverMessage = error?.response?.data?.message;
      const serverErrors = error?.response?.data?.errors;
      if (serverErrors?.length) {
        const firstError = serverErrors[0];
        toast.error(`Lỗi validation: ${firstError.path} — ${firstError.message}`);
      } else {
        toast.error(serverMessage || "Đã xảy ra lỗi khi lưu dữ liệu");
      }
    } finally {
      setIsSaving(false);
    }
  };

  const toggleProvince = (pId: number) => {
    const current = [...watchProvinceIds];
    const index = current.indexOf(pId);
    if (index > -1) current.splice(index, 1);
    else current.push(pId);
    setValue("provinceIds", current);
  };

  const sections = [
    { id: "identity", label: "Định danh", icon: Info },
    { id: "classification", label: "Phân loại", icon: Layers },
    { id: "biology", label: "Mô tả", icon: Leaf },
    { id: "names", label: "Tên khác", icon: Globe },
    { id: "distribution", label: "Phân bố", icon: MapPin },
    { id: "media", label: "Hình ảnh", icon: ImageIcon },
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-zinc-400">
         <div className="w-12 h-12 border-4 border-zinc-100 border-t-primary rounded-full animate-spin mb-4" />
         <p className="font-sans font-bold uppercase tracking-widest text-xs">Đang tải trình soạn thảo...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pb-32">
       {/* thanh điều hướng trên cùng */}
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button type="button" onClick={() => navigate("/admin/taxons")} className="bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 rounded-sm border border-zinc-200 shadow-sm w-9 h-9 p-0 flex items-center justify-center transition-colors">
               <ChevronLeft size={20} />
            </Button>
            <div>
               <h1 className="text-3xl font-sans font-normal uppercase tracking-tight text-zinc-700">
                 {isEditMode ? "Chỉnh sửa bản ghi" : "Thêm loài mới"}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <Button 
                 type="button"
                 onClick={() => navigate("/admin/taxons")}
                 className="h-10 px-4 bg-transparent text-zinc-500 rounded-sm font-medium uppercase tracking-widest text-[9px] hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200"
             >
                Hủy bỏ
              </Button>
              <Button 
                 onClick={handleSubmit(onSubmit)}
                 disabled={isSaving}
                 className="h-10 px-6 rounded-sm bg-emerald-50 text-emerald-800 font-normal uppercase tracking-widest text-[9px] hover:bg-emerald-100 transition-all focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                 {isSaving ? <Loader2 size={16} className="mr-2 animate-spin" /> : <Save size={16} className="mr-2" />}
                 Lưu bản ghi
              </Button>
          </div>
       </div>

       {/* các tab điều hướng ngang */}
       <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-zinc-100 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1 py-1">
             {sections.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={cn(
                      "flex items-center gap-2.5 px-6 py-4 transition-all relative shrink-0",
                      isActive ? "text-emerald-700 font-bold" : "text-zinc-400 hover:text-zinc-600"
                    )}
                  >
                    <s.icon size={15} className={cn("transition-colors", isActive ? "text-emerald-600" : "text-zinc-300")} />
                    <span className="text-[10px] font-sans uppercase tracking-widest">
                       {s.label}
                    </span>
                    {isActive && (
                       <motion.div 
                          layoutId="activeSectionIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" 
                       />
                    )}
                  </button>
                );
             })}
          </div>
       </div>

       {/* khu vực nội dung biểu mẫu */}
       <div className="max-w-4xl mx-auto">
          <form className="space-y-12">
                
                {/* phần: định danh (tab 1) */}
                {activeSection === "identity" && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                         <div className="space-y-1.5 overflow-hidden">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Tên khoa học (Scientific Name) *</label>
                            <Input 
                               {...register("scientificName")}
                               placeholder="Ví dụ: Helianthus annuus"
                               className="h-11 rounded-sm border-zinc-100 bg-white font-sans italic text-base focus:border-amber-400 focus-visible:ring-0"
                            />
                            {errors.scientificName && <span className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1 block">{errors.scientificName.message as string}</span>}
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1 flex items-center gap-1.5">
                               <User size={10} /> Tác giả danh pháp (Author)
                            </label>
                            <Input 
                               {...register("author")}
                               placeholder="Ví dụ: L."
                               className="h-11 rounded-sm border-zinc-100 bg-white text-sm focus:border-amber-400 focus-visible:ring-0"
                            />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Tên tiếng Việt</label>
                            <Input 
                               {...register("vietnameseName")}
                               placeholder="Ví dụ: Hướng Dương"
                               className="h-11 rounded-sm border-zinc-100 bg-white font-sans text-base focus:border-amber-400 focus-visible:ring-0"
                            />
                         </div>

                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Số thứ tự trong sách</label>
                            <Input {...register("orderInBook")} placeholder="STT trong sách nếu có" className="h-11 rounded-sm border-zinc-100 bg-white shadow-sm" />
                         </div>

                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Trạng thái phát hành</label>
                            <div className="relative">
                               <select 
                                  {...register("status")}
                                  className="w-full h-11 px-4 rounded-sm border border-zinc-100 bg-white font-sans font-bold uppercase tracking-widest text-[10px] appearance-none focus:border-amber-400 focus:outline-none"
                               >
                                  <option value="draft">Bản nháp (Draft)</option>
                                  <option value="published">Công bố (Published)</option>
                                  <option value="archived">Lưu trữ (Archived)</option>
                                </select>
                             </div>
                         </div>

                         <div className="flex items-center justify-between h-11 px-4 bg-zinc-50 rounded-sm border border-zinc-100 self-end mb-0.5">
                            <div className="flex items-center gap-2">
                               <Globe size={14} className="text-zinc-400" />
                               <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Có tại Việt Nam</span>
                            </div>
                            <input 
                              type="checkbox" 
                              {...register("hasVietnamRecord")}
                              className="w-8 h-5 appearance-none rounded-full bg-zinc-200 checked:bg-emerald-600 transition-all relative after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:w-3 after:h-3 after:rounded-full after:transition-all checked:after:translate-x-3 cursor-pointer"
                            />
                         </div>
                      </div>
                   </div>
                )}

                {/* phần: phân loại (tab 2) */}
                {activeSection === "classification" && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Cấp bậc phân loại (Rank)</label>
                            <select 
                               {...register("rank")}
                               className="w-full h-11 px-4 rounded-sm border border-zinc-100 bg-white font-sans font-bold uppercase tracking-widest text-[10px] appearance-none focus:border-amber-400 focus:outline-none"
                            >
                               <option value="kingdom">Giới (Kingdom)</option>
                               <option value="phylum">Ngành (Phylum)</option>
                               <option value="taxonomicClass">Lớp (Class)</option>
                               <option value="order">Bộ (Order)</option>
                               <option value="family">Họ (Family)</option>
                               <option value="genus">Chi (Genus)</option>
                               <option value="species" selected>Loài (Species)</option>
                             </select>
                          </div>
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Nhóm thực vật (Group)</label>
                             <select 
                                {...register("plantGroup")}
                                className="w-full h-11 px-4 rounded-sm border border-zinc-100 bg-white font-sans font-bold uppercase tracking-widest text-[10px] appearance-none focus:border-amber-400 focus:outline-none"
                             >
                                <option value="">Không xác định</option>
                                <option value="angiosperm">Hạt kín (Angiosperm)</option>
                                <option value="gymnosperm">Hạt trần (Gymnosperm)</option>
                                <option value="fern">Quyết (Fern)</option>
                             </select>
                          </div>
                      </div>

                      <div className="space-y-3">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Taxon cấp trên (Parent Taxon)</label>
                         <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={17} />
                            <Input 
                               placeholder="Tìm họ, chi hoặc loài..."
                               className="pl-12 h-11 rounded-sm border-zinc-200 bg-white shadow-sm"
                               value={parentSearch}
                               onChange={(e) => setParentSearch(e.target.value)}
                            />
                            {parentSuggestions.length > 0 && (
                               <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-sm border border-zinc-100 shadow-xl z-50 overflow-hidden">
                                  {parentSuggestions.map((s) => (
                                     <button 
                                        key={s.id}
                                        type="button"
                                        onClick={() => {
                                          setValue("parentId", s.id);
                                          setSelectedParent(s);
                                          setParentSuggestions([]);
                                          setParentSearch("");
                                        }}
                                        className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors text-left border-b border-zinc-50 last:border-0"
                                     >
                                        <div className="flex flex-col">
                                           <span className="text-sm font-medium italic">{s.scientificName}</span>
                                           <span className="text-[10px] uppercase font-bold text-zinc-400">{s.rank}</span>
                                        </div>
                                        <Plus size={16} className="text-zinc-300" />
                                     </button>
                                  ))}
                               </div>
                            )}
                         </div>

                         <AnimatePresence>
                         {selectedParent && (
                            <motion.div 
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, scale: 0.95 }}
                               className="p-4 bg-emerald-50 border border-emerald-100/50 rounded-sm flex items-center justify-between"
                            >
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-sm bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                                     <Layers size={18} />
                                  </div>
                                  <div>
                                     <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-700">Cha (Parent)</p>
                                     <p className="font-sans font-medium italic text-zinc-900">{selectedParent.scientificName}</p>
                                  </div>
                               </div>
                               <Button 
                                  type="button"
                                  variant="ghost" 
                                  onClick={() => { setSelectedParent(null); setValue("parentId", null); }}
                                  className="text-emerald-700 hover:bg-emerald-100/50 rounded-sm w-8 h-8 p-0"
                               >
                                  <X size={18} />
                               </Button>
                            </motion.div>
                         )}
                         </AnimatePresence>
                      </div>
                   </div>
                )}

                {/* phần: sinh học (tab 3) */}
                {activeSection === "biology" && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                      <div className="space-y-8">
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Mô tả đặc điểm (Description)</label>
                            <textarea 
                               {...register("description")}
                               rows={6}
                               className="w-full p-4 rounded-sm border border-zinc-100 bg-white font-sans text-sm focus:border-amber-400 focus:outline-none transition-all shadow-sm leading-relaxed"
                               placeholder="Tóm tắt đặc điểm loài cho người dùng phổ thông..."
                            />
                         </div>
                         <div className="space-y-1.5">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1 italic">Dữ liệu gốc (Raw Text)</label>
                             <textarea 
                                {...register("rawDescriptionInBook")}
                                rows={6}
                                className="w-full p-4 rounded-sm border border-zinc-100 bg-zinc-50 font-mono text-[12px] leading-relaxed focus:border-amber-400 focus:outline-none transition-all"
                                placeholder="Dán nội dung từ sách hoặc tài liệu gốc..."
                             />
                          </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Dạng sống (Habit)</label>
                               <Input {...register("habit")} placeholder="Cây gỗ, cây bụi..." className="h-11 rounded-sm border-zinc-100 focus:border-amber-400 focus-visible:ring-0" />
                            </div>
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Đặc điểm lá (Leaf)</label>
                               <Input {...register("leaf")} placeholder="Dạng lá, mép lá..." className="h-11 rounded-sm border-zinc-100 focus:border-amber-400 focus-visible:ring-0" />
                            </div>
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Sinh sản (Reproduction)</label>
                               <Input {...register("reproduction")} placeholder="Đặc điểm hoa, quả..." className="h-11 rounded-sm border-zinc-100 focus:border-amber-400 focus-visible:ring-0" />
                            </div>
                            <div className="space-y-1.5">
                               <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Giá trị (Value)</label>
                               <Input {...register("value")} placeholder="Sử dụng, kinh tế, dược liệu..." className="h-11 rounded-sm border-zinc-100 focus:border-amber-400 focus-visible:ring-0" />
                            </div>
                             <div className="space-y-1.5">
                                 <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Sinh thái & Phân bố</label>
                                 <Input {...register("phenology")} placeholder="Mùa hoa, độ cao, khu vực..." className="h-11 rounded-sm border-zinc-100 focus:border-amber-400 focus-visible:ring-0" />
                              </div>
                              <div className="space-y-1.5">
                                 <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Ghi chú (Note)</label>
                                 <Input {...register("note")} placeholder="Lưu ý quan trọng khác..." className="h-11 rounded-sm border-zinc-100 focus:border-amber-400 focus-visible:ring-0" />
                              </div>
                         </div>
                      </div>
                   </div>
                )}

                {/* phần: tên gọi (tab 4) */}
                {activeSection === "names" && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                      
                      {/* tên đồng nghĩa */}
                      <div className="space-y-4">
                         <div className="flex items-center justify-between">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 border-l-2 border-emerald-600 pl-2">Tên đồng nghĩa (Synonyms)</h3>
                            <Button 
                               type="button" 
                               onClick={() => appendSynonym({ scientificName: "" })}
                               className="h-7 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-700/10 rounded-sm text-[9px] font-bold uppercase tracking-widest px-3"
                            >
                               <Plus size={12} className="mr-1" /> Thêm tên
                            </Button>
                         </div>
                         <div className="space-y-3">
                            {synonymFields.map((field, index) => (
                               <div key={field.id} className="flex gap-3 items-start animate-in slide-in-from-left-2 duration-300">
                                  <div className="flex-1 space-y-1">
                                    <Input 
                                       {...register(`synonyms.${index}.scientificName` as const)} 
                                       placeholder="Tên khoa học"
                                       className="h-10 italic font-medium text-sm rounded-sm bg-white focus:border-amber-400 focus-visible:ring-0"
                                    />
                                  </div>
                                  <div className="w-1/3">
                                    <Input 
                                       {...register(`synonyms.${index}.sourceName` as const)} 
                                       placeholder="Nguồn"
                                       className="h-10 text-xs rounded-sm bg-white"
                                    />
                                  </div>
                                  <Button 
                                     type="button"
                                     onClick={() => removeSynonym(index)}
                                     className="h-10 w-10 text-zinc-400 hover:text-rose-500 bg-white hover:bg-rose-50 rounded-sm flex items-center justify-center p-0 border border-zinc-200"
                                  >
                                     <Trash2 size={16} />
                                  </Button>
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* tên thường gọi */}
                      <div className="space-y-4">
                         <div className="flex items-center justify-between">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 border-l-2 border-emerald-600 pl-2">Tên thường gọi</h3>
                            <Button 
                               type="button" 
                               onClick={() => appendCommonName({ name: "", language: "vi", isPrimary: false })}
                               className="h-7 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-700/10 rounded-sm text-[9px] font-bold uppercase tracking-widest px-3"
                            >
                               <Plus size={12} className="mr-1" /> Thêm tên
                            </Button>
                         </div>
                         <div className="grid grid-cols-1 gap-3">
                            {commonNameFields.map((field, index) => {
                               const isPrimary = watch(`commonNames.${index}.isPrimary`);
                               return (
                               <div key={field.id} className={cn(
                                  "flex gap-3 p-2 rounded-sm border transition-colors items-center",
                                  isPrimary ? "bg-emerald-50 border-emerald-100" : "bg-white border-zinc-100"
                               )}>
                                  <Button 
                                     type="button"
                                     onClick={() => {
                                        commonNameFields.forEach((_, i) => setValue(`commonNames.${i}.isPrimary`, i === index));
                                     }}
                                     className={cn(
                                        "h-8 w-8 rounded-sm p-0 transition-all shadow-none shrink-0",
                                        isPrimary ? "bg-emerald-600 text-white" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
                                     )}
                                  >
                                     <Star size={14} fill={isPrimary ? "currentColor" : "none"} />
                                  </Button>
                                  <Input 
                                     {...register(`commonNames.${index}.name` as const)} 
                                     placeholder="Tên gọi"
                                     className="flex-1 h-10 font-bold text-sm rounded-sm bg-transparent border-none focus-visible:ring-0"
                                  />
                                  <select
                                     {...register(`commonNames.${index}.language` as const)}
                                     className="w-20 h-8 bg-zinc-100 border-none rounded-sm text-[10px] font-bold uppercase tracking-wider focus:ring-0 cursor-pointer"
                                  >
                                     <option value="vi">VI</option>
                                     <option value="en">EN</option>
                                     <option value="cn">CN</option>
                                  </select>
                                  <Input 
                                     {...register(`commonNames.${index}.regionNote` as const)} 
                                     placeholder="Vùng miền"
                                     className="w-1/4 h-10 text-xs rounded-sm bg-transparent border-none focus-visible:ring-0 text-zinc-500"
                                  />
                                  <Button 
                                     type="button" 
                                     onClick={() => removeCommonName(index)}
                                     className="h-8 w-8 text-zinc-400 hover:text-rose-500 bg-white hover:bg-rose-50 rounded-sm"
                                  >
                                     <Trash2 size={14} />
                                  </Button>
                               </div>
                            )})}
                         </div>
                      </div>
                   </div>
                )}

                {/* phần: phân bố (tab 5) */}
                {activeSection === "distribution" && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                      {/* bản đồ / khu vực */}
                      <div className="space-y-4">
                         <div className="flex flex-wrap gap-2 p-4 bg-zinc-50/50 border border-zinc-100 rounded-sm">
                             {provinces.map((p) => (
                               <button
                                 key={p.id}
                                 type="button"
                                 onClick={() => toggleProvince(p.id)}
                                 className={cn(
                                   "px-3 py-1.5 rounded-sm border text-[10px] font-bold transition-all",
                                   watchProvinceIds.includes(p.id)
                                    ? "bg-emerald-700 border-emerald-700 text-white shadow-md shadow-emerald-700/10"
                                    : "bg-white border-zinc-200 text-zinc-400 hover:border-zinc-300"
                                 )}
                               >
                                 {p.name}
                               </button>
                             ))}
                         </div>
                      </div>
                   </div>
                )}

                {/* phần: hình ảnh (tab 6) */}
                {activeSection === "media" && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                      <div className="p-10 border-2 border-dashed border-zinc-200 rounded-sm flex flex-col items-center justify-center text-center space-y-4 bg-zinc-50/50 hover:bg-emerald-50 transition-all group cursor-pointer relative">
                         <input 
                            type="file" 
                            multiple 
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) => {
                                const files = Array.from(e.target.files || []);
                                if (files.length > 0) {
                                    const file = files[0];
                                    const objectUrl = URL.createObjectURL(file);
                                    setEditingBlob({ 
                                        id: Math.random().toString(36).substr(2, 9), 
                                        url: objectUrl
                                    });
                                    setIsEditorOpen(true);
                                }
                            }}
                         />
                         <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-zinc-300 group-hover:text-emerald-500 transition-colors">
                            <Upload size={28} />
                         </div>
                         <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-900">Thêm hình ảnh</p>
                            <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mt-1">JPG • PNG • WEBP</p>
                         </div>
                      </div>

                      <div className="space-y-6">
                         <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                           <ImageIcon size={14} className="text-emerald-600" /> Thư viện hiện tại
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            
                            {/* hình ảnh hiện có */}
                            {existingImages.map((img) => (
                               <div key={img.id} className={cn(
                                   "flex flex-col rounded-sm border overflow-hidden bg-white group transition-all",
                                   img.isPrimary ? "border-emerald-500 ring-4 ring-emerald-50 content-between" : "border-zinc-200"
                               )}>
                                   <div className="relative aspect-video overflow-hidden bg-zinc-100">
                                       <img src={img.url} className="w-full h-full object-cover" />
                                       {img.isPrimary && (
                                          <div className="absolute top-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest shadow-lg">Ảnh chính</div>
                                       )}
                                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                          {!img.isPrimary && (
                                             <Button 
                                                type="button"
                                                size="sm" 
                                                className="bg-white text-zinc-900 border-0 hover:bg-emerald-600 hover:text-white h-8 text-[9px] font-bold uppercase tracking-widest"
                                                onClick={() => {
                                                   setExistingImages(prev => prev.map(p => ({ ...p, isPrimary: p.id === img.id })));
                                                   setNewImageFiles(prev => prev.map(p => ({ ...p, isPrimary: false })));
                                                }}
                                             >
                                                Làm ảnh chính
                                             </Button>
                                          )}
                                          <Button 
                                                type="button"
                                                size="sm" 
                                                variant="destructive"
                                                className="h-8 text-[9px] font-bold uppercase tracking-widest"
                                                onClick={() => {
                                                   setExistingImages(prev => prev.filter(p => p.id !== img.id));
                                                   setDeleteImageIds(prev => [...prev, img.id]);
                                                }}
                                          >
                                             <Trash2 size={14} />
                                          </Button>
                                       </div>
                                   </div>
                                   <div className="p-4 space-y-3">
                                       <div className="space-y-1">
                                          <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Ghi chú (Caption)</label>
                                          <Input 
                                             value={img.caption || ""} 
                                             onChange={(e) => setExistingImages(prev => prev.map(p => p.id === img.id ? { ...p, caption: e.target.value } : p))}
                                             placeholder="Ví dụ: Hình ảnh lá cây..."
                                             className="h-9 text-xs border-zinc-100 focus:border-emerald-500"
                                          />
                                       </div>
                                       <div className="space-y-1">
                                          <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Người chụp (Author)</label>
                                          <Input 
                                             value={img.author || ""} 
                                             onChange={(e) => setExistingImages(prev => prev.map(p => p.id === img.id ? { ...p, author: e.target.value } : p))}
                                             placeholder="Tên nhiếp ảnh gia..."
                                             className="h-9 text-xs border-zinc-100 focus:border-emerald-500"
                                          />
                                       </div>
                                   </div>
                               </div>
                            ))}

                            {/* hình ảnh tải lên mới */}
                            {newImageFiles.map((img) => (
                               <div key={img.id} className={cn(
                                   "flex flex-col rounded-sm border-2 border-dashed bg-emerald-50/30 overflow-hidden group transition-all",
                                   img.isPrimary ? "border-emerald-600 ring-4 ring-emerald-50" : "border-emerald-200"
                               )}>
                                   <div className="relative aspect-video overflow-hidden">
                                       <img src={img.preview} className="w-full h-full object-cover" />
                                       <div className="absolute top-3 right-3 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg">
                                          <Upload size={12} />
                                       </div>
                                       <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                          <Button 
                                                type="button"
                                                size="sm" 
                                                className="bg-white text-emerald-900 hover:bg-emerald-600 hover:text-white h-8 text-[9px] font-bold uppercase tracking-widest"
                                                onClick={() => {
                                                   setNewImageFiles(prev => prev.map(p => ({ ...p, isPrimary: p.id === img.id })));
                                                   setExistingImages(prev => prev.map(p => ({ ...p, isPrimary: false })));
                                                }}
                                          >
                                             {img.isPrimary ? "Đã chọn là ảnh chính" : "Chọn là ảnh chính"}
                                          </Button>
                                          <Button 
                                                type="button"
                                                size="sm" 
                                                variant="destructive"
                                                className="h-8 text-[9px] font-bold uppercase tracking-widest"
                                                onClick={() => {
                                                   URL.revokeObjectURL(img.preview);
                                                   setNewImageFiles(prev => prev.filter(p => p.id !== img.id));
                                                }}
                                          >
                                             Hủy tải
                                          </Button>
                                       </div>
                                   </div>
                                   <div className="p-4 space-y-3">
                                       <div className="space-y-1">
                                          <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Ghi chú (Caption)</label>
                                          <Input 
                                             value={img.caption || ""} 
                                             onChange={(e) => setNewImageFiles(prev => prev.map(p => p.id === img.id ? { ...p, caption: e.target.value } : p))}
                                             placeholder="Ghi chú cho ảnh mới..."
                                             className="h-9 text-xs border-emerald-100 focus:border-emerald-500 bg-white"
                                          />
                                       </div>
                                       <div className="space-y-1">
                                          <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Người chụp (Author)</label>
                                          <Input 
                                             value={img.author || ""} 
                                             onChange={(e) => setNewImageFiles(prev => prev.map(p => p.id === img.id ? { ...p, author: e.target.value } : p))}
                                             placeholder="Tên tác giả ảnh..."
                                             className="h-9 text-xs border-emerald-100 focus:border-emerald-500 bg-white"
                                          />
                                       </div>
                                   </div>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                )}

          </form>
       </div>

       {/* thanh nổi chân trang (chủ yếu cho di động) */}
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-40 lg:hidden pointer-events-none">
          <div className="bg-zinc-900/90 backdrop-blur-md p-3 rounded-sm shadow-2xl flex items-center justify-between gap-4 pointer-events-auto border border-zinc-700">
             <div className="flex flex-col">
                <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">Bản ghi</span>
                <span className="text-[10px] text-white font-medium truncate max-w-[150px] italic">{watchScientificName || "Unnamed"}</span>
             </div>
             <Button disabled={isSaving} onClick={handleSubmit(onSubmit)} className="bg-emerald-600 text-white rounded-sm px-6 h-9 font-bold uppercase tracking-widest text-[10px] active:scale-95 transition-all">
                {isSaving ? <Loader2 size={16} className="mr-2 animate-spin" /> : null} Lưu nhanh
             </Button>
          </div>
       </div>

       {/* --- hộp thoại biên tập ảnh --- */}
       {isEditorOpen && editingBlob && (
          <ImageEditor 
             image={editingBlob.url}
             onCancel={() => {
                if (editingBlob.url) URL.revokeObjectURL(editingBlob.url);
                setIsEditorOpen(false);
                setEditingBlob(null);
             }}
             onSave={(croppedUrl) => {
                if (editingBlob.url) URL.revokeObjectURL(editingBlob.url);
                fetch(croppedUrl)
                   .then(res => res.blob())
                   .then(blob => {
                      const file = new File([blob], "cropped_image.webp", { type: "image/webp" });
                      setNewImageFiles(prev => [...prev, {
                         id: editingBlob.id,
                         file,
                         preview: croppedUrl,
                         isPrimary: prev.length === 0 && existingImages.length === 0,
                         caption: "",
                         author: ""
                      }]);
                      setIsEditorOpen(false);
                      setEditingBlob(null);
                   });
             }}
          />
       )}
    </div>
  );
}
