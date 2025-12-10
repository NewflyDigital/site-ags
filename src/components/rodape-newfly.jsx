import Link from "next/link";
import styles from "../styles/RodapeNewfly.module.css";

export default function RodapeNewFly() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <span>
          Direitos Reservados 2025 |&nbsp;
          <Link legacyBehavior href="/docs/politica privacidade.pdf">
            <a target="_blank">Políticas de Privacidade</a>
          </Link>
          &nbsp;| &nbsp;
          <Link legacyBehavior href="/docs/termo uso.pdf">
            <a target="_blank">Termos de Uso</a>
          </Link>
          &nbsp; |&nbsp;
          <Link legacyBehavior href="/docs/politica-de-cookies.pdf">
            <a target="_blank">Política de Cookies</a>
          </Link>
          &nbsp;|&nbsp;Desenvolvido por
        </span>
        <Link legacyBehavior href="https://www.newflydigital.com.br/">
          <a target="_blank">
            <img src="/newfly.png" alt="NewFly" />
          </a>
        </Link>
      </div>
    </div>
  );
}
