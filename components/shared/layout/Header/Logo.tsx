import { NextComponentType } from "next";
import styles from "../../../../styles/Logo.module.css";
import { useGetContentByLabel } from "../../../../redux/selectors";

const Logo: NextComponentType = (): JSX.Element => {

  const brandText = useGetContentByLabel("brand_text")

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>{brandText}</h1>
    </div>
  );
};

export default Logo;
