import * as React from "react";
import Banner from "../components/banner";
import Menu from "../components/menu";
import styles from "../styles/Index.module.css";
import Rodape from "../components/rodape";
import ContatoSection from "../components/contactSection";
import Whats from "../components/whats";
import { ReadAll as ReadArtigos } from "../services/produtos";
import { useQuery } from "@tanstack/react-query";
import CachedImage from "../components/CachedImage";
import Link from "next/link";
import { Dialog } from "@mui/material";
import ReactPlayer from "react-player";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function Home() {
  const [state, setState] = React.useState({
    openVideo: false,
    videoUrl: "https://www.youtube.com/watch?v=kSNnxvEUVkY",
  });
  const { data, isLoading } = useQuery({
    queryKey: ["produtos"],
    queryFn: ReadArtigos,
    staleTime: 1000 * 60 * 10,
  });

  React.useEffect(() => {
    window.document.body.style.backgroundColor = "#01030e";
  }, []);

  const { openVideo, videoUrl } = state;

  const dados = [
    {
      nome: "João Pereira",
      texto:
        "A AGS Engenharia executou meu projeto com excelência, rapidez e profissionalismo. Recomendo!",
    },
    {
      nome: "Mariana Duarte",
      texto:
        "Equipe extremamente competente! Atendimento impecável e resultado melhor do que o esperado.",
    },
    {
      nome: "Carlos Henrique",
      texto:
        "Ótima empresa! Cumpriram prazos e mantiveram tudo organizado durante a obra.",
    },
  ];

  const posts = [
    {
      id: 1,
      titulo: "5 Dicas de Segurança em Obras Residenciais",
      resumo:
        "Veja como garantir uma obra mais segura e organizada para você e sua equipe.",
      categoria: "Construção",
      data: "12 Dez 2024",
    },
    {
      id: 2,
      titulo: "Como Reduzir Custos em Reformas",
      resumo:
        "Conheça estratégias simples para economizar sem comprometer a qualidade.",
      categoria: "Reformas",
      data: "20 Nov 2024",
    },
    {
      id: 3,
      titulo: "Tendências de Arquitetura Moderna",
      resumo: "Minimalismo, integração e tecnologia — veja o que está em alta.",
      categoria: "Arquitetura",
      data: "03 Out 2024",
    },
  ];

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />
      <section id="sobre" className={styles.sobreSection}>
        <div className={styles.sobreContainer}>
          {/* LADO ESQUERDO */}
          <div className={styles.sobreLeft}>
            <h4 className={styles.sobreMiniTitulo}>SOBRE A AGS</h4>

            {/*
            <h1 className={styles.sobreTitulo}>
              Expertise em <br />
              <span>Ar Condicionado!</span>
            </h1>
            */}

            <h1 className={styles.sobreTitulo}>
              Clima sob controle, <br />
              <span>conforto sem limites</span>
            </h1>

            <p>
              Na <strong>AGS</strong>, nossa paixão pelo que fazemos é o nosso
              combustível. Somos muito mais do que uma empresa de climatização;
              somos parceiros dedicados a proporcionar{" "}
              <strong>conforto, eficiência e confiança</strong> em cada projeto.
            </p>

            <p>
              Com uma história sólida de compromisso com a excelência,
              construímos nosso nome sobre os pilares da{" "}
              <strong>qualidade, pontualidade e profissionalismo</strong>.
            </p>

            <ul className={styles.sobreLista}>
              <li>
                <span></span>Equipe altamente qualificada e certificada
              </li>
              <li>
                <span></span>Atendimento rápido e eficiente
              </li>
              <li>
                <span></span>Garantia em todos os serviços
              </li>
              <li>
                <span></span>Orçamento sem compromisso
              </li>
              <li>
                <span></span>Equipamentos de última geração
              </li>
              <li>
                <span></span>Melhor custo-benefício da região
              </li>
            </ul>

            <Link
              legacyBehavior
              href="https://api.whatsapp.com/send?phone=5554981346814&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              passHref
            >
              <a target="_blank" className={styles.sobreBotao}>
                Entre em Contato
              </a>
            </Link>
          </div>

          {/* LADO DIREITO */}
          <div className={styles.sobreCard}>
            <div className={styles.sobreCardIcon}></div>

            <h2>Excelência em</h2>
            <h3>Climatização</h3>
          </div>
        </div>
      </section>

      {/* ================================
      SESSÃO — NOSSOS SERVIÇOS
=================================== */}
      <section className={styles.servicosSection}>
        <h4 className={styles.servicosMiniTitulo}>NOSSOS SERVIÇOS</h4>

        <h2 className={styles.servicosTitulo}>
          Soluções Completas em
          <br />
          <span>Ar Condicionado</span>
        </h2>

        <p className={styles.servicosDescricao}>
          Oferecemos serviços especializados para garantir o máximo conforto e
          eficiência
        </p>

        <div className={styles.cardsServicos}>
          {/* CARD 1 */}
          <div className={styles.cardServico}>
            <div className={styles.cardImg}>
              <img
                src="/static/images/servicos-Instalacao.jpg"
                alt="Serviço 1"
              />
              <div className={styles.cardIcon}>
                <img src="/static/images/wrench-branco.png" alt="Instalação " />
              </div>
            </div>

            <h3>Instalação</h3>
            <p>
              Instalação profissional de sistemas de ar condicionado para
              residências e empresas com garantia total.
            </p>
          </div>

          {/* CARD 2 */}
          <div className={styles.cardServico}>
            <div className={styles.cardImg}>
              <img
                src="/static/images/servicos-Manutencao-Preventiva.jpg"
                alt="Serviço 2"
              />
              <div className={styles.cardIcon}>
                <img
                  src="/static/images/setting.png"
                  alt="Manutenção Preventiva"
                />
              </div>
            </div>

            <h3>Manutenção Preventiva</h3>
            <p>
              Manutenção periódica para garantir o melhor desempenho e
              durabilidade do seu equipamento.
            </p>
          </div>

          {/* CARD 3 */}
          <div className={styles.cardServico}>
            <div className={styles.cardImg}>
              <img
                src="/static/images/servicos-Manutencao-Corretiva.jpg"
                alt="Serviço 3"
              />
              <div className={styles.cardIcon}>
                <img
                  src="/static/images/thermometer.png"
                  alt="Manutenção Corretiva"
                />
              </div>
            </div>

            <h3>Manutenção Corretiva</h3>
            <p>
              Diagnóstico e reparo rápido de problemas, devolvendo o conforto
              para seu ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
      SESSÃO — PROJETOS ESPECIAIS
=========================================== */}
      <section className={styles.empresasSection}>
        <div className={styles.empresasContainer}>
          {/* IMAGEM ESQUERDA */}
          <div className={styles.empresasImg}>
            <img
              src="/static/images/Projetos-especiais.png"
              alt="Grandes empresas"
            />
          </div>

          {/* TEXTO DIREITO */}
          <div className={styles.empresasConteudo}>
            <h4 className={styles.empresasMiniTitulo}>
              <img
                src="/static/images/building.png"
                alt="Icone PROJETOS ESPECIAIS"
              />
              PROJETOS ESPECIAIS
            </h4>

            <h2 className={styles.empresasTitulo}>
              Soluções para
              <br />
              <span>Grandes Empresas</span>
            </h2>

            <p className={styles.empresasTexto}>
              A AGS possui expertise comprovada em projetos de grande porte,
              atendendo empresas que necessitam de{" "}
              <strong>soluções complexas de climatização</strong>. Nosso time
              especializado desenvolve projetos personalizados que garantem
              eficiência energética e conforto térmico.
            </p>
            <ul className={styles.empresasLista}>
              <li>
                <span></span>Projeto customizado e dimensionamento técnico
              </li>
              <li>
                <span></span>Instalação com mínima interferência nas operações
              </li>
              <li>
                <span></span>Manutenção preventiva programada
              </li>
              <li>
                <span></span>Suporte técnico prioritário
              </li>
            </ul>

            <Link
              legacyBehavior
              href="https://api.whatsapp.com/send?phone=5554981346814&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              passHref
            >
              <a target="_blank" className={styles.empresasBotao}>
                Solicitar Orçamento Corporativo
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
    SESSÃO — SEGMENTOS DE CLIENTES
=========================================== */}
      <section className={styles.segmentosSection}>
        <h4 className={styles.segmentosMiniTitulo}>SEGMENTOS CLIENTES</h4>
        <h2 className={styles.segmentosTitulo}>
          Atendemos Diversos
          <br /> <a>Segmentos</a>
          <br />
          <span>Soluções especializadas para cada tipo de cliente</span>
        </h2>

        <div className={styles.segmentosLista}>
          <div className={styles.segmentoItem}>
            <div className={styles.cardIcon2}>
              <img
                src="/static/images/empresa.png"
                alt="Manutenção Preventiva"
              />
            </div>
            <h4>Empresas</h4>
            <p>Escritórios e corporações</p>
          </div>
          <div className={styles.segmentoItem}>
            <div className={styles.cardIcon2}>
              <img
                src="/static/images/comercio.png"
                alt="Manutenção Preventiva"
              />
            </div>
            <h4>Comércio</h4>
            <p>Lojas e estabelecimentos</p>
          </div>
          <div className={styles.segmentoItem}>
            <div className={styles.cardIcon2}>
              <img
                src="/static/images/residencias.png"
                alt="Manutenção Preventiva"
              />
            </div>
            <h4>Residências</h4>
            <p>Casas e apartamentos</p>
          </div>
          <div className={styles.segmentoItem}>
            <div className={styles.cardIcon2}>
              <img
                src="/static/images/industrias.png"
                alt="Manutenção Preventiva"
              />
            </div>
            <h4>Indústrias</h4>
            <p>Plantas industriais</p>
          </div>
          <div className={styles.segmentoItem}>
            <div className={styles.cardIcon2}>
              <img src="/static/images/saude.png" alt="Manutenção Preventiva" />
            </div>
            <h4>Saúde</h4>
            <p>Clínicas e hospitais</p>
          </div>
          <div className={styles.segmentoItem}>
            <div className={styles.cardIcon2}>
              <img
                src="/static/images/educacao.png"
                alt="Manutenção Preventiva"
              />
            </div>
            <h4>Educação</h4>
            <p>Escolas e univercidades</p>
          </div>
          <div className={styles.segmentoItem}>
            <div className={styles.cardIcon2}>
              <img
                src="/static/images/civil.png"
                alt="Construções e edifícios"
              />
            </div>
            <h4>Civil</h4>
            <p>Construções e edifícios</p>
          </div>
        </div>

        <div className={styles.segmentosBox}>
          <h3>+500 Clientes Satisfeitos</h3>
          <p>Empresas e residências que confiam na AGS</p>
        </div>
      </section>

      {/* ==========================================
    SESSÃO — DEPOIMENTOS
=========================================== */}
      <section className={styles.depoimentosSection}>
        <h4 className={styles.depoimentosMiniTitulo}>DEPOIMENTOS</h4>

        <h2 className={styles.depoimentosTitulo}>
          O Que Nossos Clientes Dizem
          <br />
          <span>Confira a satisfação de quem já confia na AGS</span>
        </h2>

        <div className={styles.depoimentosCards}>
          <div className={styles.depoimentoCard}>
            <h3>João Silva</h3>
            <p>
              &quot;Excelente serviço! A equipe da AGS instalou meu
              ar-condicionado com rapidez e eficiência.&quot;
            </p>
          </div>

          <div className={styles.depoimentoCard}>
            <h3>Maria Santos</h3>
            <p>
              &quot;Recomendo a AGS para climatização. Profissionais muito
              competentes.&quot;
            </p>
          </div>

          <div className={styles.depoimentoCard}>
            <h3>Pedro Oliveira</h3>
            <p>
              &quot;Profissionais excelentes! Instalaram o sistema de
              climatização da minha empresa com perfeição.&quot;
            </p>
          </div>

          <div className={styles.depoimentoCard}>
            <h3>Ana Costa</h3>
            <p>
              &quot;Tive um problema urgente com o ar-condicionado e a equipe da
              AGS resolveu rapidamente.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ============================ */}
      {/*            BLOG              */}
      {/* ============================ */}
      <section className={styles.blogSection}>
        <p className={styles.blogMiniTitulo}>BLOG</p>

        <h2 className={styles.blogTitulo}>
          Dicas e <span>Novidades</span>
        </h2>

        <p className={styles.blogSub}>
          Fique por dentro das melhores práticas e novidades do setor
        </p>

        <div className={styles.blogCards}>
          {posts.map((post) => (
            <div key={post.id} className={styles.blogCard}>
              <span className={styles.blogTag}>{post.categoria}</span>

              <h3>{post.titulo}</h3>

              <p>{post.resumo}</p>

              <div className={styles.blogDivider}></div>

              <div className={styles.blogFooter}>
                <div className={styles.blogData}>
                  <img src="/static/images/calendario.png" alt="" />
                  {post.data}
                </div>

                <div className={styles.blogMais}>Ler mais →</div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.blogBotao}>Ver Todos os Artigos</button>
      </section>

      {/* BLOG
      
<section className={styles.background}>
        <div className={styles.interno}>
          <h2 className={styles.titulo}>Últimas Notícias</h2>
        </div>
        <div className="w-full max-w-[80rem] flex justify-center items-start">
          <div className="w-full h-full grid sm:grid-cols-3 grid-cols-1  gap-[.5rem]">
            {(() => {
              if (isLoading) return <div>Carregando...</div>;
              if (!data) return <div>Não há artigos cadastrados</div>;
              const retorno = [];
              const artigos = [...(data || [])].slice(0, 3);

              artigos.map((artigo, index) => {
                const imagemUrl = `https://firebasestorage.googleapis.com/v0/b/sv-engenharia.firebasestorage.app/o/images%2Fblog%2F${artigo.id}%2F${artigo.imagem}?alt=media`;

                const resumo = artigo.texto
                  .replace(/<[^>]+>/g, "")
                  .replace(/[\n\r]/g, "")
                  .replace("  ", "")
                  .substring(0, 125)
                  .split("&nbsp;")
                  .join(" ");

                retorno.push(
                  <Link
                    legacyBehavior
                    href={`/blog/${artigo.id}`}
                    key={`artigo_${index}`}
                    passHref
                  >
                    <div className={`${styles.blog} cursor-pointer`}>
                      <div className="w-full h-[25rem] overflow-hidden relative">
                        <CachedImage
                          src={imagemUrl}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={styles.conteudo}>
                        <h4>{dataPorExtenso}</h4>
                        <h2 className="!text-[1.75em] leading-[1.75rem] h-[5.5rem]">
                          {artigo.titulo}
                        </h2>
                        <p>{resumo}...</p>
                      </div>
                    </div>
                  </Link>
                );
              });

              return retorno;
            })()}
          </div>
        </div>
      </section>

      */}
      <a id="contato">&nbsp;</a>
      <ContatoSection />
      <Rodape />
      <Whats />
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
            style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
          />
        </div>
      </Dialog>
    </>
  );
}
