import { ClientsResponse } from '@/types/api';
import { fetcher } from './config';
import { projectsApi } from './projects';

export const clientsApi = {
  getClients: async (): Promise<ClientsResponse> => {
    return fetcher('/clients?pagination[pageSize]=100');
  },

  getClientsWithProjectCounts: async (): Promise<ClientsResponse> => {
    // First, get all clients
    console.log('[Clients API] Fetching all clients...');
    const clientsResponse = await fetcher('/clients?pagination[pageSize]=100') as ClientsResponse;
    console.log(`[Clients API] Found ${clientsResponse.data.length} clients`);
    
    // Get ALL projects in one request
    console.log('[Clients API] Fetching all projects to count by client...');
    const allProjectsResponse = await projectsApi.getProjects({
      pageSize: 100, // Get all projects
    });
    console.log(`[Clients API] Found ${allProjectsResponse.data.length} total projects`);
    
    // Count projects per client
    const projectCountsByClient = new Map<string, number>();
    
    // Initialize all clients with 0 projects
    clientsResponse.data.forEach(client => {
      projectCountsByClient.set(client.slug, 0);
    });
    
    // Count projects for each client
    allProjectsResponse.data.forEach(project => {
      if (project.client?.slug) {
        const currentCount = projectCountsByClient.get(project.client.slug) || 0;
        projectCountsByClient.set(project.client.slug, currentCount + 1);
      }
    });
    
    // Add project counts to clients
    const clientsWithCounts = clientsResponse.data.map(client => {
      const projectCount = projectCountsByClient.get(client.slug) || 0;
      console.log(`[Clients API] Client ${client.slug} has ${projectCount} projects`);
      return {
        ...client,
        projectCount
      };
    });

    console.log('[Clients API] All client project counts calculated successfully');
    
    // Return response with updated data
    return {
      ...clientsResponse,
      data: clientsWithCounts
    };
  },
};