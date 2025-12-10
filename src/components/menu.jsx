import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile?.addEventListener("click", toggleMenu);

    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const menu = document.getElementById(styles.menuheader);

      if (winScroll > 0) {
        menu.classList.add(styles["menu-alternative"]);
      } else {
        menu.classList.remove(styles["menu-alternative"]);
      }
    });
  }, []);

  const [showSubMenu, setShowSubMenu] = React.useState(false);

  function handleMouseEnter() {
    setShowSubMenu(true);
  }

  function handleMouseLeave() {
    setShowSubMenu(false);
  }

  function toggleMenu() {
    const nav = document.getElementById(`${styles.nav}`);
    nav.classList.toggle(styles.active);
  }

  return (
    <div id={styles.menuheader} className={styles.header}>
      <div className={styles.interno}>
        
        {/* LOGO */}
        <Link href="/" passHref>
          <img
            src="/static/images/logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </Link>

        {/* BOTÃO MOBILE */}
        <button id={`${styles.btn_mobile}`}>
          <span id={`${styles.hamburguer}`}></span>
        </button>

        {/* MENU PRINCIPAL */}
        <ul
          id={`${styles.nav}`}
          className={`${styles.menu} ${styles.navbar} ${styles.a2}`}
        >
          <li className={styles.li}>
            <Link href="/" passHref>Início</Link>
          </li>

          <li className={styles.li}>
            <Link href="#sobre" passHref>Sobre</Link>
          </li>

          <li className={styles.li}>
            <Link href="#servicos" passHref>Serviços</Link>
          </li>

      {/*SubMenu Modelo
      
          <li
            className={styles.li}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/obras" passHref>Obras</Link>

            {showSubMenu && (
              <ul className={styles.submenu}>
                <li className={styles.li}>
                  <Link href="/concluidas" passHref>Concluídas</Link>
                </li>

                <li className={styles.li}>
                  <Link href="/em-andamento" passHref>Em Andamento</Link>
                </li>
              </ul>
            )}
          </li>
          */}

          <li className={styles.li}>
            <Link href="#contato" passHref>Contato</Link>
          </li>
        </ul>

        {/* LADO DIREITO (TELEFONE + BOTÃO) */}
        <div className={styles.right}>
          
          <div className={styles.phone}>
            <img src="/phone.png" alt="Telefone" />
            <span>(11) 99999-9999</span>
          </div>

          <Link href="/" passHref>
            <button className={styles.btn_orcamento}>
              Orçamento Grátis
            </button>
          </Link>

{/*
        <ul className={styles.social_media}>
            <li>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                passHref
              >
                <img src="/facebook.png" alt="Facebook" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                passHref
              >
                <img src="/Instagram.png" alt="Instagram" />
              </Link>
            </li>
          </ul>
*/}

        </div>
      </div>
    </div>
  );
}

export default Menu;
