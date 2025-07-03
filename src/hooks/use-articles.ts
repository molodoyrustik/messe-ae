import { useQuery } from '@tanstack/react-query';
import { articlesApi } from '@/lib/api/articles';
import { ArticlesFilters } from '@/types/api';

export const useArticles = (filters?: ArticlesFilters) => {
  return useQuery({
    queryKey: ['articles', filters],
    queryFn: () => articlesApi.getArticles(filters),
    staleTime: 60 * 1000, // 1 minute
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => articlesApi.getArticleBySlug(slug),
    enabled: !!slug,
    staleTime: 60 * 1000, // 1 minute
  });
};