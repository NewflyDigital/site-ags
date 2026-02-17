import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeNewFly from "../components/rodape-newfly";
import Whats from "../components/whats";
import styles from "../styles/Pmoc.module.css";
import Link from "next/link";

export default function PMOC() {
  return (
    <>
      <Menu />

      {/* BANNER */}
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span>AGS Engenharia & Climatização</span>
          <h2>PMOC</h2>
          <img src="/static/images/wrench.png" alt="Categoria" />
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <img
              className={styles.pmoc}
              src="/static/images/pmoc-01.jpg"
              alt="PMOC AGS"
            />
          </div>

          <div className={styles.box}>
            <h3>PMOC – Plano de Manutenção, Operação e Controle</h3>
            <h4>
              Segurança, qualidade do ar e conformidade legal para sua empresa
            </h4>
            <p>
              <b>O PMOC (Plano de Manutenção</b>, Operação e Controle) é um
              conjunto de procedimentos obrigatórios para sistemas de
              climatização, conforme determina a Lei nº 13.589/2018 e
              regulamentações da ANVISA.
              <br />
              Seu principal objetivo é garantir a qualidade do ar interno,
              preservar a saúde dos ocupantes e assegurar o funcionamento
              eficiente dos equipamentos de climatização.
              <br />A AGS Engenharia elabora, implanta e executa o PMOC de forma
              completa, garantindo que sua empresa esteja dentro das normas
              técnicas e livre de riscos legais.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇO 1 */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div  className={`${styles.box} ${styles.anchor}`}>
            <h3>O que é o PMOC?</h3>

            <p>
              O PMOC é um plano técnico obrigatório para ambientes climatizados
              de uso coletivo com capacidade acima de 60.000 BTUs.
            </p>

            <ul className={styles.lista}>
              <li>Manutenção preventiva</li>
              <li>Inspeções periódicas</li>
              <li>Higienização dos sistemas</li>
              <li>Controle da qualidade do ar</li>
              <li>Registro técnico das intervenções</li>
              <li>Responsabilidade técnica com profissional habilitado</li>
            </ul>
          </div>

          <div className={styles.box}>
            <h3>Por que o PMOC é obrigatório?</h3>

            <p>Além de ser uma exigência legal, o PMOC:</p>

            <ul className={styles.lista}>
              <li>Reduz consumo de energia</li>
              <li>Previne falhas e quebras inesperadas</li>
              <li>Reduz riscos de multas e penalidades</li>
              <li>Aumenta a vida útil dos equipamentos</li>
              <li>Garante qualidade do ar e saúde dos ocupantes</li>
              <li>
                Mantém a empresa regularizada perante órgãos fiscalizadores
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVIÇO 2 */}
      <section className={styles.background}>
        <div className={styles.interno}>
            <img
              className={styles.imagemhorizontal}
              src="/static/images/pmoc-02.jpg"
              alt="PMOC AGS"
            />
        </div>
      </section>

      {/* SERVIÇO 3 */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div id="limpeza" className={`${styles.box} ${styles.anchor}`}>
            <h3>Quem precisa do PMOC?</h3>

            <ul className={styles.lista}>
              <li>Indústrias</li>
              <li>Shopping centers</li>
              <li>Clínicas e hospitais</li>
              <li>Empresas e escritórios</li>
              <li>Escolas e universidades</li>
              <li>Condomínios comerciais</li>
              <li>Ambientes climatizados de uso coletivo</li>
            </ul>

            <p>
              Se há sistema de climatização central ou capacidade acima do
              limite legal, o PMOC é obrigatório.
            </p>
          </div>

          <div className={styles.box}>
            <img
              className={styles.pmocimg }
              src="/static/images/pmoc-03.jpg"
              alt="Limpeza"
            />

          </div>
        </div>
      </section>

      <section className={styles.background3}>
        <div className={styles.interno3}>
          <div className={styles.box3}>
            <h2>Climatização inteligente também é estar dentro da lei.</h2>
            <p>
              Evite riscos, multas e problemas com fiscalização.
              <br />
              Conte com a AGS Engenharia para elaborar e executar o PMOC da sua
              empresa com responsabilidade e excelência técnica.
            </p>
            <Link href="https://api.whatsapp.com/send?phone=5554981346814&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es">
              <button>
                Solicite uma avaliação técnica
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
      <RodapeNewFly />
    </>
  );
}
