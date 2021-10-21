import GetContent from "../../../../helpers/GetContent";
import { ContentListProps } from "../../../../types/interfaces";
import Image from "next/dist/client/image";
import styles from "../../../../styles/ContentText.module.css";
const ContentList = (props: ContentListProps): JSX.Element => {
  const { getContentByLabel } = GetContent();

  const content = props.content?.map((item, index) => {
    if (item.icon) {
      return (
        <div key={index} className={styles.container}>
          <div className={styles.image}>
            <Image src={item.icon} alt="social media logo" />
          </div>
          <div className={styles.listItem}>{getContentByLabel(item.label)}</div>
        </div>
      );
    }
    return (
      <div key={index} className={styles.listItem}>
        {getContentByLabel(item.label)}
      </div>
    );
  });

  return (
    <div>
      <div>{content}</div>
    </div>
  );
};

export default ContentList;
