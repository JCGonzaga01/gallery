import React from "react";
import assets from "assets";
import styles from "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <a href={"/"} target={"_self"}>
          <img src={assets.headerLogo} alt={"Header Logo"} className={styles.headerLogo} />
        </a>
      </div>
      <div className={styles.detailsTitle}>
        <div className={styles.title}>Baguio, PH</div>
        <div className={styles.description}>
          I didn’t realize I was making memories, I just knew I was having fun.
        </div>
        <div className={styles.iconContainer}>
          <a href={"https://github.com/JCGonzaga01"} target={"_blank"}>
            <img src={assets.github} alt={"Github"} />
          </a>
          <a href={"https://www.linkedin.com/in/jc-gonzaga/"} target={"_blank"}>
            <img src={assets.linkedin} alt={"LinkedIn"} />
          </a>
          <a href={"mailto:gonzaga.jc1993@gmail.com"} target={"_blank"}>
            <img src={assets.email} alt={"Email"} />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}></div>
      <div className={styles.footerName}>© JOHN CHRISTOPHER GONZAGA</div>
    </div>
  );
};

export default Menu;
