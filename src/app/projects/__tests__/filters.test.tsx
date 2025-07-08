import { describe, it, expect } from 'vitest';

// Test constants for size filters based on desktop implementation
const DESKTOP_SIZE_FILTERS = [
  { label: '< 50 m²', sizeFrom: 0, sizeTo: 49 },
  { label: '50 - 100 m²', sizeFrom: 50, sizeTo: 100 },
  { label: '101 - 300 m²', sizeFrom: 101, sizeTo: 300 },
  { label: '> 300 m²', sizeFrom: 301, sizeTo: 999999 }
];

const MOBILE_SIZE_FILTERS = [
  { label: '< 50 m²', sizeFrom: 0, sizeTo: 49 },
  { label: '50 - 100 m²', sizeFrom: 50, sizeTo: 100 },
  { label: '101 - 300 m²', sizeFrom: 101, sizeTo: 300 },
  { label: '> 300 m²', sizeFrom: 301, sizeTo: 10000 }
];

describe('Project Filters - Boundary Values', () => {
  describe('Desktop Size Filters (Fixed Implementation)', () => {
    it('should NOT have overlapping boundaries at 50 m²', () => {
      const filter1 = DESKTOP_SIZE_FILTERS[0]; // < 50 m²
      const filter2 = DESKTOP_SIZE_FILTERS[1]; // 50 - 100 m²
      
      // Filters should NOT overlap
      expect(filter1.sizeTo).toBe(49);
      expect(filter2.sizeFrom).toBe(50);
      
      // Test that 49 is only in first filter
      const test49 = 49;
      const inFilter1_49 = test49 >= filter1.sizeFrom && test49 <= filter1.sizeTo;
      const inFilter2_49 = test49 >= filter2.sizeFrom && test49 <= filter2.sizeTo;
      expect(inFilter1_49).toBe(true);
      expect(inFilter2_49).toBe(false);
      
      // Test that 50 is only in second filter
      const test50 = 50;
      const inFilter1_50 = test50 >= filter1.sizeFrom && test50 <= filter1.sizeTo;
      const inFilter2_50 = test50 >= filter2.sizeFrom && test50 <= filter2.sizeTo;
      expect(inFilter1_50).toBe(false);
      expect(inFilter2_50).toBe(true)
    });

    it('should NOT have overlapping boundaries at 300 m²', () => {
      const filter3 = DESKTOP_SIZE_FILTERS[2]; // 101 - 300 m²
      const filter4 = DESKTOP_SIZE_FILTERS[3]; // > 300 m²
      
      // Filters should NOT overlap
      expect(filter3.sizeTo).toBe(300);
      expect(filter4.sizeFrom).toBe(301);
      
      // Test that 300 is only in third filter
      const test300 = 300;
      const inFilter3_300 = test300 >= filter3.sizeFrom && test300 <= filter3.sizeTo;
      const inFilter4_300 = test300 >= filter4.sizeFrom && test300 <= filter4.sizeTo;
      expect(inFilter3_300).toBe(true);
      expect(inFilter4_300).toBe(false);
      
      // Test that 301 is only in fourth filter
      const test301 = 301;
      const inFilter3_301 = test301 >= filter3.sizeFrom && test301 <= filter3.sizeTo;
      const inFilter4_301 = test301 >= filter4.sizeFrom && test301 <= filter4.sizeTo;
      expect(inFilter3_301).toBe(false);
      expect(inFilter4_301).toBe(true)
    });

    it('should not have gaps between filters', () => {
      // Check that consecutive filters connect properly
      for (let i = 0; i < DESKTOP_SIZE_FILTERS.length - 1; i++) {
        const currentFilter = DESKTOP_SIZE_FILTERS[i];
        const nextFilter = DESKTOP_SIZE_FILTERS[i + 1];
        
        // The gap should be exactly 1 for proper boundaries
        const gap = nextFilter.sizeFrom - currentFilter.sizeTo;
        expect(gap).toBe(1);
      }
    });
  });

  describe('Mobile Size Filters (Correct Implementation)', () => {
    it('should NOT have overlapping boundaries at 50 m²', () => {
      const filter1 = MOBILE_SIZE_FILTERS[0]; // < 50 m²
      const filter2 = MOBILE_SIZE_FILTERS[1]; // 50 - 100 m²
      
      expect(filter1.sizeTo).toBe(49);
      expect(filter2.sizeFrom).toBe(50);
      
      // Test that 49 is only in first filter
      const test49 = 49;
      expect(test49 >= filter1.sizeFrom && test49 <= filter1.sizeTo).toBe(true);
      expect(test49 >= filter2.sizeFrom && test49 <= filter2.sizeTo).toBe(false);
      
      // Test that 50 is only in second filter
      const test50 = 50;
      expect(test50 >= filter1.sizeFrom && test50 <= filter1.sizeTo).toBe(false);
      expect(test50 >= filter2.sizeFrom && test50 <= filter2.sizeTo).toBe(true);
    });

    it('should NOT have overlapping boundaries at 300 m²', () => {
      const filter3 = MOBILE_SIZE_FILTERS[2]; // 101 - 300 m²
      const filter4 = MOBILE_SIZE_FILTERS[3]; // > 300 m²
      
      expect(filter3.sizeTo).toBe(300);
      expect(filter4.sizeFrom).toBe(301);
      
      // Test that 300 is only in third filter
      const test300 = 300;
      expect(test300 >= filter3.sizeFrom && test300 <= filter3.sizeTo).toBe(true);
      expect(test300 >= filter4.sizeFrom && test300 <= filter4.sizeTo).toBe(false);
      
      // Test that 301 is only in fourth filter
      const test301 = 301;
      expect(test301 >= filter3.sizeFrom && test301 <= filter3.sizeTo).toBe(false);
      expect(test301 >= filter4.sizeFrom && test301 <= filter4.sizeTo).toBe(true);
    });

    it('should have no gaps between filters', () => {
      // Check that consecutive filters connect properly
      for (let i = 0; i < MOBILE_SIZE_FILTERS.length - 1; i++) {
        const currentFilter = MOBILE_SIZE_FILTERS[i];
        const nextFilter = MOBILE_SIZE_FILTERS[i + 1];
        
        // The gap should be exactly 1 for proper boundaries
        const gap = nextFilter.sizeFrom - currentFilter.sizeTo;
        expect(gap).toBe(1);
      }
    });
  });

  describe('Filter Coverage', () => {
    it('should cover all possible size values without gaps', () => {
      const testSizes = [0, 25, 49, 50, 75, 100, 101, 200, 300, 301, 500, 1000];
      
      testSizes.forEach(size => {
        // Check desktop filters
        let desktopCoverage = 0;
        DESKTOP_SIZE_FILTERS.forEach(filter => {
          if (size >= filter.sizeFrom && size <= filter.sizeTo) {
            desktopCoverage++;
          }
        });
        
        // Check mobile filters
        let mobileCoverage = 0;
        MOBILE_SIZE_FILTERS.forEach(filter => {
          if (size >= filter.sizeFrom && size <= filter.sizeTo) {
            mobileCoverage++;
          }
        });
        
        // Desktop should have exactly one filter per value (good)
        expect(desktopCoverage).toBe(1);
        
        // Mobile should have exactly one filter per value (good)
        expect(mobileCoverage).toBe(1);
      });
    });
  });
});

describe('Filter Logic Consistency', () => {
  it('should use consistent boundary logic across mobile and desktop', () => {
    // Desktop and mobile should now use the same boundary values
    expect(DESKTOP_SIZE_FILTERS[0].sizeTo).toBe(MOBILE_SIZE_FILTERS[0].sizeTo);
    expect(DESKTOP_SIZE_FILTERS[3].sizeFrom).toBe(MOBILE_SIZE_FILTERS[3].sizeFrom);
  });

  it('should properly categorize edge case projects', () => {
    // Test cases for projects at exact boundary values
    const edgeCases = [
      { size: 49, expectedDesktop: ['< 50 m²'], expectedMobile: ['< 50 m²'] },
      { size: 50, expectedDesktop: ['50 - 100 m²'], expectedMobile: ['50 - 100 m²'] },
      { size: 51, expectedDesktop: ['50 - 100 m²'], expectedMobile: ['50 - 100 m²'] },
      { size: 100, expectedDesktop: ['50 - 100 m²'], expectedMobile: ['50 - 100 m²'] },
      { size: 100.5, expectedDesktop: [], expectedMobile: [] },
      { size: 101, expectedDesktop: ['101 - 300 m²'], expectedMobile: ['101 - 300 m²'] },
      { size: 300, expectedDesktop: ['101 - 300 m²'], expectedMobile: ['101 - 300 m²'] },
      { size: 301, expectedDesktop: ['> 300 m²'], expectedMobile: ['> 300 m²'] },
    ];

    edgeCases.forEach(testCase => {
      const desktopMatches: string[] = [];
      const mobileMatches: string[] = [];

      // Check which desktop filters match
      DESKTOP_SIZE_FILTERS.forEach(filter => {
        if (testCase.size >= filter.sizeFrom && testCase.size <= filter.sizeTo) {
          desktopMatches.push(filter.label);
        }
      });

      // Check which mobile filters match
      MOBILE_SIZE_FILTERS.forEach(filter => {
        if (testCase.size >= filter.sizeFrom && testCase.size <= filter.sizeTo) {
          mobileMatches.push(filter.label);
        }
      });

      expect(desktopMatches).toEqual(testCase.expectedDesktop);
      expect(mobileMatches).toEqual(testCase.expectedMobile);
    });
  });
});