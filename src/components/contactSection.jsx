import React, { useState } from "react";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulário enviado! (Integre ao SendContato)");
  };

  return (
    <section className={styles.section}>
      <h4 className={styles.subtitulo}>ENTRE EM CONTATO</h4>

      <h2 className={styles.titulo}>
        Solicite seu <span>Orçamento Grátis</span>
      </h2>

      <p className={styles.desc}>
        Estamos prontos para atender você com excelência
      </p>

      <div className={styles.linha}>

        {/* ========================== COLUNA ESQUERDA ========================== */}
        <div className={styles.colInfo}>

          {/* TELEFONE */}
          <div className={styles.infoBloco}>
            <div className={styles.icone}>
              <img src="/static/images/icons/phone-white.png" alt="" />
            </div>
            <div>
              <h5>Telefone</h5>
              <p>(11) 99999-9999</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className={styles.infoBloco}>
            <div className={styles.icone}>
              <img src="/static/images/icons/email-white.png" alt="" />
            </div>
            <div>
              <h5>E-mail</h5>
              <p>contato@ags.com.br</p>
              <p>orcamento@ags.com.br</p>
            </div>
          </div>

          {/* HORÁRIO */}
          <div className={styles.infoBloco}>
            <div className={styles.icone}>
              <img src="/static/images/icons/clock-white.png" alt="" />
            </div>
            <div>
              <h5>Horário de Atendimento</h5>
              <p>Segunda - Sexta: 08h às 18h</p>
              <p>Sábado: 08h às 14h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* LOCALIZAÇÃO */}
          <div className={styles.infoBloco}>
            <div className={styles.icone}>
              <img src="/static/images/icons/location-white.png" alt="" />
            </div>
            <div>
              <h5>Localização</h5>
              <p>Atendemos toda a região metropolitana</p>
            </div>
          </div>

        </div>

        {/* ========================== FORMULÁRIO ========================== */}
        <div className={styles.colForm}>
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              value={form.nome}
              onChange={handleChange}
            />

            <input
              type="text"
              name="telefone"
              placeholder="Seu Telefone"
              value={form.telefone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="mensagem"
              placeholder="Descreva o serviço que você precisa..."
              value={form.mensagem}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Enviar Mensagem</button>

          </form>
        </div>

      </div>
    </section>
  );
}
