import React from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Sobre.module.css";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";
import { Dialog } from "@mui/material";
import ReactPlayer from "react-player";

export default function QuemSomos() {
  const [state, setState] = React.useState({
    openVideo: false,
    videoUrl: "https://www.youtube.com/watch?v=kSNnxvEUVkY"
  });

  const { openVideo, videoUrl } = state;

  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span>SV Engenharia & Serviços</span>
          <h2>Quem somos</h2>
          <img src="/static/images/categoria.png" alt="" />
        </div>
      </section>

      <section className={styles.background}>
        <div className="w-full max-w-[80rem] grid grid-cols-2 justify-center">
          <div className={`${styles.box} !justify-center !items-center`}>
            <h3 className="leading-[3.5rem]">Inovação e confiança em cada projeto</h3>
          </div>

          <div className={styles.box}>
            <p className="!text-[1.1em]">
              A SV Incorporadora Construtora e Serviços LTDA atua desde 2016 com o compromisso de transformar ideias em soluções sólidas,
              seguras e personalizadas no setor da engenharia e serviços. Com mais de 500 projetos realizados e mais de 9 anos de experiência,
              investimos em tecnologia avançada, inovação e qualificação constante para entregar serviços de excelência. Atendemos grandes marcas
              e empresas em diversas cidades do Rio Grande do Sul e Santa Catarina, oferecendo desde construções e incorporações até soluções em
              vigilância, pintura, instalações elétricas, hidráulicas e muito mais. Nosso foco é construir parcerias de confiança e resultados que
              superem expectativas.
            </p>
          </div>
        </div>
      </section>
      {/*
      <section className={styles.background2}>
        <div className={styles.video}>
          <img
            style={{ cursor: "pointer" }}
            className={`${styles.imagem4}`}
            src="/static/images/video-2.png"
            alt=""
            onClick={() => setState((a) => ({ ...a, openVideo: true }))}
          />
        </div>
      </section>
      */}

      <section className={styles.background}>
        <div
          style={{ justifyContent: "space-between" }}
          className={styles.interno}
        >
          <div className={`!h-[17rem] ${styles.valores}`}>
            <h3>Missão</h3>
            <p>
              Expandir nossos horizontes, explorando
              novas oportunidades e mantendo a
              confiança de nossos clientes.
            </p>
          </div>
          <div className={`!h-[17rem] ${styles.valores}`}>
            <h3>Visão</h3>
            <p>
              Fornecer serviços inovadores e confiáveis.
              Comprometidos em oferecer serviços
              de alta qualidade.
            </p>
          </div>
          <div className={`!h-[17rem] ${styles.valores}`}>
            <h3>Valores</h3>
            <p>
              Referência em excelência,
              comprometimento, inovação e
              sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.background3}>
        <div className={styles.interno3}>
          <div className={styles.box3}>
            <Link legacyBehavior href="/servicos">
              <a>
                <button>
                  Conheça nossos serviços
                  <span>
                    <img src="/flecha-botao.png" alt="seta direita" />
                  </span>
                </button>
              </a>
            </Link>
            <h2>Juntos temos um futuro para construir.</h2>
          </div>
        </div>
      </section>

      <Whats />
      <Rodape
        className="z-[12]"
      />
      <RodapeNewFly />
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={openVideo}
        onClose={() => setState((a) => ({ ...a, openVideo: false }))}
        sx={{ zIndex: "999999" }}
      >
        <div className="w-full flex justify-center items-center overflow-hidden">
          <ReactPlayer
            src={videoUrl}
            playing={true}
            style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
          />
        </div>
      </Dialog>
    </>
  );
}
