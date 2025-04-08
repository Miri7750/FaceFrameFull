
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import facesReducer from '../slices/faceSlice';
import imagesReducer from '../slices/imageSlice';

export const store = configureStore({
  reducer: {
    faces: facesReducer,
    images: imagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

