import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import assets from "assets";
import { useDeviceType } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Gallery.scss";
import { gallery } from "store/selectors/gallery";
import { fetchGalleryAsync } from "store/actions/gallery";

const Gallery: React.FC = () => {
  const deviceType = useDeviceType();
  const dispatch = useDispatch();
  const { payload } = useSelector(gallery);

  useEffect(() => {
    dispatch(fetchGalleryAsync.request("tst"));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.arrowBtn, styles.arrowLeft)} onClick={() => {}}>
        <img src={assets.arrow} alt={"Left Button"} />
      </div>
      <div
        className={styles.imgDisplay}
        style={{
          background: `url(https://images.unsplash.com/photo-1422207134147-65fb81f59e38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)  center center / cover no-repeat`,
          // Parallex is not supported in tl and sp
          // backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
        }}
      />
      <div className={classNames(styles.arrowBtn, styles.arrowRight)} onClick={() => {}}>
        <img src={assets.arrow} alt={"Right Button"} />
      </div>
    </div>
  );
};

export default Gallery;
