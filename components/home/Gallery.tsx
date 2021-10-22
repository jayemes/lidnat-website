
import styles from "../../styles/Gallery.module.css";
import Image from "next/dist/client/image";
import Button from "../shared/Button";
import buttonStyles from "../../styles/Button.module.css";

import img1 from "../../public/assets/showcase/1.jpeg";
import img2 from "../../public/assets/showcase/2.jpg";
import img3 from "../../public/assets/showcase/3.jpeg";

import { useRef, useState } from "react";
import { GalleryProps } from "../../types/interfaces";
import { useGetContentByLabel } from "../../redux/selectors";

const Gallery = (props: GalleryProps): JSX.Element => {
  const activeButtonStyle = buttonStyles.activateTabButton;
  const inactiveButtonStyle = buttonStyles.deactivateTabButton;
  const [button1Style, setButton1Style] = useState(activeButtonStyle);
  const [button2Style, setButton2Style] = useState(inactiveButtonStyle);
  const [button3Style, setButton3Style] = useState(inactiveButtonStyle);
  const [frame1Style, setFrame1Style] = useState(styles.showFrame);
  const [frame2Style, setFrame2Style] = useState(styles.displayNone);
  const [frame3Style, setFrame3Style] = useState(styles.displayNone);

  const galleryHandler = [
    {
      id: 1,
      img: img1,
      buttonText: "Button 1",
      buttonStyle: button1Style, //state
      buttonRef: useRef(null),
      frameRef: useRef(null),
      frameStyle: frame1Style, //state
      button: useGetContentByLabel("showcase_button_1"), //redux store
      title: useGetContentByLabel("showcase_label_1"), //redux store
      line1: useGetContentByLabel("showcase_1.1"), //redux store
      line2: useGetContentByLabel("showcase_1.2"), //redux store
      line3: useGetContentByLabel("showcase_1.3"), //redux store
      setFrame: setFrame1Style, //state
      setButton: setButton1Style //state
    },
    {
      id: 2,
      img: img2,
      buttonText: "Button 2",
      buttonStyle: button2Style, //state
      buttonRef: useRef(null),
      frameRef: useRef(null),
      frameStyle: frame2Style, //state
      button: useGetContentByLabel("showcase_button_2"), //redux store
      title: useGetContentByLabel("showcase_label_2"), //redux store
      line1: useGetContentByLabel("showcase_2.1"), //redux store
      line2: useGetContentByLabel("showcase_2.2"), //redux store
      line3: useGetContentByLabel("showcase_2.3"), //redux store
      setFrame: setFrame2Style, //state
      setButton: setButton2Style //state
    },
    {
      id: 3,
      img: img3,
      buttonTitle: "Button 3",
      buttonStyle: button3Style, //state
      buttonRef: useRef(null),
      frameRef: useRef(null),
      frameStyle: frame3Style, //state
      button: useGetContentByLabel("showcase_button_3"), //redux store
      title: useGetContentByLabel("showcase_label_3"), //redux store
      line1: useGetContentByLabel("showcase_3.1"), //redux store
      line2: useGetContentByLabel("showcase_3.2"), //redux store
      line3: useGetContentByLabel("showcase_3.3"), //redux store
      setFrame: setFrame3Style, //state
      setButton: setButton3Style //state
    }
  ];

  const tabElements = galleryHandler.map((item) => {
    return (
      <button
        key={item.id}
        type="button"
        ref={item.buttonRef}
        title={item.buttonTitle}
        onClick={() => {
          const active = galleryHandler.find((tab) => tab.id === item.id);
          const inactive = galleryHandler.find(
            (tab) => tab.buttonStyle === activeButtonStyle
          );
          active?.setButton(activeButtonStyle);
          inactive?.setButton(inactiveButtonStyle);
          inactive?.setFrame(styles.hideFrame);
          // setTimeout(() => {
          //   inactive.frameRef.current.style.display = "none";
          //   active.frameRef.current.style.display = "block";
          //   active?.setFrame(styles.showFrame);
          // }, 150);
        }}
      >
        <Button styles={item.buttonStyle} content={item.button} />
      </button>
    );
  });

  const frameElements = galleryHandler.map((item) => {
    return (
      <div key={item.id} className={item.frameStyle} ref={item.frameRef}>
        <div className={styles.image}>
          <Image src={item.img} alt={item.id.toString()} />
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
    );
  });

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>{tabElements}</div>
        <div>{frameElements}</div>
      </div>
    </>
  );
};

export default Gallery;
