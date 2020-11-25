import { GalleryList } from "GalleryType";
import { createAsyncAction } from "typesafe-actions";

export const fetchGalleryAsync = createAsyncAction(
  "FETCH_GALLERY_ASYNC_REQUEST",
  "FETCH_GALLERY_ASYNC_SUCCCESS",
  "FETCH_GALLERY_ASYNC_FAILURE"
)<string, GalleryList, string>();
