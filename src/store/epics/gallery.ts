import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { fetchGalleryAsync } from "store/actions/gallery";

export const fetchGalleryAsyncEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  _state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(fetchGalleryAsync.request)),
    mergeMap((params) =>
      from(api.gallery.fetchGallery(params.payload)).pipe(
        map(fetchGalleryAsync.success),
        catchError((message: string) => of(fetchGalleryAsync.failure(message)))
      )
    )
  );
