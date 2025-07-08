import { useQuery } from '@tanstack/react-query';
import { clientsApi } from '@/lib/api/clients';

export const useClients = () => {
  return useQuery({
    queryKey: ['clients'],
    queryFn: clientsApi.getClients,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

export const useClientsWithProjectCounts = () => {
  return useQuery({
    queryKey: ['clients-with-counts'],
    queryFn: clientsApi.getClientsWithProjectCounts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};