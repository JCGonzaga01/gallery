import React from "react";
import assets from "assets";
import { useDeviceType } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Gallery.scss";

const Gallery: React.FC = () => {
  const deviceType = useDeviceType();
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
