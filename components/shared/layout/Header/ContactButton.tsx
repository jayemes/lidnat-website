import { NextComponentType } from "next";
import GetContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/NavButton.module.css";

const ContactButton: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();
  return (
    <div className={styles.navContact}>{getContentByLabel("nav_contact")}</div>
  );
};

export default ContactButton;
