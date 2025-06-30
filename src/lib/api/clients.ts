import { ClientsResponse } from '@/types/api';
import { fetcher } from './config';

export const clientsApi = {
  getClients: async (): Promise<ClientsResponse> => {
    return fetcher('/clients?pagination[pageSize]=100');
  },
};