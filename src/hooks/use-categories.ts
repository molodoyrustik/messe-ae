import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '@/lib/api/categories';
import { CategoriesFilters } from '@/types/api';

export const useCategories = (filters?: CategoriesFilters) => {
  return useQuery({
    queryKey: ['categories', filters],
    queryFn: () => categoriesApi.getCategories(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCategory = (slug: string) => {
  return useQuery({
    queryKey: ['category', slug],
    queryFn: () => categoriesApi.getCategoryBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};