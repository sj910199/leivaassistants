import fs from 'fs';
import path from 'path';

export function getBase64Image(imagePath: string): string {
  // Resolve relative to project root
  const fullPath = path.resolve(process.cwd(), imagePath);
  const imageBuffer = fs.readFileSync(fullPath);
  const base64Image = imageBuffer.toString('base64');

  const ext = path.extname(imagePath).toLowerCase();
  const mimeType = ext === '.webp' ? 'image/webp' : 'image/png';

  return `data:${mimeType};base64,${base64Image}`;
}


export function getBlurStyle(imagePath: string):string
{
  return `background-image: url('${imagePath}'); background-size: cover; background-position: center;`
}
