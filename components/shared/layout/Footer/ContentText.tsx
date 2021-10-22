
import { ContentTextProps } from "../../../../types/interfaces";
import styles from "../../../../styles/ContentText.module.css";
import { useGetContentByLabel } from "../../../../redux/selectors";

const ContentText = (props: ContentTextProps): JSX.Element => {

  const text = useGetContentByLabel(props.content)

  return <div className={styles.text}>{text}</div>;
};

export default ContentText;
