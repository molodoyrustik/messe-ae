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
  referringCompany: Record<string, unknown> | null;
  client?: Client;
  images?: ProjectImage[];
}

export type ProjectsResponse = ApiResponse<Project[]>;
export type ClientsResponse = ApiResponse<Client[]>;
export type ProjectResponse = ApiResponse<Project>;

export interface ProjectsFilters {
  clientSlug?: string;
  constructionType?: 'single-level' | 'double-decker';
  minSize?: number;
  maxSize?: number;
  page?: number;
  pageSize?: number;
}