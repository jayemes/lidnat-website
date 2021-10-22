import getContent from "../../../../helpers/GetContent";
import { TitleProps } from "../../../../types/interfaces";
import styles from "../../../../styles/Title.module.css";
const Title = (props: TitleProps): JSX.Element => {
  const { getContentByLabel } = getContent();

  return <h5 className={styles.h5}>{getContentByLabel(props.content)}</h5>;
};

export default Title;
