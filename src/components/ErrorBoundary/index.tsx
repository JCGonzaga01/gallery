import React from "react";
import assets from "assets";
import { errorDetails } from "constants/errorBoundary";
import styles from "./ErrorBoundary.scss";

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<{ children }, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.errorRobot}>
            <img src={errorDetails.icon} alt={"Error Robot"} />
          </div>
          <div className={styles.errorDetails}>
            <p className={styles.title}>{errorDetails.title}</p>
            <p className={styles.description}>{errorDetails.description}</p>
            <div className={styles.contactEmail}>
              <img src={assets.paperPlane} alt={"Paper Plane"} />
              <a href={`mailto:${errorDetails.contactEmail}`} target={"_blank"}>
                {errorDetails.contactEmail}
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
