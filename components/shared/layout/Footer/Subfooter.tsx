import { NextComponentType } from "next";
import getContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/Subfooter.module.css";
const Subfooter: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = getContent();

  return (
    <div className={styles.subfooter}>{getContentByLabel("f_copyright")}</div>
  );
};

export default Subfooter;
