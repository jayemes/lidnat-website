import styles from "../../styles/Gallery.module.css";
import Image from "next/dist/client/image";
import Button from "../shared/Button";
import buttonStyles from "../../styles/Button.module.scss";

import img1 from "../../public/assets/showcase/1.jpeg";
import img2 from "../../public/assets/showcase/2.jpg";
import img3 from "../../public/assets/showcase/3.jpeg";

import { useState } from "react";
import { useGetContentByLabel } from "../../redux/selectors";

const Gallery = (): JSX.Element => {
  const activeButtonStyle = buttonStyles.activateTabButton;
  const inactiveButtonStyle = buttonStyles.deactivateTabButton;

  const [activeTab, setActiveTab] = useState(0);

  const galleryItems = [
    {
      img: img1,
      button: useGetContentByLabel("showcase_button_1"), //redux store
      title: useGetContentByLabel("showcase_label_1"), //redux store
      line1: useGetContentByLabel("showcase_1.1"), //redux store
      line2: useGetContentByLabel("showcase_1.2"), //redux store
      line3: useGetContentByLabel("showcase_1.3"), //redux store
    },
    {
      img: img2,
      button: useGetContentByLabel("showcase_button_2"), //redux store
      title: useGetContentByLabel("showcase_label_2"), //redux store
      line1: useGetContentByLabel("showcase_2.1"), //redux store
      line2: useGetContentByLabel("showcase_2.2"), //redux store
      line3: useGetContentByLabel("showcase_2.3"), //redux store
    },
    {
      img: img3,
      button: useGetContentByLabel("showcase_button_3"), //redux store
      title: useGetContentByLabel("showcase_label_3"), //redux store
      line1: useGetContentByLabel("showcase_3.1"), //redux store
      line2: useGetContentByLabel("showcase_3.2"), //redux store
      line3: useGetContentByLabel("showcase_3.3"), //redux store
    },
  ];

  const tabElements = galleryItems.map((item, index) => {
    return (
      <button key={index} type="button" onClick={() => setActiveTab(index)}>
        <Button
          styles={index === activeTab ? activeButtonStyle : inactiveButtonStyle}
          content={item.button}
        />
      </button>
    );
  });

  const item = galleryItems[activeTab];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>{tabElements}</div>
        <div className={styles.showFrame}>
          <div className={styles.image}>
            <Image src={item.img} alt={"Image"} />
          </div>
          <h2 className={styles.h2}>{item.title}</h2>
          <p className={styles.p}>
            {item.line1}
            <br />
            {item.line2}
            <br />
            {item.line3}
          </p>
        </div>
      </div>
    </>
  );
};

export default Gallery;
