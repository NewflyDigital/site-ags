import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Servicos.module.css";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";
import { Margin } from "@mui/icons-material";

export default function servicos() {
  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span className="mt-[6rem]">SV Engenharia & Serviços</span>
          <h2>Serviços</h2>
          <img src="/static/images/categoria.png" />
        </div>
      </section>

      <section className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            {" "}
            <h3>Excelência em serviços</h3>
            <img className={styles.projetos} src="/static/images/512.png" />
          </div>

          <div className={styles.box}>
            <ul>
              <li>
                <img src="/static/images/categoria-01.png" />
              </li>
              <li>
                <img src="/static/images/categoria-02.png" />
              </li>
              <li>
                <img src="/static/images/categoria-03.png" />
              </li>
              <li>
                <img src="/static/images/categoria-verde.png" />
              </li>
              <li>
                <img src="/static/images/categoria-04.png" />
              </li>
              <li>
                <img src="/static/images/categoria-05.png" />
              </li>
            </ul>
            <p>
              Possuímos uma longa jornada histórica de serviços de qualidade que
              se atrelam ao compromisso com a excelência que é o alicerce de
              nossa empresa. Com anos de experiência, oferecemos serviços de
              qualidade incomparável para atender às suas necessidades.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-01.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Construção e incorporação
            </h3>
            <p>
            Projetar, construir e manter edificações e infraestruturas.
            </p>
          </div>

          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-02.png" />
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-00.png" />
          </div>

          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-02.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Terraplenagem
            </h3>
            <p>
            Manipulação do terreno para adequá-lo às necessidades de uma determinada construção.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-03.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Instalação e manutenção elétrica
            </h3>
            <p>
            Sistema de componentes e dispositivos que conduzem eletricidade de forma segura e eficiente em edifício ou estrutura.
            </p>
          </div>

          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-03.png" />
          </div>
        </div>
      </section>

      <section style={{marginBottom:"100px"}} className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-04.png" />
          </div>

          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-04.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Instalação e manutenção hidráulica e gás
            </h3>
            <p>
            Instalação e manutenção hidráulica e gás
            </p>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-05.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Pintura

            </h3>
            <p>
            Processo de aplicação de tintas, vernizes ou outros revestimentos em uma superfície para melhorar a sua estética, proteção e funcionalidade.
            </p>
          </div>

          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-05.png" />
          </div>
        </div>
      </section>

      <section style={{marginBottom:"100px"}} className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-06.png" />
          </div>

          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-06.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Paisagismo
            </h3>
            <p>
            Prática de planejar, projetar e criar ambientes externos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-08.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Vigilância e segurança privada
            </h3>
            <p>
            Conjunto de medidas, procedimentos e recursos utilizados por empresas e indivíduos para proteger pessoas ou propriedades.
            </p>
          </div>

          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-07.png" />
          </div>
        </div>
      </section>

      <section style={{marginBottom:"100px"}} className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-08.png" />
          </div>

          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-07.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Monitoramento de sistema de segurança eletrônico
            </h3>
            <p>
            Acompanhamento em tempo real de dispositivos e tecnologias através de profissionais em centrais de monitoramento.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div style={{ marginTop: "5rem" }} className={styles.interno}>
          <div className={styles.box}>
            {" "}
            <img
              className={styles.servicos}
              src="/static/images/categoria-09.png"
            />
            <h3
              style={{
                color: "#313131",
                fontSize: "48px",
                margin: "1rem 0rem",
              }}
            >
              Limpeza
            </h3>
            <p>
            Procedimentos realizados para manter ambientes limpos, higienizados e organizados.
            </p>
          </div>

          <div className={styles.box}>
            <img className={styles.servicoimg} src="/static/images/servicos-09.png" />
          </div>
        </div>
      </section>

      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
