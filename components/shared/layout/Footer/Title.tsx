
import { TitleProps } from "../../../../types/interfaces";
import styles from "../../../../styles/Title.module.css";
import { useGetContentByLabel } from "../../../../redux/selectors";
const Title = (props: TitleProps): JSX.Element => {

  return <h5 className={styles.h5}>{useGetContentByLabel(props.content)}</h5>;
};

export default Title;
