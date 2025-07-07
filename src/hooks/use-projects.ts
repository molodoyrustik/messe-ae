import { useQuery } from '@tanstack/react-query';
import { projectsApi } from '@/lib/api/projects';
import { ProjectsFilters, ProjectsResponse } from '@/types/api';

// Mock data for testing
const mockClients = [
  'Apple', 'Google', 'Microsoft', 'Amazon', 'Facebook', 'Tesla', 'Netflix', 'Adobe',
  'Oracle', 'IBM', 'Intel', 'Cisco', 'Samsung', 'Sony', 'Nintendo', 'Spotify',
  'Uber', 'Airbnb', 'Twitter', 'LinkedIn', 'Salesforce', 'Zoom', 'Slack', 'Dropbox',
  'PayPal', 'Square', 'Stripe', 'Shopify', 'eBay', 'Alibaba', 'Tencent', 'Baidu',
  'Huawei', 'Xiaomi', 'LG', 'Panasonic', 'Canon', 'Nikon', 'Fujifilm', 'GoPro',
  'BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Ford', 'Volkswagen', 'Porsche',
  'Nike', 'Adidas'
];

const mockProjects = mockClients.flatMap((client, index) => 
  Array.from({ length: 3 }, (_, i) => ({
    id: index * 3 + i + 1,
    documentId: `doc-${index * 3 + i + 1}`,
    title: `${client} Exhibition Stand ${i + 1}`,
    slug: `${client.toLowerCase()}-exhibition-stand-${i + 1}`,
    client: {
      id: index + 1,
      documentId: `client-${index + 1}`,
      name: client,
      slug: client.toLowerCase(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
    },
    totalSize: Math.floor(Math.random() * 500) + 20,
    constructionType: Math.random() > 0.7 ? 'double-decker' : 'single-level',
    eventType: Math.random() > 0.8 ? 'event' : 'exhibition',
    eventName: `${client} Expo 2024`,
    eventLocation: ['Dubai', 'Abu Dhabi', 'London', 'Paris', 'Berlin'][Math.floor(Math.random() * 5)],
    eventStartDate: '2024-03-15',
    eventEndDate: '2024-03-18',
    industry: 'Technology',
    standLocation: 'Hall A',
    standNumber: `A${index + 1}`,
    standElements: 'Custom Design',
    images: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    referringCompany: null,
  }))
);

const filterMockProjects = (filters?: ProjectsFilters) => {
  let filtered = [...mockProjects];
  
  // Filter by clients
  if (filters?.clientSlugs && filters.clientSlugs.length > 0) {
    filtered = filtered.filter(project => 
      project.client && filters.clientSlugs!.includes(project.client.slug)
    );
  }
  
  // Filter by size ranges
  if (filters?.sizeRanges && filters.sizeRanges.length > 0) {
    filtered = filtered.filter(project => 
      filters.sizeRanges!.some(range => 
        project.totalSize >= range.min && project.totalSize <= range.max
      )
    );
  }
  
  // Filter by construction types
  if (filters?.constructionTypes && filters.constructionTypes.length > 0) {
    filtered = filtered.filter(project => {
      if (filters.constructionTypes!.includes('double-decker') && project.constructionType === 'double-decker') {
        return true;
      }
      if (filters.constructionTypes!.includes('events') && project.eventType === 'event') {
        return true;
      }
      return false;
    });
  }
  
  // Pagination
  const page = filters?.page || 1;
  const pageSize = filters?.pageSize || 12;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedProjects = filtered.slice(start, end);
  
  return {
    data: paginatedProjects,
    meta: {
      pagination: {
        page,
        pageSize,
        pageCount: Math.ceil(filtered.length / pageSize),
        total: filtered.length,
      }
    }
  } as ProjectsResponse;
};

export const useProjects = (filters?: ProjectsFilters) => {
  return useQuery({
    queryKey: ['projects', filters],
    queryFn: () => {
      console.log('[Mock Projects] Filters:', filters);
      const result = filterMockProjects(filters);
      console.log('[Mock Projects] Filtered count:', result.data.length);
      return Promise.resolve(result);
    },
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