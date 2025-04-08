// // src/slices/facesSlice.ts
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { FaceData } from '../types/types';

// export const fetchFaces = createAsyncThunk('faces/fetchFaces', async () => {
//   const res = await axios.get<FaceData[]>('/faces/');
//   return res.data;
// });

// interface FacesState {
//   faces: FaceData[];
// }

// const initialState: FacesState = {
//   faces: [],

// };

// const facesSlice = createSlice({
//   name: 'faces',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchFaces.fulfilled, (state, action) => {
//       state.faces = action.payload;
//     });
//   },
// });

// export default facesSlice.reducer;

// src/slices/facesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FaceData, ImageData } from '../types/types';
const API_BASE_URL = 'http://127.0.0.1:8004';

export const fetchFaces = createAsyncThunk(API_BASE_URL+'/faces/fetchFaces', async () => {
  const res = await axios.get<FaceData[]>(API_BASE_URL+'/faces/');
  console.log('Fetched faces:', res.data);
  console.log('Fetched faces:', res);
  return res.data;
});

export const fetchImagesForFace = createAsyncThunk(
  'faces/fetchImagesForFace',
  async (faceId: number) => {
    const res = await axios.get<ImageData[]>(API_BASE_URL+`/faces/${faceId}/images/`);
    return { faceId, images: res.data };
  }
);

interface FacesState {
  faces: FaceData[];
  faceImages: { [faceId: number]: ImageData[] };
}

const initialState: FacesState = {
  faces: [],
  faceImages: {},
};

const facesSlice = createSlice({
  name: 'faces',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFaces.fulfilled, (state, action) => {
      state.faces = action.payload;
    });
    builder.addCase(fetchImagesForFace.fulfilled, (state, action) => {
      const { faceId, images } = action.payload;
      state.faceImages[faceId] = images;
    });
  },
});

export default facesSlice.reducer;
