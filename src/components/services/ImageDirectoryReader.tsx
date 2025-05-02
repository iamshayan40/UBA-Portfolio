'use server';

import { ImageFile, sortImagesByNumber } from '@/lib/utils';

export async function readImageDirectory(directoryPath: string): Promise<ImageFile[]> {
  // Hardcoded image lists for each directory
  const directories: Record<string, string[]> = {
    'Sales Proofs': Array.from({ length: 1 }, (_, i) => `${i + 1}.jpg`),
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

  return sortImagesByNumber(images);
}