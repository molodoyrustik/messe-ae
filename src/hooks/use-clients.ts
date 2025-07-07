import { useQuery } from '@tanstack/react-query';
import { clientsApi } from '@/lib/api/clients';
import { ClientsResponse } from '@/types/api';

// Mock clients data for testing
const mockClientsData: ClientsResponse = {
  data: [
    'Apple', 'Google', 'Microsoft', 'Amazon', 'Facebook', 'Tesla', 'Netflix', 'Adobe',
    'Oracle', 'IBM', 'Intel', 'Cisco', 'Samsung', 'Sony', 'Nintendo', 'Spotify',
    'Uber', 'Airbnb', 'Twitter', 'LinkedIn', 'Salesforce', 'Zoom', 'Slack', 'Dropbox',
    'PayPal', 'Square', 'Stripe', 'Shopify', 'eBay', 'Alibaba', 'Tencent', 'Baidu',
    'Huawei', 'Xiaomi', 'LG', 'Panasonic', 'Canon', 'Nikon', 'Fujifilm', 'GoPro',
    'BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Ford', 'Volkswagen', 'Porsche',
    'Nike', 'Adidas'
  ].map((name, index) => ({
    id: index + 1,
    documentId: `client-${index + 1}`,
    name,
    slug: name.toLowerCase(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
  })),
  meta: {
    pagination: {
      page: 1,
      pageSize: 100,
      pageCount: 1,
      total: 50,
    }
  }
};

export const useClients = () => {
  return useQuery({
    queryKey: ['clients'],
    queryFn: () => {
      console.log('[Mock Clients] Returning 50 mock clients');
      return Promise.resolve(mockClientsData);
    },
  });
};