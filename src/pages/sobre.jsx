import React from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Sobre.module.css";
import Link from "next/link";

export default function QuemSomos() {
  return (
    <>
      <Menu />

      {/* BANNER */}
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span>AGS Engenharia & Climatização</span>
          <h2>Quem somos</h2>
          <img src="/static/images/categoria.png" alt="" />
        </div>
      </section>

      {/* TEXTO PRINCIPAL */}
      <section className={styles.background}>
        <div className="w-full max-w-[80rem] grid grid-cols-2 justify-center">
          <div className={`${styles.box} !justify-center !items-center`}>
            <h3 className="leading-[3.5rem]">
              Conforto, eficiência e confiança em cada projeto
            </h3>
          </div>

          <div className={styles.box}>
            <p className="!text-[1.1em]">
              A AGS Engenharia é especializada em soluções completas de
              climatização para residências, empresas e indústrias. Atuamos com
              foco em qualidade, eficiência energética e segurança, oferecendo
              serviços de instalação, manutenção e projetos personalizados de
              ar condicionado.
              <br /><br />
              Com uma equipe técnica qualificada e constante atualização
              tecnológica, entregamos conforto térmico, economia e desempenho,
              sempre respeitando normas técnicas e as necessidades específicas
              de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className={styles.background}>
        <div
          style={{ justifyContent: "space-between" }}
          className={styles.interno}
        >
          <div className={`!h-[17rem] ${styles.valores}`}>
            <h3>Missão</h3>
            <p>
              Oferecer soluções em climatização com qualidade,
              segurança e eficiência, garantindo conforto
              e satisfação aos nossos clientes.
            </p>
          </div>

          <div className={`!h-[17rem] ${styles.valores}`}>
            <h3>Visão</h3>
            <p>
              Ser referência regional em engenharia de
              climatização, reconhecida pela excelência
              técnica e atendimento.
            </p>
          </div>

          <div className={`!h-[17rem] ${styles.valores}`}>
            <h3>Valores</h3>
            <p>
              Comprometimento, ética, inovação,
              responsabilidade e respeito ao cliente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.background3}>
        <div className={styles.interno3}>
          <div className={styles.box3}>
            <h2>
              Climatização inteligente começa com
              quem entende do assunto.
            </h2>
            <Link href="/servicos">
              <button>
                Conheça nossos serviços
                <span>
                  <img src="/flecha-botao.png" alt="seta direita" />
                </span>
              </button>
            </Link>

            
          </div>
        </div>
      </section>

      <Whats />
      <Rodape />
    </>
  );
}
