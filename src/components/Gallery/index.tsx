import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// REDUX
import { setImageToView, setMenuToggle } from "store/actions/gallery";
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
  const { selectedImageIndex, payload, isFetching, menuToggle } = useSelector(gallery);

  useEffect(() => {
    const setHeightProperty = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setHeightProperty();
    window.addEventListener("resize", setHeightProperty);
    return () => window.removeEventListener("resize", setHeightProperty);
  }, []);

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

  const handleOnclickMenu = () => dispatch(setMenuToggle(!menuToggle));

  return (
    <div
      className={classNames(
        styles.wrapper,
        deviceType === "sp"
          ? menuToggle
            ? styles.hideSPImage
            : styles.showSPImage
          : menuToggle
          ? styles.shortImg
          : styles.expandImg
      )}
    >
      {isFetching ? (
        <Spinner />
      ) : (
        ((deviceType === "sp" && !menuToggle) || deviceType !== "sp") && (
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
                className={classNames(
                  styles.imgWrapper,
                  selectedImageIndex === idx ? styles.imgDisplay : styles.imgHide
                )}
                style={{
                  background: `url(${item.imgUrl})  center center / cover no-repeat`,
                }}
              >
                <span>{item.name}</span>
              </div>
            ))}
            <div
              id={"right"}
              className={classNames(styles.arrowBtn, styles.arrowRight)}
              onClick={handleOnClickArrow}
            >
              <img src={assets.arrow} alt={"Right Button"} />
            </div>
            <div className={styles.menuToggle} onClick={handleOnclickMenu}>
              {menuToggle ? (
                <div className={styles.closeMenu}>
                  <span />
                  <span />
                </div>
              ) : (
                <div className={styles.burgerMenu}>
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Gallery;
