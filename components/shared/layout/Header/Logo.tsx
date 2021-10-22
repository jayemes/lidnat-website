import { NextComponentType } from "next";
import getContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/Logo.module.css";
const Logo: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = getContent();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>{getContentByLabel("brand_text")}</h1>
    </div>
  );
};

export default Logo;
