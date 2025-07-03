import { ProjectsResponse, ProjectResponse, ProjectsFilters } from '@/types/api';
import { fetcher } from './config';

export const projectsApi = {
  getProjects: async (filters?: ProjectsFilters): Promise<ProjectsResponse> => {
    const params = new URLSearchParams();
    
    // Populate all fields
    params.append('populate', '*');
    
    if (filters?.clientSlug) {
      params.append('filters[client][slug][$eq]', filters.clientSlug);
    }
    
    if (filters?.constructionType) {
      params.append('filters[constructionType][$eq]', filters.constructionType);
    }
    
    if (filters?.minSize !== undefined) {
      params.append('filters[totalSize][$gte]', filters.minSize.toString());
    }
    
    if (filters?.maxSize !== undefined) {
      params.append('filters[totalSize][$lte]', filters.maxSize.toString());
    }
    
    if (filters?.page) {
      params.append('pagination[page]', filters.page.toString());
    }
    
    if (filters?.pageSize) {
      params.append('pagination[pageSize]', filters.pageSize.toString());
    }
    
    const queryString = params.toString();
    console.log('[Projects API] Query string:', queryString);
    
    return fetcher(`/projects?${queryString}`);
  },

  getProjectBySlug: async (slug: string): Promise<ProjectResponse> => {
    const params = new URLSearchParams();
    params.append('filters[slug][$eq]', slug);
    params.append('populate', '*');
    
    const response = await fetcher(`/projects?${params.toString()}`);
    
    if (!response.data || response.data.length === 0) {
      throw new Error('Project not found');
    }
    
    return {
      data: response.data[0],
      meta: response.meta,
    };
  },

  getProjectById: async (id: string): Promise<ProjectResponse> => {
    const params = new URLSearchParams();
    params.append('populate', '*');
    
    return fetcher(`/projects/${id}?${params.toString()}`);
  },
};