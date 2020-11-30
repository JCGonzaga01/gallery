import { GalleryList } from "GalleryType";
import { FirebaseDocumentType } from "FirebaseDataType";
import { firestoreParser } from "helpers/functions";

export function fetchGallery(galleryName: string): Promise<GalleryList> {
  return new Promise((resolve, reject) => {
    fetch(
      `https://firestore.googleapis.com/v1/projects/jcgonzaga01githubio/databases/(default)/documents/travels/${galleryName}`
    )
      .then(async (res) => {
        const data: FirebaseDocumentType = await res.json();
        const parsedData: GalleryList = firestoreParser(data).fields;
        const filteredGallery = parsedData.gallery.filter((item) => item.imgUrl);
        resolve({ ...parsedData, gallery: filteredGallery });
      })
      .catch((data) => reject(data));
  });
}
