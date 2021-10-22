import { ContentListProps } from "../../../../types/interfaces";
import Image from "next/dist/client/image";
import styles from "../../../../styles/ContentText.module.css";
import { useGetContentByLabel } from "../../../../redux/selectors";

const ContentItem = (props: {
  item: {
    icon?: any;
    label: string;
  };
}) => {
  const { item } = props;
  const text = useGetContentByLabel(item.label);

  if (item.icon) {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={item.icon} alt="social media logo" />
        </div>
        <div className={styles.listItem}>{text}</div>
      </div>
    );
  }
  return <div className={styles.listItem}>{text}</div>;
};

const ContentList = (props: ContentListProps): JSX.Element => {
  const content = props.content?.map((item, index) => (
    <ContentItem item={item} key={index} />
  ));

  return (
    <div>
      <div>{content}</div>
    </div>
  );
};

export default ContentList;
