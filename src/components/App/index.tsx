import React from "react";
import Gallery from "components/Gallery";
import Menu from "components/Menu";
import styles from "./App.scss";

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Gallery />
      <Menu />
    </div>
  );
};

export default App;
