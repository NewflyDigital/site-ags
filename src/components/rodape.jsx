import * as React from "react";
import styles from "../styles/Rodape.module.css";
import Link from "next/link";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        
        {/* COLUNA 1 */}
        <div className={styles.coluna}>
          <Link href="/">
            <img
              src="/static/images/logo.png"
              alt="Logo"
              className={styles.logoAGS}
            />
          </Link>
          <p>
            Soluções completas em ar condicionado para sua residência ou empresa.
          </p>
        </div>

        {/* COLUNA 2 */}
        <div className={styles.coluna}>
          <h4>Serviços</h4>
          <ul>
            <li><Link href="/instalacao">Instalação</Link></li>
            <li><Link href="/manutencao">Manutenção</Link></li>
            <li><Link href="/limpeza">Limpeza</Link></li>
            <li><Link href="/contratos">Contratos</Link></li>
          </ul>
        </div>

        {/* COLUNA 3 */}
        <div className={styles.coluna}>
          <h4>Empresa</h4>
          <ul>
            <li><Link href="/sobre">Sobre Nós</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* COLUNA 4 */}
        <div className={styles.coluna}>
          <h4>Contato</h4>

          <p className={styles.contatoItem}>
            <img src="/static/images/phone-white.png" alt="telefone" />
            (11) 99999-9999
          </p>

          <p className={styles.contatoItem}>
            <img src="/static/images/email-white.png" alt="email" />
            contato@ags.com.br
          </p>

          <div className={styles.redes}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src="/facebook-branco.png" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="/Instagram-branco.png" alt="Instagram" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
