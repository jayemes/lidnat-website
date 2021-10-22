import { NextComponentType } from "next";
import getContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/NavButton.module.css";
const HomeButton: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = getContent();
  return <div className={styles.navHome}>{getContentByLabel("nav_home")}</div>;
};

export default HomeButton;
