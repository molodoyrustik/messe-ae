import { ArticlesResponse, ArticleResponse, ArticlesFilters } from '@/types/api';
import { fetcher } from './config';

export const articlesApi = {
  getArticles: async (filters?: ArticlesFilters): Promise<ArticlesResponse> => {
    const params = new URLSearchParams();
    
    // Populate all fields including category
    params.append('populate', '*');
    
    if (filters?.categorySlug) {
      params.append('filters[category][slug][$eq]', filters.categorySlug);
    }
    
    if (filters?.page) {
      params.append('pagination[page]', filters.page.toString());
    }
    
    if (filters?.pageSize) {
      params.append('pagination[pageSize]', filters.pageSize.toString());
    }
    
    if (filters?.sort) {
      params.append('sort', filters.sort);
    } else {
      // Default sort by createDate descending
      params.append('sort', 'createDate:desc');
    }
    
    const queryString = params.toString();
    console.log('[Articles API] Query string:', queryString);
    
    return fetcher(`/articles?${queryString}`);
  },

  getArticleBySlug: async (slug: string): Promise<ArticleResponse> => {
    const params = new URLSearchParams();
    params.append('filters[slug][$eq]', slug);
    params.append('populate', '*');
    
    const response = await fetcher(`/articles?${params.toString()}`);
    
    if (!response.data || response.data.length === 0) {
      throw new Error('Article not found');
    }
    
    return {
      data: response.data[0],
      meta: response.meta,
    };
  },
};