import { NextComponentType } from "next";
import About from "./About";
import Links from "./Links";
import Social from "./Social";
import Subfooter from "./Subfooter";
import styles from "../../../../styles/Footer.module.css";
const Footer: NextComponentType = (): JSX.Element => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.flexbox}>
          <div className={styles.flexitem}>
            <About />
          </div>
          <div className={styles.flexitem}>
            <Links />
          </div>
          <div className={styles.flexitem}>
            <Social />
          </div>
        </div>
      </footer>
      <Subfooter />
    </>
  );
};

export default Footer;
