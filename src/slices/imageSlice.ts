
// src/slices/imagesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ImageData } from '../types/types';
const API_BASE_URL = 'http://127.0.0.1:8005';
axios.defaults.baseURL = API_BASE_URL;
export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const res = await axios.get<ImageData[]>('/images/');
  return res.data;
});

export const uploadImage = createAsyncThunk(
  'images/uploadImage',
  async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('/images/', formData); // אין צורך להחזיר כלום, אלא אם השרת מחזיר את התמונה החדשה
  }
);

const imagesSlice = createSlice({
  name: 'images',
  initialState: [] as ImageData[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default imagesSlice.reducer;
