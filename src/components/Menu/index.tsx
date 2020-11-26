import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// REDUX
import { gallery } from "store/selectors/gallery";
import { fetchGalleryAsync, setImageToView } from "store/actions/gallery";
//
import assets from "assets";
import { menuDetails } from "constants/menu";
import { Spinner } from "components/_common";
import { classNames } from "helpers/functions";
import styles from "./Menu.scss";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedImageIndex, payload, isFetching, menuToggle } = useSelector(gallery);

  useEffect(() => {
    dispatch(fetchGalleryAsync.request("baguio-trip"));
  }, []);

  useEffect(() => {
    dispatch(setImageToView(0));
  }, [payload]);

  const handleOnClickImage = (e: FormEvent) => {
    e.preventDefault();
    const selectedIdx = parseInt(e.currentTarget["id"]);
    dispatch(setImageToView(selectedIdx));
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
            <div className={styles.title}>{payload?.name}</div>
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
            {payload?.gallery?.map((item, idx) => {
              return (
                <div
                  id={idx.toString()}
                  key={`${idx}-${item.name}`}
                  className={
                    selectedImageIndex === idx ? styles.selectedImage : styles.unSelectedImage
                  }
                  style={{
                    background: `url(${item.img})  center center / cover no-repeat`,
                  }}
                  onClick={handleOnClickImage}
                />
              );
            })}
          </div>
          <div className={styles.footerName}>{menuDetails.footerName}</div>
        </>
      )}
    </div>
  );
};

export default Menu;
