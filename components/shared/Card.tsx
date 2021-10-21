import Image from "next/dist/client/image";
import styles from "../../styles/Card.module.css";
const Card = (props: {
  src: any;
  title: string | undefined;
  text: string | undefined;
}): JSX.Element => {
  const { src, title, text } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={src} alt="icon" width={35} height={35} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Card;
