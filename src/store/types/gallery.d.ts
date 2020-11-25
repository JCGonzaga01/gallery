declare module "GalleryType" {
  type GalleryType = {
    id?: string;
    name: string;
    img: string;
  };

  type GalleryList = Array<GalleryType>;
}
