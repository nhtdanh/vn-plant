// vn-plant shared typescript types
// các type này được đồng bộ từ backend

// api responses

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  code?: string;
  errors?: any;
}

export type TaxonomyRank =
  | "kingdom"
  | "phylum"
  | "taxonomicClass"
  | "order"
  | "family"
  | "genus"
  | "species"
  | "subspecies"
  | "variety"
  | "forma";

export type PlantGroup = "angiosperm" | "gymnosperm" | "fern";

export type PublishStatus = "draft" | "published" | "archived";

export type UserRole = "admin" | "editor" | "user";

export type ImageStatus = "pending" | "approved" | "rejected";

export type UserStatus = "active" | "inactive";

// pagination

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

// core models

export interface Taxon {
  id: number;
  slug: string;
  scientificName: string;
  canonicalName: string;
  author: string | null;
  vietnameseName: string | null;
  primaryImageUrl: string | null;
  rank: TaxonomyRank;
  plantGroup: PlantGroup | null;
  parentId: number | null;
  status: PublishStatus;
  hasVietnamRecord: boolean;
  description: string | null;
  descriptionLang: string | null;
  habit: string | null;
  leaf: string | null;
  reproduction: string | null;
  phenology: string | null;
  value: string | null;
  distributionText: string | null;
  note: string | null;
  sourceName: string | null;
  orderInBook: string | null;
  rawDescriptionInBook: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface TaxonImage {
  id: number;
  taxonId: number;
  url: string;
  storageKey: string | null;
  externalSource: string | null;
  caption: string | null;
  blurHash: string | null;
  width: number | null;
  height: number | null;
  author: string | null;
  license: string | null;
  isPrimary: boolean;
  sortOrder: number;
  status: ImageStatus;
  contributorId: string | null;
  recordNote: string | null;
  createdAt: string;

  // quan hệ (tùy chọn)
  taxon?: {
    scientificName: string;
    vietnameseName: string | null;
    slug: string;
  };
  contributor?: {
    displayName: string | null;
    email: string;
    avatarUrl?: string | null;
  };
}

export interface TaxonSynonym {
  id: number;
  scientificName: string;
  sourceName: string | null;
}

export interface TaxonCommonName {
  id: number;
  name: string;
  language: string | null;
  isPrimary: boolean;
  regionNote: string | null;
}

export interface Province {
  id: number;
  name: string;
}

export interface TaxonProvince {
  taxonId: number;
  provinceId: number;
  province: Province;
}

// specialized data structures

// chi tiết taxon cho trang profile
export interface TaxonDetail extends Taxon {
  synonyms: TaxonSynonym[];
  commonNames: TaxonCommonName[];
  images: TaxonImage[];
  provinces: TaxonProvince[];
  children: TaxonChild[]; // danh sách con trực tiếp
  parent?: { id: number; scientificName: string }; // cha (cho chế độ sửa)
  isBookmarked: boolean;
  contributions?: TaxonImage[];
}

// dữ liệu taxon con rút gọn cho danh sách
export interface TaxonChild {
  id: number;
  scientificName: string;
  canonicalName: string;
  vietnameseName: string | null;
  slug: string;
  rank: TaxonomyRank;
  author: string | null;
}

// taxon tổ tiên cho breadcrumb
export interface TaxonAncestor {
  id: number;
  scientificName: string;
  vietnameseName: string | null;
  slug: string;
  rank: TaxonomyRank;
  displayName: string;
}

// gợi ý tìm kiếm (autocomplete)
export interface TaxonSuggestion {
  id: number;
  scientificName: string;
  canonicalName: string;
  vietnameseName: string | null;
  slug: string;
  rank: TaxonomyRank;
  primaryImageUrl: string | null;
  score?: number;
}

// user & authentication

export interface User {
  id: string;
  email: string;
  displayName: string | null;
  avatarUrl: string | null;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

// auth inputs

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  email: string;
  password: string;
  displayName?: string;
}

// admin & taxon inputs

export interface CreateTaxonInput {
  scientificName: string;
  canonicalName?: string;
  vietnameseName?: string;
  rank: TaxonomyRank;
  status: PublishStatus;
  plantGroup?: PlantGroup;
  parentId?: number;
  hasVietnamRecord?: boolean;
  author?: string;
  description?: string;
  habit?: string;
  leaf?: string;
  reproduction?: string;
  phenology?: string;
  value?: string;
  distributionText?: string;
  note?: string;
}

export interface CreateUserInput {
  email: string;
  password?: string;
  displayName: string;
  role?: UserRole;
  status?: UserStatus;
}
