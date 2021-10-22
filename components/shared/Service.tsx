import Image from "next/dist/client/image";
import Button from "./Button";
import { ServiceProps } from "../../types/interfaces";
import styles from "../../styles/Service.module.scss";
import { useState } from "react";
import modalCloseIcon from "../../public/assets/modalCloseIcon.png";

const Service = (props: ServiceProps): JSX.Element => {

  const { src, title, text, buttonContent, buttonStyles } = props;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen &&
      <div className={styles.modalContainer}>
        <div className={styles.modalWrapper}>
          <div className={styles.modalImage}>
            <Image src={src} alt={"Service image"} layout={"fill"}
                   objectFit={"cover"} />
          </div>
          <h3 className={styles.modalHeading}>{title}</h3>
          <p className={styles.modalText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            asperiores atque dolore dolorum ducimus enim eos, est hic in libero
            maiores maxime natus non obcaecati perferendis quam repellat tempore
            voluptate?
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className={styles.modalCloseButton}
          >
            <Image src={modalCloseIcon} alt={"close"} />
          </button>
        </div>
      </div>}

      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={src} alt={"Service image"} />
        </div>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <button type="button" onClick={() => setModalOpen(true)}>
          <Button content={buttonContent} styles={buttonStyles} />
        </button>
      </div>
    </>
  );
};

export default Service;
