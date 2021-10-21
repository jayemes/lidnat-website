import { NextComponentType } from "next";
import Logo from "./Logo";
import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";
import styles from "../../../../styles/Header.module.css";
const Header: NextComponentType = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          <HomeButton />
          <ContactButton />
        </nav>
      </header>
    </div>
  );
};

export default Header;
