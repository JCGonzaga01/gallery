import { combineReducers } from "redux";
import galleryReducer from "store/reducers/gallery";

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;
