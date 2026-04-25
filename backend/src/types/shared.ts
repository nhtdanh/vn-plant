export type TaxonomyRank = 
  | 'kingdom' 
  | 'phylum' 
  | 'taxonomicClass' 
  | 'order' 
  | 'family' 
  | 'genus' 
  | 'species' 
  | 'subspecies' 
  | 'variety' 
  | 'forma';

export type PlantGroup = 'angiosperm' | 'gymnosperm' | 'fern';

export type PublishStatus = 'draft' | 'published' | 'archived';

export type UserRole = 'admin' | 'editor' | 'user';

export type ImageStatus = 'pending' | 'approved' | 'rejected';

export type UserStatus = 'active' | 'inactive';

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
  orderInBook: string | null;
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
  createdAt: string;
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

export interface TaxonDetail extends Taxon {
  synonyms: TaxonSynonym[];
  commonNames: TaxonCommonName[];
  images: TaxonImage[];
  provinces: TaxonProvince[];
  children: TaxonChild[]; 
  isBookmarked: boolean;
}

export interface TaxonChild {
  id: number;
  scientificName: string;
  canonicalName: string;
  vietnameseName: string | null;
  slug: string;
  rank: TaxonomyRank;
  author: string | null;
}

export interface TaxonSuggestion {
  id: number;
  scientificName: string;
  vietnameseName: string | null;
  slug: string;
  rank: TaxonomyRank;
  primaryImageUrl: string | null;
  score?: number;
}

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
