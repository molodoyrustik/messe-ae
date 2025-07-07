import { describe, it, expect, vi, beforeEach } from 'vitest';
import { projectsApi } from '../projects';
import { fetcher } from '../config';

// Mock the fetcher
vi.mock('../config', () => ({
  fetcher: vi.fn(),
}));

describe('projectsApi', () => {
  describe('getProjects', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });
    it('should handle single size range correctly', async () => {
      // Mock fetcher to capture the URL
      const mockFetcher = vi.mocked(fetcher);
      mockFetcher.mockResolvedValueOnce({ data: [], meta: { pagination: {} } });

      // Test < 50 m² - single range uses simple filters
      await projectsApi.getProjects({
        sizeRanges: [{ min: 0, max: 50 }]
      });
      
      let lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[totalSize][$gte]=0');
      expect(lastCall).toContain('filters[totalSize][$lte]=50');

      // Test 50-100 m²
      await projectsApi.getProjects({
        sizeRanges: [{ min: 50, max: 100 }]
      });
      
      lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[totalSize][$gte]=50');
      expect(lastCall).toContain('filters[totalSize][$lte]=100');

      // Test 101-300 m²
      await projectsApi.getProjects({
        sizeRanges: [{ min: 101, max: 300 }]
      });
      
      lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[totalSize][$gte]=101');
      expect(lastCall).toContain('filters[totalSize][$lte]=300');

      // Test > 300 m²
      await projectsApi.getProjects({
        sizeRanges: [{ min: 300, max: 999999 }]
      });
      
      lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[totalSize][$gte]=300');
      expect(lastCall).toContain('filters[totalSize][$lte]=999999');
    });

    it('should handle multiple size ranges with OR', async () => {
      const mockFetcher = vi.mocked(fetcher);
      mockFetcher.mockResolvedValueOnce({ data: [], meta: { pagination: {} } });

      await projectsApi.getProjects({
        sizeRanges: [
          { min: 0, max: 50 },
          { min: 101, max: 300 }
        ]
      });
      
      const lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      
      // Multiple ranges use $or
      expect(lastCall).toContain('filters[$or][0][totalSize][$gte]=0');
      expect(lastCall).toContain('filters[$or][0][totalSize][$lte]=50');
      expect(lastCall).toContain('filters[$or][1][totalSize][$gte]=101');
      expect(lastCall).toContain('filters[$or][1][totalSize][$lte]=300');
    });

    it('should handle client slugs correctly', async () => {
      const mockFetcher = vi.mocked(fetcher);
      mockFetcher.mockResolvedValueOnce({ data: [], meta: { pagination: {} } });

      // Test single client
      await projectsApi.getProjects({
        clientSlugs: ['apple']
      });
      
      let lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[client][slug][$eq]=apple');

      // Test multiple clients - uses $in
      await projectsApi.getProjects({
        clientSlugs: ['apple', 'google']
      });
      
      lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[client][slug][$in][0]=apple');
      expect(lastCall).toContain('filters[client][slug][$in][1]=google');
    });

    it('should not duplicate filters when called multiple times', async () => {
      const mockFetcher = vi.mocked(fetcher);
      mockFetcher.mockResolvedValue({ data: [], meta: { pagination: {} } });

      // First call
      await projectsApi.getProjects({
        sizeRanges: [{ min: 0, max: 50 }]
      });
      
      // Second call with same filter
      await projectsApi.getProjects({
        sizeRanges: [{ min: 0, max: 50 }]
      });
      
      // Both calls should have the same URL structure
      const firstCall = decodeURIComponent(mockFetcher.mock.calls[0][0]);
      const secondCall = decodeURIComponent(mockFetcher.mock.calls[1][0]);
      
      expect(firstCall).toBe(secondCall);
    });

    it('should handle construction types correctly', async () => {
      const mockFetcher = vi.mocked(fetcher);
      mockFetcher.mockResolvedValueOnce({ data: [], meta: { pagination: {} } });

      // Test double-decker only
      await projectsApi.getProjects({
        constructionTypes: ['double-decker']
      });
      
      let lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[constructionType][$eq]=double-decker');

      // Test events only
      await projectsApi.getProjects({
        constructionTypes: ['events']
      });
      
      lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).toContain('filters[eventType][$eq]=event');

      // Test both - should not add any filter
      await projectsApi.getProjects({
        constructionTypes: ['double-decker', 'events']
      });
      
      lastCall = decodeURIComponent(mockFetcher.mock.calls[mockFetcher.mock.calls.length - 1][0]);
      expect(lastCall).not.toContain('constructionType');
      expect(lastCall).not.toContain('eventType');
    });
  });
});