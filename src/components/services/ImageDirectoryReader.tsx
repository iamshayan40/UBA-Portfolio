'use server';

import { ImageFile, sortImagesByNumber, sortClientImages, sortSalesProofImages } from '@/lib/utils';

export async function readImageDirectory(directoryPath: string): Promise<ImageFile[]> {
  // Hardcoded image lists for each directory
  const directories: Record<string, string[]> = {
    'Sales Proofs': [
      // Top images first (1-9)
      ...Array.from({ length: 9 }, (_, i) => `Top (${i + 1}).jpg`),
      // Original sales images (1-20)
      ...Array.from({ length: 20 }, (_, i) => `sales (${i + 1}).jpg`),
      // Sales 4 images (1-74)
      ...Array.from({ length: 74 }, (_, i) => `sales 4 (${i + 1}).jpg`),
      // Sales 3 images (1-92)
      ...Array.from({ length: 92 }, (_, i) => `sales 3 (${i + 1}).jpg`),
      // Sales 2 images (1-74)
      ...Array.from({ length: 74 }, (_, i) => `sales 2 (${i + 1}).jpg`),
      // Sales 1 images (1-61)
      ...Array.from({ length: 61 }, (_, i) => `sales 1 (${i + 1}).jpg`),
    ],
    'Meta Ads Results': [
      ...Array.from({ length: 30 }, (_, i) => `(${i + 1}).jpg`),
      ...Array.from({ length: 10 }, (_, i) => `meta ${i + 1}.jpeg`)
    ],
    'Client Reviews': [
      ...Array.from({ length: 68 }, (_, i) => `(${i + 1}).jpeg`),
      ...Array.from({ length: 8 }, (_, i) => `Review (${i + 1}).jpeg`)
    ]
  };

  const files = directories[directoryPath] || [];
  
  const images: ImageFile[] = files.map((file, index) => ({
    id: index + 1,
    image: `/${directoryPath}/${file}`,
    type: file.split('.').pop()?.toLowerCase() as 'jpeg' | 'jpg' | 'png'
  }));

  // Use different sorting functions based on directory
  if (directoryPath === 'Sales Proofs') {
    return sortSalesProofImages(images);
  } else if (directoryPath === 'Client Reviews') {
    return sortClientImages(images);
  }
  return sortImagesByNumber(images);
}