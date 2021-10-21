import GetContent from "../../../../helpers/GetContent";
import { ContentTextProps } from "../../../../types/interfaces";
import styles from "../../../../styles/ContentText.module.css";
const ContentText = (props: ContentTextProps): JSX.Element => {
  const { getContentByLabel } = GetContent();
  return <div className={styles.text}>{getContentByLabel(props.content)}</div>;
};

export default ContentText;
