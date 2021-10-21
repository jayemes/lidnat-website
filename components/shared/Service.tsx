import Image from "next/dist/client/image";
import Button from "./Button";
import { ServiceProps } from "../../types/interfaces";
import styles from "../../styles/Service.module.css";
import { useRef, useState } from "react";
import modalCloseIcon from "../../public/assets/modalCloseIcon.png";
const Service = (props: ServiceProps): JSX.Element => {
  const { src, title, text, buttonContent, buttonStyles } = props;
  const modalRef = useRef(null);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    //const scrollPosition = document.documentElement.style;

    //console.log(scrollPosition);
    if (modal) {
      modalRef.current.style.visibility = "hidden";
      document.body.style.position = "static";
    } else {
      modalRef.current.style.visibility = "visible";
      document.body.style.position = "absolute";
    }
    setModal(!modal);
  };
  return (
    <>
      <div ref={modalRef} className={styles.modalContainer}>
        <div className={styles.modalWrapper}>
          <div className={styles.modalImage}>
            <Image src={src} alt={"Service image"} />
          </div>
          <h3 className={styles.modalHeading}>{title}</h3>
          <p className={styles.modalText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas
            rerum nemo libero suscipit! Quaerat rerum temporibus veritatis
            repudiandae impedit eligendi, deserunt soluta assumenda fugit,
            adipisci natus nihil nulla quibusdam.
          </p>
          <p className={styles.modalText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            temporibus nemo soluta obcaecati eius, reprehenderit iusto
            voluptatem facilis commodi nostrum inventore excepturi aut porro,
            quibusdam natus ab non maxime voluptatum?
          </p>
          <p className={styles.modalText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias
            veritatis dicta libero suscipit nam consequatur aut ullam temporibus
            eius accusamus mollitia fugit, ipsa, sequi quas sit. Dolores,
            laboriosam a.
          </p>
          <button
            type="button"
            onClick={() => toggleModal()}
            className={styles.modalCloseButton}
          >
            <Image src={modalCloseIcon} alt={"close"} />
          </button>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={src} alt={"Service image"} />
        </div>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.text}>{text}</p>
        {/* button on click setModal */}
        <button type="button" onClick={() => toggleModal()}>
          <Button content={buttonContent} styles={buttonStyles} />
        </button>
      </div>
    </>
  );
};

export default Service;
