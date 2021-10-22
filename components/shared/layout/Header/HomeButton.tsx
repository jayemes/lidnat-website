import { NextComponentType } from "next";
import styles from "../../../../styles/NavButton.module.css";
import { useGetContentByLabel } from "../../../../redux/selectors";

const HomeButton: NextComponentType = (): JSX.Element => {
  return (
    <div className={styles.navHome}>{useGetContentByLabel("nav_home")}</div>
  );
};

export default HomeButton;
