import { NextComponentType } from "next";
import GetContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/NavButton.module.css";
const HomeButton: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();
  return <div className={styles.navHome}>{getContentByLabel("nav_home")}</div>;
};

export default HomeButton;
