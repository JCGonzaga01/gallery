import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// REDUX
import { gallery } from "store/selectors/gallery";
import { fetchGalleryAsync, setImageToView, setMenuToggle } from "store/actions/gallery";
//
import assets from "assets";
import { menuDetails } from "constants/menu";
import { Spinner } from "components/_common";
import { useDeviceType } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Menu.scss";

const Menu: React.FC = () => {
  const deviceType = useDeviceType();
  const dispatch = useDispatch();
  const { selectedImageIndex, payload, isFetching, menuToggle } = useSelector(gallery);

  useEffect(() => {
    // NOTE:
    // IF will point to a dynamic images' api, add 'name' in url search params
    // e.g. gallery/?name=images-api
    // ELSE IF single point of images' api or will use local images, comment/remove below codes and just run
    // `dispatch(fetchGalleryAsync.request(''));`
    let galleryName = "";
    if (typeof window !== undefined) {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("name")) galleryName = urlParams.get("name") || "";
    }
    dispatch(fetchGalleryAsync.request(galleryName));
  }, []);

  useEffect(() => {
    dispatch(setImageToView(0));
  }, [payload]);

  const handleOnClickImage = (e: FormEvent) => {
    e.preventDefault();
    const selectedIdx = parseInt(e.currentTarget["id"]);
    dispatch(setImageToView(selectedIdx));
    if (deviceType === "sp") dispatch(setMenuToggle(false));
  };

  return (
    <div className={classNames(styles.wrapper, !menuToggle && styles.hideMenu)}>
      <div className={styles.header}>
        <a href={"/"} target={"_self"}>
          <img src={assets.headerLogo} alt={"Header Logo"} className={styles.headerLogo} />
        </a>
      </div>
      {isFetching ? (
        <Spinner className={styles.spinner} />
      ) : (
        <>
          <div className={styles.detailsTitle}>
            <div className={styles.title}>{payload?.title}</div>
            <div className={styles.description}>{payload?.tagline}</div>
            <div className={styles.iconContainer}>
              {menuDetails.iconList.map((item, idx) => (
                <a key={`${idx}-${item.name}`} href={item.url} target={item.target}>
                  <img src={item.icon} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.imageContainer}>
            {payload?.gallery?.map((item, idx) => (
              <div
                id={idx.toString()}
                key={`${idx}-${item.name}`}
                className={
                  selectedImageIndex === idx ? styles.selectedImage : styles.unSelectedImage
                }
                style={{
                  background: `url(${item.imgUrl})  center center / cover no-repeat`,
                }}
                onClick={handleOnClickImage}
              />
            ))}
          </div>
          <div className={styles.footerName}>{menuDetails.footerName}</div>
        </>
      )}
    </div>
  );
};

export default Menu;
