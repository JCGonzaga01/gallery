import { combineReducers } from "redux";
import dummyReducer from "store/reducers/dummy";
import galleryReducer from "store/reducers/gallery";

const rootReducer = combineReducers({
  dummy: dummyReducer,
  gallery: galleryReducer,
});

export default rootReducer;
