import { NextComponentType } from "next";
import styles from "../../../../styles/NavButton.module.css";
import { useGetContentByLabel } from "../../../../redux/selectors";

const ContactButton: NextComponentType = (): JSX.Element => {

  const text = useGetContentByLabel("nav_contact");

  return (
    <div className={styles.navContact}>{text}</div>
  );
};

export default ContactButton;
