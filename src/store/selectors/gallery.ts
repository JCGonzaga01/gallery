import { RootState } from "typesafe-actions";
import { GalleryState } from "store/reducers/gallery";

export const gallery = (state: RootState) => state.gallery;

export const isFetching = (state: GalleryState) => state.isFetching;
