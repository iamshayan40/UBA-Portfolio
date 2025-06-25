// src/lib/utils.ts
export function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}

export interface ImageFile {
  id: number;
  image: string;
  type: 'jpeg' | 'jpg' | 'png';
}

export const getImageNumberFromFilename = (filename: string): number => {
  const match = filename.match(/\((\d+)\)|(\d+)/);
  return match ? parseInt(match[1] || match[2]) : Infinity;
};

const getSalesProofPriority = (filename: string): number => {
  if (filename.includes('priority')) return 0;
  if (filename.includes('Top')) return 1;
  if (filename.match(/sales 4 \(/)) return 2;
  if (filename.match(/sales 3 \(/)) return 3;
  if (filename.match(/sales 2 \(/)) return 4;
  if (filename.match(/sales 1 \(/)) return 5;
  if (filename.match(/sales \(/)) return 6;
  return 7;
};

export const sortImagesByNumber = (images: ImageFile[]): ImageFile[] => {
  return images.sort((a, b) => {
    const aName = a.image.split('/').pop() || '';
    const bName = b.image.split('/').pop() || '';
    
    // Check if either file is a meta file
    const aIsMeta = aName.toLowerCase().startsWith('meta');
    const bIsMeta = bName.toLowerCase().startsWith('meta');
    
    // If one is meta and other isn't, meta should come first
    if (aIsMeta && !bIsMeta) return -1;
    if (!aIsMeta && bIsMeta) return 1;
    
    // If both are meta or both are not meta, sort by number
    const aNum = getImageNumberFromFilename(aName);
    const bNum = getImageNumberFromFilename(bName);
    return aNum - bNum;
  });
};

export const sortClientImages = (images: ImageFile[]): ImageFile[] => {
  return images.sort((a, b) => {
    const aName = a.image.split('/').pop() || '';
    const bName = b.image.split('/').pop() || '';
    
    // Check if either file is a Review (X) file
    const aIsTopReview = aName.startsWith('Review');
    const bIsTopReview = bName.startsWith('Review');
    
    // If one is a top review and other isn't, top review should come first
    if (aIsTopReview && !bIsTopReview) return -1;
    if (!aIsTopReview && bIsTopReview) return 1;
    
    // If both are top reviews or both are regular reviews, sort by number
    const aNum = getImageNumberFromFilename(aName);
    const bNum = getImageNumberFromFilename(bName);
    return aNum - bNum;
  });
};

export const sortSalesProofImages = (images: ImageFile[]): ImageFile[] => {
  return images.sort((a, b) => {
    const aName = a.image.split('/').pop() || '';
    const bName = b.image.split('/').pop() || '';

    // First sort by priority (Hot, Top, sales 4, sales 3, sales 2, sales 1)
    const aPriority = getSalesProofPriority(aName);
    const bPriority = getSalesProofPriority(bName);
    
    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }

    // Then sort by number within each priority group
    const aNum = getImageNumberFromFilename(aName);
    const bNum = getImageNumberFromFilename(bName);
    return aNum - bNum;
  });
};

export const getDirectoryImages = (directory: string): ImageFile[] => {
  // This will be populated by the server component
  return [];
};