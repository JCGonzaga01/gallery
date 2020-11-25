import { GalleryList } from "GalleryType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchGalleryAsync } from "store/actions/gallery";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchGalleryAsync.request], (_state, _action) => true)
  .handleAction([fetchGalleryAsync.success, fetchGalleryAsync.failure], (_state, _action) => false);

export const payload = createReducer([] as GalleryList).handleAction(
  fetchGalleryAsync.success,
  (_state, action) => action.payload
);

const galleryReducer = combineReducers({
  isFetching,
  payload,
});

export default galleryReducer;
export type GalleryState = ReturnType<typeof galleryReducer>;
