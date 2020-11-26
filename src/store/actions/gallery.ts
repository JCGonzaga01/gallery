import { GalleryList } from "GalleryType";
import { createAction, createAsyncAction } from "typesafe-actions";

export const fetchGalleryAsync = createAsyncAction(
  "FETCH_GALLERY_ASYNC_REQUEST",
  "FETCH_GALLERY_ASYNC_SUCCCESS",
  "FETCH_GALLERY_ASYNC_FAILURE"
)<string, GalleryList, string>();

export const setImageToView = createAction("SET_IMAGE_TO_VIEW")<number>();

export const setMenuToggle = createAction("SET_MENU_TOGGLE")<boolean>();
