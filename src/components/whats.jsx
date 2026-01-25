import styles from "../styles/WhatsApp.module.css";
import Link from "next/link";

function Whats() {
  return (
    <div className={styles.background}>
      <Link legacyBehavior href="https://api.whatsapp.com/send?phone=5554981346814&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es">
        <a target="_blank">
          <img src="/whatsapp.png" alt="Whats App" />
        </a>
      </Link>
    </div>
  );
}

export default Whats;
