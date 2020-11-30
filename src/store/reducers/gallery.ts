import { GalleryList } from "GalleryType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchGalleryAsync, setImageToView, setMenuToggle } from "store/actions/gallery";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchGalleryAsync.request], (_state, _action) => true)
  .handleAction([fetchGalleryAsync.success, fetchGalleryAsync.failure], (_state, _action) => false);

export const payload = createReducer({} as GalleryList).handleAction(
  fetchGalleryAsync.success,
  (state, action) => action.payload || state
);

export const selectedImageIndex = createReducer(0 as number).handleAction(
  setImageToView,
  (_state, action) => action.payload
);

export const menuToggle = createReducer(true as boolean).handleAction(
  setMenuToggle,
  (_state, action) => action.payload
);

const galleryReducer = combineReducers({
  isFetching,
  payload,
  selectedImageIndex,
  menuToggle,
});

export default galleryReducer;
export type GalleryState = ReturnType<typeof galleryReducer>;
