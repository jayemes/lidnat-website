import { NextComponentType } from "next";
import GetContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/Logo.module.css";
const Logo: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>{getContentByLabel("brand_text")}</h1>
    </div>
  );
};

export default Logo;
