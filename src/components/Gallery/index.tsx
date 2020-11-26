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
  const [selectedImage, setSelectedImage] = useState({ idx: selectedImageIndex, img: "" });

  useEffect(() => {
    const newSelectedImage = {
      idx: selectedImageIndex,
      img: (payload?.gallery && payload?.gallery[selectedImageIndex].img) || "",
    };
    setSelectedImage(newSelectedImage);
  }, [payload, selectedImageIndex]);

  const handleOnClickArrow = (e: FormEvent) => {
    e.preventDefault();
    const btnType = e.currentTarget["id"];
    let newSelectedImageIndex = selectedImage.idx;
    const galleryLen = payload?.gallery.length;
    if (btnType === "left")
      newSelectedImageIndex = selectedImage.idx - 1 >= 0 ? selectedImage.idx - 1 : galleryLen - 1;
    else if (btnType === "right")
      newSelectedImageIndex = selectedImage.idx + 1 < galleryLen ? selectedImage.idx + 1 : 0;
    const newSelectedImage = {
      idx: newSelectedImageIndex,
      img: (payload?.gallery && payload?.gallery[newSelectedImageIndex].img) || "",
    };

    dispatch(setImageToView(newSelectedImageIndex));
    setSelectedImage(newSelectedImage);
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
          <div
            className={styles.imgDisplay}
            style={{
              background: `url(${selectedImage.img})  center center / cover no-repeat`,
            }}
          />
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
