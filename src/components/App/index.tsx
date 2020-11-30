import React from "react";
import ErrorBoundary from "components/ErrorBoundary";
import Gallery from "components/Gallery";
import Menu from "components/Menu";
import styles from "./App.scss";

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <Gallery />
        <Menu />
      </ErrorBoundary>
    </div>
  );
};

export default App;
