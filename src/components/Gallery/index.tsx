import React, { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// REDUX
import { gallery } from "store/selectors/gallery";
//
import assets from "assets";
import { Spinner } from "components/_common";
import { useDeviceType } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Gallery.scss";

const Gallery: React.FC = () => {
  const deviceType = useDeviceType();
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
    if (btnType === "left" && selectedImage.idx - 1 >= 0) {
      const newSelectedImage = {
        idx: selectedImage.idx - 1,
        img: (payload?.gallery && payload?.gallery[selectedImage.idx - 1].img) || "",
      };
      setSelectedImage(newSelectedImage);
    } else if (btnType === "right" && selectedImage.idx + 1 < payload?.gallery.length) {
      const newSelectedImage = {
        idx: selectedImage.idx + 1,
        img: (payload?.gallery && payload?.gallery[selectedImage.idx + 1].img) || "",
      };
      setSelectedImage(newSelectedImage);
    }
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
