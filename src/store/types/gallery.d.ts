declare module "GalleryType" {
  type GalleryType = {
    id?: string;
    name: string;
    img: string;
  };

  type GalleryList = {
    name: string;
    tagline: string;
    gallery: Array<GalleryType>;
  };
}
