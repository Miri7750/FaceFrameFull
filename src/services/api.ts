const API_BASE_URL = 'http://127.0.0.1:8005';

export const fetchImages = async () => {
  const response = await fetch(`${API_BASE_URL}/images/`);
  return response.json();
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  
  await fetch(`${API_BASE_URL}/images/`, {
    method: 'POST',
    body: formData,
  });
};

export const fetchFaces = async () => {
  const response = await fetch(`${API_BASE_URL}/faces/`);
  return response.json();
};
export const fetchImagesForFace = async (faceId: number) => {
  const response = await fetch(`${API_BASE_URL}/faces/${faceId}/images/`);
  return response.json();
};
