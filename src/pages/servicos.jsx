import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeNewFly from "../components/rodape-newfly";
import Whats from "../components/whats";
import styles from "../styles/Servicos.module.css";

export default function Servicos() {
  return (
    <>
      <Menu />

      {/* BANNER */}
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span>AGS Engenharia & Climatização</span>
          <h2>Serviços</h2>
          <img src="/static/images/wrench.png" alt="Categoria" />
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <img
              className={styles.projetos}
              src="/static/images/servicos-excelencia.jpg"
              alt="Projetos AGS"
            />
          </div>

          <div className={styles.box}>
            <ul>
              <li>
                <img src="/static/images/categoria-01.png" alt="" />
              </li>
              <li>
                <img src="/static/images/categoria-02.png" alt="" />
              </li>
              <li>
                <img src="/static/images/categoria-03.png" alt="" />
              </li>
              <li>
                <img src="/static/images/categoria-04.png" alt="" />
              </li>
              <li>
                <img src="/static/images/categoria-05.png" alt="" />
              </li>
            </ul>
            <h3>Excelência em climatização</h3>
            <p>
              A AGS oferece soluções completas em climatização para residências,
              comércios e empresas. Atuamos com instalação, manutenção e
              projetos personalizados, sempre focados em eficiência, conforto
              térmico e economia de energia.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇO 1 */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div 
          id="instalacao"
          className={`${styles.box} ${styles.anchor}`}>
            <img
              className={styles.servicos}
              src="/static/images/categoria-01.png"
              alt=""
            />
            <h3>Instalação de ar-condicionado</h3>
            <p>
              Instalação profissional de sistemas split, multi split, VRF e
              centrais, seguindo normas técnicas e garantindo máxima eficiência
              do equipamento.
            </p>
          </div>

          <div className={styles.box}>
            <img
              className={styles.servicoimg}
              src="/static/images/servicos2-Instalacao.jpg"
              alt="Instalação"
            />
          </div>
        </div>
      </section>

      {/* SERVIÇO 2 */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <img
              className={styles.servicoimg}
              src="/static/images/servicos2-Manutencao-Corretiva.jpg"
              alt="Manutenção"
            />
          </div>

          <div
          id="manutencao"
         className={`${styles.box} ${styles.anchor}`}>
            <img
              className={styles.servicos}
              src="/static/images/servicos2-Manutencao-Corretiva.png"
              alt=""
            />
            <h3>Manutenção preventiva e corretiva</h3>
            <p>
              Serviços completos de manutenção para aumentar a vida útil do
              equipamento, reduzir consumo de energia e evitar falhas
              inesperadas.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇO 3 */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div
          id="limpeza"
          className={`${styles.box} ${styles.anchor}`}>
            <img
              className={styles.servicos}
              src="/static/images/categoria-03.png"
              alt=""
            />
            <h3>Limpeza e higienização</h3>
            <p>
              Limpeza técnica com produtos adequados para eliminar fungos,
              bactérias e odores, garantindo qualidade do ar e saúde para os
              usuários.
            </p>
          </div>

          <div className={styles.box}>
            <img
              className={styles.servicoimg}
              src="/static/images/servicos-limpeza.jpg"
              alt="Limpeza"
            />
          </div>
        </div>
      </section>

      {/* SERVIÇO 4 */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <img
              className={styles.servicoimg}
              src="/static/images/servicos-Projeto.jpg"
              alt="Projetos"
            />
          </div>

          <div
          id="projetos"
         className={`${styles.box} ${styles.anchor}`}>
            <img
              className={styles.servicos}
              src="/static/images/categoria-05.png"
              alt=""
            />
            <h3>Projetos de climatização</h3>
            <p>
              Desenvolvimento de projetos sob medida, considerando layout, carga
              térmica, economia de energia e conforto ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇO 5 */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div 
          id="contratos"
          className={`${styles.box} ${styles.anchor}`}>
            <img
              className={styles.servicos}
              src="/static/images/categoria-06"
              alt=""
            />
            <h3>Contratos de manutenção</h3>
            <p>
              Planos de manutenção periódica para empresas e condomínios,
              garantindo funcionamento contínuo e redução de custos com
              emergências.
            </p>
          </div>

          <div className={styles.box}>
            <img
              className={styles.servicoimg}
              src="/static/images/servicos2-ContratoManutencao.jpg"
              alt="Contratos"
            />
          </div>
        </div>
      </section>

      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
