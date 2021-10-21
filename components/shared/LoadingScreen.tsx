import Image from "next/image";
import spinner from "../../public/assets/Loading_icon.svg";
import styles from "../../styles/LoadingScreen.module.css";
const LoadingScreen = (): JSX.Element => {
  return (
    <div className={styles.screen}>
      <div className={styles.spinner}>
        <Image src={spinner} alt="spinner" />
      </div>
    </div>
  );
};

export default LoadingScreen;
