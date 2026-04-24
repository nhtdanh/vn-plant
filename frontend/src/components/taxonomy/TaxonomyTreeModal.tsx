import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Loader2, Plus, Minus } from "lucide-react";
import { useState, useRef, useEffect, useCallback, useMemo, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { hierarchy, tree } from "d3-hierarchy";
import type { TaxonDetail, TaxonAncestor } from "@/types";
import { capitalize } from "@/utils/taxon.utils";
import { cn } from "@/lib/utils";
import { fetchTaxonTreeNodes } from "@/services/taxon.service";

interface TaxonomyTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  plant: TaxonDetail;
  ancestors: TaxonAncestor[];
}

interface TreeNode {
  id: string;
  name: string;
  rank: string;
  slug: string;
  scientificName?: string;
  isTarget?: boolean;
  isExpanded?: boolean;
  isLoading?: boolean;
  isSiblingLoaded?: boolean; // true khi đã fetch siblings từ API (khác với spine-only child)
  children?: TreeNode[];
}

const RANK_COLORS: Record<string, { bg: string, border: string, text: string, label: string }> = {
  root: { bg: "#f1f5f9", border: "#cbd5e1", text: "#0f172a", label: "Gốc" },
  kingdom: { bg: "#e9d5ff", border: "#d8b4fe", text: "#581c87", label: "Giới" },
  phylum: { bg: "#bfdbfe", border: "#93c5fd", text: "#1e3a8a", label: "Ngành" },
  taxonomicClass: { bg: "#a5f3fc", border: "#67e8f9", text: "#083344", label: "Lớp" },
  order: { bg: "#99f6e4", border: "#5eead4", text: "#134e4a", label: "Bộ" },
  family: { bg: "#bbf7d0", border: "#86efac", text: "#064e3b", label: "Họ" },
  genus: { bg: "#fde68a", border: "#fcd34d", text: "#78350f", label: "Chi" },
  species: { bg: "#ffffff", border: "#10b981", text: "#10b981", label: "Loài" },
  subspecies: { bg: "#ecfdf5", border: "#34d399", text: "#065f46", label: "Phân loài" },
  variety: { bg: "#f0fdf4", border: "#4ade80", text: "#166534", label: "Thứ" },
  default: { bg: "#ffffff", border: "#e2e8f0", text: "#334155", label: "" }
};

export function TaxonomyTreeModal({
  isOpen,
  onClose,
  plant,
  ancestors,
}: TaxonomyTreeModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(0.8);
  const [treeData, setTreeData] = useState<TreeNode | null>(null);
  const [loadingNodes, setLoadingNodes] = useState<Set<string>>(new Set());
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const scrollInitial = useRef(true);

  const nodeWidth = 200;
  const nodeHeight = 36;

  const initSpine = useCallback(async () => {
    setIsInitialLoading(true);
    try {
      const filtered = ancestors.filter((anc) => anc.id !== plant.id && anc.rank !== 'kingdom');
      
      let rootNode: TreeNode;
      let targetParentInSpine: TreeNode | null = null;

      if (filtered.length === 0) {
        rootNode = {
          id: plant.id.toString(),
          name: plant.vietnameseName || plant.scientificName,
          scientificName: plant.scientificName,
          rank: plant.rank,
          slug: plant.slug,
          isTarget: true,
          children: [],
        };
      } else {
        rootNode = {
          id: filtered[0].id.toString(),
          name: filtered[0].vietnameseName || filtered[0].scientificName,
          scientificName: filtered[0].scientificName,
          rank: filtered[0].rank,
          slug: filtered[0].slug,
          children: [],
        };

        let current = rootNode;
        filtered.slice(1).forEach((anc) => {
          const newNode: TreeNode = {
            id: anc.id.toString(),
            name: anc.vietnameseName || anc.scientificName,
            scientificName: anc.scientificName,
            rank: anc.rank,
            slug: anc.slug,
            children: [],
          };
          // Đánh dấu node hiện tại là expanded để D3 có thể traverse qua spine
          current.isExpanded = true;
          current.children = [newNode];
          if (anc.id === plant.parentId) {
            targetParentInSpine = newNode;
          }
          current = newNode;
        });

        // nốt đặc biệt: nếu cha là nốt đầu tiên (root)
        if (filtered[0].id === plant.parentId) targetParentInSpine = rootNode;

        const targetNode: TreeNode = {
          id: plant.id.toString(),
          name: plant.vietnameseName || plant.scientificName,
          scientificName: plant.scientificName,
          rank: plant.rank,
          slug: plant.slug,
          isTarget: true,
          children: [],
        };

        if (targetParentInSpine) {
          targetParentInSpine.children = [targetNode];
        } else {
          current.isExpanded = true;
          current.children = [targetNode];
          targetParentInSpine = current;
        }
      }

      // ĐỒNG BỘ: Nạp thêm các nốt con của cha để hiển thị loài đồng cấp
      if (plant.parentId) {
        const result = await fetchTaxonTreeNodes(plant.parentId);
        if (result.success && targetParentInSpine) {
          const siblings: TreeNode[] = result.data.items.map((item) => ({
            id: item.id.toString(),
            name: item.vietnameseName || item.canonicalName,
            scientificName: item.scientificName,
            rank: item.rank,
            slug: item.slug,
            isTarget: item.id === plant.id,
            children: [],
          }));
          targetParentInSpine.children = siblings;
          targetParentInSpine.isExpanded = true;
          targetParentInSpine.isSiblingLoaded = true; // Đánh dấu đã load siblings thật
        }
      }

      setTreeData(rootNode);
    } catch (error) {
      console.error("Initialization failed", error);
    } finally {
      setIsInitialLoading(false);
    }
  }, [ancestors, plant]);

  useEffect(() => {
    if (isOpen) {
      if (!treeData && !isInitialLoading) initSpine();
    } else {
      // reset khi đóng
      setTreeData(null);
      setLoadingNodes(new Set());
      scrollInitial.current = true;
      setIsInitialLoading(false);
    }
  }, [isOpen, initSpine, treeData, isInitialLoading]);


  const updateTreeData = (
    node: TreeNode,
    nodeId: string,
    children: TreeNode[] | null,
    isExpanded: boolean,
    isSiblingLoaded?: boolean
  ): TreeNode => {
    if (node.id === nodeId) {
      return { 
        ...node, 
        children: children === null ? node.children : children, 
        isExpanded, 
        isLoading: false,
        ...(isSiblingLoaded !== undefined && { isSiblingLoaded }),
      };
    }
    if (node.children) {
      return {
        ...node,
        children: node.children.map((child) =>
          updateTreeData(child, nodeId, children, isExpanded, isSiblingLoaded)
        ),
      };
    }
    return node;
  };

  // helper dùng được cả trong functional update (không phụ thuộc closure nodeid)
  const findInTree = (root: TreeNode, id: string): TreeNode | null => {
    if (root.id === id) return root;
    for (const child of root.children || []) {
      const found = findInTree(child, id);
      if (found) return found;
    }
    return null;
  };

  const handleExpandNode = async (nodeId: string) => {
    if (!treeData) return;

    const targetNode = findInTree(treeData, nodeId);

    // rule 1: đã load siblings -> chỉ toggle collapse/expand, không fetch lại
    if (targetNode?.isSiblingLoaded) {
      setTreeData((prev) => {
        if (!prev) return prev;
        const node = findInTree(prev, nodeId);
        return updateTreeData(prev, nodeId, null, !node?.isExpanded);
      });
      return;
    }

    // rule 2: chưa load siblings -> fetch từ api
    setLoadingNodes((prev) => new Set(prev).add(nodeId));
    try {
      const result = await fetchTaxonTreeNodes(Number(nodeId));
      if (result.success) {
        const apiItems = result.data.items;

        setTreeData((prev) => {
          if (!prev) return prev;

          const currentNode = findInTree(prev, nodeId);
          const currentChildren = currentNode?.children || [];

          // merge: ưu tiên giữ existing node (preserve toàn bộ isexpanded/issiblingloaded/children)
          const mergedChildren: TreeNode[] = apiItems.map((item) => {
            const existing = currentChildren.find((c) => c.id === item.id.toString());
            return existing ?? {
              id: item.id.toString(),
              name: item.vietnameseName || item.canonicalName,
              scientificName: item.scientificName,
              rank: item.rank,
              slug: item.slug,
              isTarget: item.id === plant.id,
              children: [],
            };
          });

          // orphan protection: giữ lại existing children không nằm trong api response
          const apiIds = new Set(apiItems.map((i) => i.id.toString()));
          const orphaned = currentChildren.filter((c) => !apiIds.has(c.id));

          return updateTreeData(prev, nodeId, [...mergedChildren, ...orphaned], true, true);
        });
      }
    } catch (error) {
      console.error("Failed to expand node", error);
    } finally {
      setLoadingNodes((prev) => {
        const next = new Set(prev);
        next.delete(nodeId);
        return next;
      });
    }
  };


  const { treeResult, dynamicBounds, minX } = useMemo(() => {
    if (!treeData) return { treeResult: null, dynamicBounds: { width: 1200, height: 800 }, minX: 0 };
    
    const rootNode = hierarchy(treeData, d => d.isExpanded ? d.children : null);
    
    // sử dụng nodesize để khoảng cách nốt là cố định, nốt gốc bắt đầu từ 0
    const treeLayout = tree<TreeNode>().nodeSize([70, 260]);
    const result = treeLayout(rootNode);

    // tính toán vùng bao thực tế của các nốt
    let minX = 0, maxX = 0, minY = 0, maxY = 0;
    result.descendants().forEach(d => {
      // trong hướng ngang: d.x là tọa độ dọc, d.y là tọa độ ngang
      if (d.x < minX) minX = d.x;
      if (d.x > maxX) maxX = d.x;
      if (d.y < minY) minY = d.y;
      if (d.y > maxY) maxY = d.y;
    });

    const padding = 100;
    return { 
      treeResult: result, 
      dynamicBounds: { 
        width: (maxY - minY) + nodeWidth + padding * 2, 
        height: (maxX - minX) + nodeHeight + padding * 2
      },
      minX
    };
  }, [treeData]);

  // logic auto-focus vào nốt chính - đặt sau usememo
  useEffect(() => {
    if (isOpen && treeResult && containerRef.current && scrollInitial.current) {
      const target = treeResult.descendants().find(d => d.data.isTarget);
      if (target) {
        const container = containerRef.current;
        const scrollX = (target.y + 100) * zoom - (container.clientWidth / 2) + 100;
        const scrollY = (target.x + Math.abs(minX) + 100) * zoom - (container.clientHeight / 2) + 100;
        
        container.scrollTo({
          left: Math.max(0, scrollX),
          top: Math.max(0, scrollY),
          behavior: "auto"
        });
        scrollInitial.current = false;
      }
    }
  }, [isOpen, !!treeResult, zoom, minX]);

  // logic tự động mở nhánh cha đã được xử lý trong initspine bằng cách nạp sẵn siblings

  if (!treeData || !treeResult) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(2px)' }}
                className="fixed inset-0 z-[100]"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild aria-describedby="taxonomy-tree-description">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                style={{ backgroundColor: '#ffffff', color: '#0f172a' }}
                className="fixed inset-4 md:inset-10 rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col border border-slate-200"
              >
                {/* tiêu đề */}
                <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }} className="flex items-center justify-between px-6 py-1.5 shrink-0">
                  <div className="flex-1 flex items-center gap-5 overflow-hidden">
                    <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
                      {[
                        { rank: 'phylum', label: 'Ngành' },
                        { rank: 'taxonomicClass', label: 'Lớp' },
                        { rank: 'order', label: 'Bộ' },
                        { rank: 'family', label: 'Họ' },
                        { rank: 'genus', label: 'Chi' },
                        { rank: 'species', label: 'Loài' },
                        { rank: 'subspecies', label: 'Dưới loài' }
                      ].map((item) => {
                        const s = RANK_COLORS[item.rank];
                        if (!s) return null;
                        return (
                          <div key={item.rank} className="flex items-center gap-1.5 shrink-0">
                            <div style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }} className="w-2.5 h-2.5 rounded-full" />
                            <span style={{ color: '#94a3b8' }} className="text-[9.5px] font-bold uppercase tracking-tight">{s.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div style={{ backgroundColor: '#f8fafc' }} className="flex items-center rounded-full p-0.5 border border-slate-100">
                      <ButtonIcon onClick={() => setZoom((z) => Math.max(0.2, z - 0.1))} icon={<ZoomOut size={14} />} />
                      <span className="px-2 text-[10px] font-bold text-slate-500">{Math.round(zoom * 100)}%</span>
                      <ButtonIcon onClick={() => setZoom((z) => Math.min(2, z + 0.1))} icon={<ZoomIn size={14} />} />
                    </div>
                    <Dialog.Close asChild>
                      <button style={{ color: '#94a3b8' }} className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center transition-colors">
                        <X size={18} />
                      </button>
                    </Dialog.Close>
                  </div>
                </div>

                {/* sơ đồ */}
                <div ref={containerRef} style={{ backgroundColor: '#ffffff' }} className="flex-1 relative overflow-auto no-scrollbar active:cursor-grabbing">
                  {isInitialLoading && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="mb-4">
                        <Loader2 size={40} className="text-emerald-500" />
                      </motion.div>
                      <p className="text-sm font-medium text-slate-500 animate-pulse">Đang nạp dữ liệu phả hệ...</p>
                    </div>
                  )}

                  {!isInitialLoading && treeData && treeResult && (
                    <div className="absolute inset-0 p-12 flex items-start justify-start" style={{ transform: `scale(${zoom})`, transformOrigin: "0 0", transition: "transform 0.1s ease-out" }}>
                    <svg width={dynamicBounds.width} height={dynamicBounds.height} className="overflow-visible">
                      <g transform={`translate(100, ${Math.abs(minX) + 100})`}>
                        {/* liên kết */}
                        <AnimatePresence>
                          {(() => {
                            const targetNode = treeResult.descendants().find(d => d.data.isTarget);
                            const mainLineageNodes = targetNode ? targetNode.ancestors() : [];

                            const links = treeResult.links().sort((a, b) => {
                              const isAMain = mainLineageNodes.includes(a.source) && mainLineageNodes.includes(a.target);
                              const isBMain = mainLineageNodes.includes(b.source) && mainLineageNodes.includes(b.target);
                              if (isAMain && !isBMain) return 1;
                              if (!isAMain && isBMain) return -1;
                              return 0;
                            });

                            return links.map((link) => {
                              const sourceX = link.source.y + nodeWidth / 2;
                              const sourceY = link.source.x;
                              const targetX = link.target.y - nodeWidth / 2;
                              const targetY = link.target.x;
                              const midX = (sourceX + targetX) / 2;
                              const pathData = `M${sourceX},${sourceY} H${midX} V${targetY} H${targetX}`;

                              const isMainLineage = mainLineageNodes.includes(link.source) && mainLineageNodes.includes(link.target);

                              return (
                                <motion.path
                                  key={`link-${link.source.data.id}-${link.target.data.id}`}
                                  initial={{ opacity: 0 }}
                                  animate={{ 
                                    opacity: 1,
                                    stroke: isMainLineage ? "#facc15" : "#cbd5e1",
                                    strokeWidth: isMainLineage ? 3 : 1.5
                                  }}
                                  d={pathData}
                                  fill="none"
                                />
                              );
                            });
                          })()}
                        </AnimatePresence>

                        {/* các nút (node) */}
                        {treeResult.descendants().map((node) => {
                          const style = RANK_COLORS[node.data.rank] || RANK_COLORS.default;
                          const isExpanded = node.data.isExpanded;
                          const isLoading = loadingNodes.has(node.data.id);
                          const canExpand = node.data.rank !== "subspecies" && node.data.rank !== "variety";
                          const parentX = node.parent ? node.parent.y : node.y;
                          const parentY = node.parent ? node.parent.x : node.x;

                          return (
                            <motion.g
                              key={`node-${node.data.id}`}
                              initial={{ opacity: 0, x: parentX, y: parentY }}
                              animate={{ opacity: 1, x: node.y, y: node.x }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="cursor-pointer group"
                              onClick={() => handleExpandNode(node.data.id)}
                            >
                              <rect
                                x={-nodeWidth/2}
                                y={-nodeHeight/2}
                                width={nodeWidth}
                                height={nodeHeight}
                                rx={nodeHeight/2}
                                fill={style.bg}
                                stroke={node.data.isTarget ? "#10b981" : style.border}
                                strokeWidth={node.data.isTarget ? "2.5" : "1.2"}
                                className="transition-all duration-200"
                              />
                              
                              <text
                                x={-nodeWidth/2 + 20}
                                y={5}
                                fill={node.data.isTarget ? "#10b981" : "#1e293b"}
                                className={cn(
                                  "text-[12px] transition-colors select-none",
                                  "hover:underline underline-offset-4 decoration-emerald-500/50",
                                  node.data.isTarget ? "font-bold" : "font-semibold pointer-events-auto"
                                )}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/plant/${node.data.slug}`);
                                  onClose();
                                }}
                              >
                                {capitalize((node.data.name || '').toLowerCase())}
                              </text>

                              {canExpand && (
                                <g transform={`translate(${nodeWidth/2 - 20}, 0)`}>
                                  <circle r={10} fill="#ffffff" stroke={style.border} strokeWidth="1" />
                                  {isLoading ? (
                                    <motion.g animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                                      <Loader2 size={10} color="#10b981" className="-translate-x-1 -translate-y-1" />
                                    </motion.g>
                                  ) : (
                                    isExpanded ? (
                                      <Minus size={10} color="#94a3b8" className="-translate-x-1.25 -translate-y-1.25" />
                                    ) : (
                                      <Plus size={10} color="#10b981" className="-translate-x-1.25 -translate-y-1.25" />
                                    )
                                  )}
                                </g>
                              )}
                            </motion.g>
                          );
                        })}
                      </g>
                    </svg>
                  </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function ButtonIcon({ onClick, icon }: { onClick: () => void; icon: ReactNode }) {
  return (
    <button onClick={onClick} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-emerald-500">
      {icon}
    </button>
  );
}
