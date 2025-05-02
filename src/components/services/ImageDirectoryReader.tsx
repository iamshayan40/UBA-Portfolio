'use server';

import fs from 'fs';
import path from 'path';
import { ImageFile, sortImagesByNumber } from '@/lib/utils';

export async function readImageDirectory(directoryPath: string): Promise<ImageFile[]> {
  const publicDir = path.join(process.cwd(), 'public', directoryPath);
  
  try {
    const files = await fs.promises.readdir(publicDir);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.png')
    );

    const images: ImageFile[] = imageFiles.map((file, index) => ({
      id: index + 1,
      image: `/${directoryPath}/${file}`,
      type: file.split('.').pop()?.toLowerCase() as 'jpeg' | 'jpg' | 'png'
    }));

    return sortImagesByNumber(images);
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}