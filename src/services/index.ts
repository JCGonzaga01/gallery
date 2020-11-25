import * as logger from "./logger-service";
import * as dummy from "./apiClient/dummy";
import * as gallery from "./apiClient/gallery";

export default {
  logger,
  api: {
    dummy,
    gallery,
  },
};
