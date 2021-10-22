import { NextComponentType } from "next";
import styles from "../../../../styles/Subfooter.module.css";
import { useGetContentByLabel } from "../../../../redux/selectors";

const Subfooter: NextComponentType = (): JSX.Element => {
  const text = useGetContentByLabel("f_copyright");

  return <div className={styles.subfooter}>{text}</div>;
};

export default Subfooter;
