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
  // Handle meta X.jpeg format
  if (filename.toLowerCase().startsWith('meta ')) {
    return parseInt(filename.split(' ')[1].split('.')[0]);
  }
  
  // Handle (X).jpg format
  const match = filename.match(/\((\d+)\)/);
  if (match) {
    return parseInt(match[1]);
  }
  
  // Handle X.jpg format
  const numberMatch = filename.match(/^(\d+)\./);
  if (numberMatch) {
    return parseInt(numberMatch[1]);
  }
  
  return 0;
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

export const getDirectoryImages = (directory: string): ImageFile[] => {
  // This will be populated by the server component
  return [];
};