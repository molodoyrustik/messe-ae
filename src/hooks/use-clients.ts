import { useQuery } from '@tanstack/react-query';
import { clientsApi } from '@/lib/api/clients';

export const useClients = () => {
  return useQuery({
    queryKey: ['clients'],
    queryFn: clientsApi.getClients,
  });
};