import { combineEpics } from "redux-observable";

import * as dummyEpics from "store/epics/dummy";
import * as galleryEpics from "store/epics/gallery";

export default combineEpics(...Object.values(dummyEpics), ...Object.values(galleryEpics));
