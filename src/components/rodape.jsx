import * as React from "react";
import styles from "../styles/Rodape.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#c4c4c4",
    },
    secondary: {
      main: "#c4c4c4",
    },
  },
};

const theme = createTheme(themeOptions);

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.coluna}>
          <img
            src="/static/images/logo-branco.png"
            alt="Logo AGS"
            className={styles.logo}
          />
          <p>
            Soluções completas em ar condicionado para sua residência ou
            empresa.
          </p>
        </div>

        <div className={styles.coluna}>
          <h4>Serviços</h4>
          <ul>
            <li>Instalação</li>
            <li>Manutenção</li>
            <li>Limpeza</li>
            <li>Contratos</li>
          </ul>
        </div>

        <div className={styles.coluna}>
          <h4>Empresa</h4>
          <ul>
            <li>Sobre Nós</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </div>

        <div className={styles.coluna}>
          <h4>Contato</h4>
          <p>(11) 99999-9999</p>
          <p>contato@ags.com.br</p>
          <div className={styles.redes}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/facebook-branco.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/Instagram-branco.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
