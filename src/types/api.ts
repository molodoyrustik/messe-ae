export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T;
  meta: {
    pagination: Pagination;
  };
}

export interface Client {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ProjectImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  constructionType: 'single-level' | 'double-decker';
  eventType: 'exhibition' | 'event';
  eventName: string;
  eventDate: string;
  firstFloorSize: number;
  secondFloorSize: number;
  totalSize: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  referringCompany: string | null;
  client?: Client;
  images?: ProjectImage[];
}

export type ProjectsResponse = ApiResponse<Project[]>;
export type ClientsResponse = ApiResponse<Client[]>;
export type ProjectResponse = ApiResponse<Project>;

export interface ProjectsFilters {
  clientSlug?: string;
  clientSlugs?: string[];
  constructionType?: 'single-level' | 'double-decker';
  constructionTypes?: string[];
  minSize?: number;
  maxSize?: number;
  sizeRanges?: Array<{ min: number; max: number }>;
  page?: number;
  pageSize?: number;
}

export interface Category {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  test?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  slug: string;
  text: string;
  createDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: ProjectImage;
  category?: Category;
}

export type ArticlesResponse = ApiResponse<Article[]>;
export type ArticleResponse = ApiResponse<Article>;
export type CategoriesResponse = ApiResponse<Category[]>;
export type CategoryResponse = ApiResponse<Category>;

export interface ArticlesFilters {
  page?: number;
  pageSize?: number;
  sort?: string;
  categorySlug?: string;
}

export interface CategoriesFilters {
  page?: number;
  pageSize?: number;
  sort?: string;
}