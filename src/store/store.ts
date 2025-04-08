// store.ts
import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../slices/imageSlice";
import facesReducer from "../slices/faceSlice";

export default configureStore({
  reducer: {
    images: imagesReducer,
    faces: facesReducer,
  },
});