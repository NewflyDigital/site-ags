import Link from "next/link";
import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <section className={styles.background}>
      
      <div className={styles.overlay}></div>

      <div className={styles.interno}>
        
        {/* TEXTO DO BANNER */}
        <div className={styles.left}>
          <div className={styles.stars}>★★★★★</div>

          <h1>
            A MELHOR <br />
            EMPRESA DE <br />
            <span>Ar Condicionado</span>
          </h1>

          <p>
            Nossa equipe <strong>altamente capacitada e treinada</strong> está pronta
            para oferecer os melhores serviços em <strong>manutenção e
            instalação</strong>.
          </p>
        </div>

        {/* 3 CARDS */}
        <div className={styles.cards}>

          <div className={styles.card}>
            <img src="/static/images/email.png" alt="Ícone Email"/>
            <h3>Contatos</h3>
            <p>(54) 9 8134-6814 <br /> (54) 9 9611-4226<br /> contato@agsengenhariars.com.br</p>
          </div>

          <div className={styles.card}>
            <img src="/static/images/clock.png" alt="Ícone Relógio" />
            <h3>Horários</h3>
            <p>
              Seg – Sex: 08h às 18h <br />
              Sábado: 08h às 14h
            </p>
          </div>

          <div className={styles.card}>
            <img src="/static/images/wrench.png" alt="Ícone Chave de Fenda" />
            <h3>Atendimento Especializado</h3>
            <p>
              Especialistas em <br />
              <span>Ar Condicionado</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Banner;
