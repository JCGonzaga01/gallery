declare module "GalleryType" {
  type GalleryType = {
    id?: string;
    name: string;
    imgUrl: string;
    // vidPoster?: string;
    // vidUrl?: string;
  };

  type GalleryList = {
    title: string;
    tagline: string;
    gallery: Array<GalleryType>;
  };
}
