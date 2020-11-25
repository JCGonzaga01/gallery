import { combineEpics } from "redux-observable";

import * as galleryEpics from "store/epics/gallery";

export default combineEpics(...Object.values(galleryEpics));
