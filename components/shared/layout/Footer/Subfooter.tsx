import { NextComponentType } from "next";
import GetContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/Subfooter.module.css";
const Subfooter: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();

  return (
    <div className={styles.subfooter}>{getContentByLabel("f_copyright")}</div>
  );
};

export default Subfooter;
