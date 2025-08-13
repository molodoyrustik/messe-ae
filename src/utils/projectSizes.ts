import { Project } from '@/types/api';

/**
 * Format project size for display
 * Returns formatted size string or null if no sizes available
 */
export const formatProjectSizeDisplay = (project: Project): string | null => {
  // If both floor sizes exist, show "112.2 + 39"
  if (project?.firstFloorSize && project?.secondFloorSize) {
    return `${project.firstFloorSize} + ${project.secondFloorSize}`;
  }
  
  // If only first floor size exists, show it
  if (project?.firstFloorSize) {
    return project.firstFloorSize.toString();
  }
  
  // No sizes available
  return null;
};

/**
 * Get total size for URL generation and filters
 * Only uses totalSize field
 */
export const getProjectTotalSize = (project: Project): number | null => {
  return project.totalSize || null;
};

/**
 * Check if project has displayable size
 */
export const hasDisplaySize = (project: Project): boolean => {
  return !!(project.firstFloorSize);
};

/**
 * Format total size for URL (handles null/undefined)
 */
export const formatTotalSizeForUrl = (project: Project): string => {
  const totalSize = getProjectTotalSize(project);
  if (!totalSize) return '0';
  
  return Number.isInteger(totalSize) 
    ? totalSize.toString() 
    : totalSize.toFixed(1);
};