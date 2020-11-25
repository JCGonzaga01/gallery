import { GalleryList } from "GalleryType";
import { FirebaseDocumentType } from "FirebaseDataType";
import { firestoreParser } from "helpers/functions";

export function fetchGallery(tripId: string): Promise<GalleryList> {
  return new Promise((resolve, reject) => {
    fetch(
      `https://firestore.googleapis.com/v1/projects/jcgonzaga01githubio/databases/(default)/documents/travels/${tripId}`
    )
      .then(async (res) => {
        const data: FirebaseDocumentType = await res.json();
        const parsedData: GalleryList = firestoreParser(data).fields;
        resolve(parsedData);
      })
      .catch((data) => reject(data));
  });
}
