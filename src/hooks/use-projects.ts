import { useQuery } from '@tanstack/react-query';
import { projectsApi } from '@/lib/api/projects';
import { ProjectsFilters } from '@/types/api';

export const useProjects = (filters?: ProjectsFilters) => {
  return useQuery({
    queryKey: ['projects', filters],
    queryFn: () => projectsApi.getProjects(filters),
  });
};

export const useProjectBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: () => projectsApi.getProjectBySlug(slug),
    enabled: !!slug,
  });
};

export const useProject = (documentId: string) => {
  return useQuery({
    queryKey: ['project', documentId],
    queryFn: () => projectsApi.getProjectById(documentId),
    enabled: !!documentId,
  });
};