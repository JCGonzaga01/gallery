import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// REDUX
import { setImageToView } from "store/actions/gallery";
import { gallery } from "store/selectors/gallery";
//
import assets from "assets";
import { Spinner } from "components/_common";
import { useDeviceType } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Gallery.scss";

const Gallery: React.FC = () => {
  const deviceType = useDeviceType();
  const dispatch = useDispatch();
  const { selectedImageIndex, payload, isFetching } = useSelector(gallery);

  const handleOnClickArrow = (e: FormEvent) => {
    e.preventDefault();
    const btnType = e.currentTarget["id"];
    let newSelectedImageIndex = selectedImageIndex;
    const galleryLen = payload?.gallery.length;
    if (btnType === "left")
      newSelectedImageIndex = selectedImageIndex - 1 >= 0 ? selectedImageIndex - 1 : 0;
    else if (btnType === "right")
      newSelectedImageIndex =
        selectedImageIndex + 1 < galleryLen ? selectedImageIndex + 1 : galleryLen - 1;

    dispatch(setImageToView(newSelectedImageIndex));
  };

  return (
    <div className={styles.wrapper}>
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <div
            id={"left"}
            className={classNames(styles.arrowBtn, styles.arrowLeft)}
            onClick={handleOnClickArrow}
          >
            <img src={assets.arrow} alt={"Left Button"} />
          </div>
          {payload?.gallery?.map((item, idx) => (
            <div
              key={`${idx}-${item.name}`}
              className={selectedImageIndex === idx ? styles.imgDisplay : styles.imgHide}
              style={{
                background: `url(${item.img})  center center / cover no-repeat`,
              }}
            />
          ))}
          <div
            id={"right"}
            className={classNames(styles.arrowBtn, styles.arrowRight)}
            onClick={handleOnClickArrow}
          >
            <img src={assets.arrow} alt={"Right Button"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
