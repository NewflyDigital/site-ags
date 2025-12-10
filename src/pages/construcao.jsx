import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Servicos2.module.css";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";

export default function servicos() {
  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno}></div>
      </section>

      <section style={{ maxHeight: "30rem" }} className={styles.background2}>
        
        <div className={styles.box}>
        <Link legacyBehavior href="/servicos">
          <a className={styles.voltar}>
             <img src="/static/images/seta-branca-tras.png" />&nbsp;VOLTAR
          </a>
        </Link>

          <h3 className="mt-[2rem]">SERVIÇO 2</h3>
          <p className="my-[2rem]">
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry s standard dummy text ever since the
            1500s, when an unknown printer is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </section>

      <section className={styles.background}>
        <img
          className={styles.imgprincicipal}
          src="/static/images/construcao.png"
        />

        <div className={styles.interno}>
          <img
            className={styles.carrossel}
            src="/static/images/construcao-01.png"
          />

          <img
            className={styles.carrossel}
            src="/static/images/construcao-02.png"
          />

          <img
            className={styles.carrossel}
            src="/static/images/construcao-03.png"
          />
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.box}>
          <p className="mt-[3rem]">
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry s standard dummy text ever since the
            1500s, when an unknown printer is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff" }}>&nbsp;</section>
      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
