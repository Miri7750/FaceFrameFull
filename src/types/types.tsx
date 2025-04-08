
// src/types.ts
export interface ImageData {
  id: number;
  name: string;
  image_data: string; // base64 image string prefixed with 'data:image/jpeg;base64,'
}

export interface FaceData {
  id: number;
  image_data: string; // base64 face image string prefixed with 'data:image/jpeg;base64,'
} 
 