import Menu from "../components/menu";
import React, { useState } from "react";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Concluidas.module.css";
import RodapeNewFly from "../components/rodape-newfly";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const obrasConcluidas = [
  {
    titulo: "Revitalização da Escola Vinte e Um de Abril em Vila Cristina/RS",
    dataConclusao: new Date(2024, 9, 1),
    descricao: `Após os danos causados pelas fortes enchentes de maio, a Escola Municipal de Ensino 
      Fundamental Vinte e Um de Abril passou por uma importante revitalização. Com agilidade e dedicação, 
      a equipe da SV Engenharia e Serviços atuou na recuperação do espaço, realizando a pintura interna 
      e externa, a restauração da rede elétrica e a instalação de novas portas.<br /><br />
      O resultado é um ambiente renovado, seguro e preparado para acolher novamente os alunos, professores 
      e toda a comunidade escolar. Mais do que uma obra, essa entrega representa cuidado, compromisso e 
      esperança em um momento de recomeço.<br /><br />
      Confira as imagens dessa transformação que devolveu dignidade e conforto a todos que fazem parte 
      dessa história!`,
    fotoPrincipal: "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-01.jpg",
    fotos: [
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-01.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-02.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-03.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-04.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-05.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-06.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-07.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-08.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-09.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-10.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-11.jpg",
      "/static/images/Concluidas/Escola-21-Abril/ESCOLA-VINTE-E-UM-DE-ABRIL-12.jpg",
    ]
  },
  {
    titulo: "Quadra esportiva da EMEF Nova Esperança em Caxias do Sul/RS",
    dataConclusao: new Date(2025, 0, 1),
    descricao: `Em janeiro de 2025, a comunidade escolar da EMEF Nova Esperança, em Caxias do Sul/RS, 
      recebeu com alegria a nova quadra esportiva, um espaço totalmente revitalizado e preparado para 
      promover o esporte, o lazer e o bem-estar dos alunos.<br /><br/>
      A obra foi conduzida pela SV Engenharia e Serviços, que atuou com responsabilidade e qualidade, 
      garantindo uma estrutura segura, funcional e adequada às necessidades da escola. O novo espaço 
      conta com piso epóxi apropriado para práticas esportivas, proporcionando mais conforto e segurança 
      para os estudantes.<br /><br />
      A entrega da quadra representa um investimento no futuro das crianças e adolescentes, incentivando 
      a prática esportiva, a convivência saudável e o desenvolvimento físico e social dos alunos.<br /><br />
      Com esta entrega, reforçamos nosso compromisso em transformar espaços e contribuir com melhorias 
      significativas para a educação e a qualidade de vida da comunidade.`,
    fotoPrincipal: "/static/images/Concluidas/EMEF-Nova-Esperanca/EMEF-Nova-Esperanca-01.jpg",
    fotos: [
      "/static/images/Concluidas/EMEF-Nova-Esperanca/EMEF-Nova-Esperanca-01.jpg",
      "/static/images/Concluidas/EMEF-Nova-Esperanca/EMEF-Nova-Esperanca-02.jpg",
      "/static/images/Concluidas/EMEF-Nova-Esperanca/EMEF-Nova-Esperanca-03.jpg",
      "/static/images/Concluidas/EMEF-Nova-Esperanca/EMEF-Nova-Esperanca-04.jpg",
      "/static/images/Concluidas/EMEF-Nova-Esperanca/EMEF-Nova-Esperanca-05.jpg",
    ]
  },
  {
    titulo: "EMEF SÃO JOSÉ - Flores da Cunha",
    dataConclusao: new Date(2024, 1, 15),
    descricao: `Foi realizada a reforma estrutural e melhorias no prédio da Escola.`,
    fotoPrincipal: "/static/images/Concluidas/EMEF/IMG_2523.jpg",
    fotos: [
      "/static/images/Concluidas/EMEF/IMG_2523.jpg",
      "/static/images/Concluidas/EMEF/IMG_2521.jpg",
      "/static/images/Concluidas/EMEF/IMG_2524.jpg",
      "/static/images/Concluidas/EMEF/IMG_2527.jpg",
    ]
  },
  {
    titulo: "E.M.E.F. ARMINDO MÁRIO TURRA",
    dataConclusao: new Date(2024, 8, 30),
    descricao: `Montagem de salas de aula com unidade modular integrada, instalação hidrossanitária, 
      assentamento de revestimento, parte elétrica e entrega final.`,
    fotoPrincipal: "/static/images/Concluidas/Armindo/IMG_2514.jpg",
    fotos: [
      "/static/images/Concluidas/Armindo/IMG_2514.jpg",
      "/static/images/Concluidas/Armindo/IMG_2516.jpg",
      "/static/images/Concluidas/Armindo/IMG_2511.jpg",
      "/static/images/Concluidas/Armindo/IMG_2512.jpg"
    ]
  },
  {
    titulo: "UBS- Nova Petrópolis",
    dataConclusao: new Date(2024, 7, 5),
    descricao: `Montagem de salas de aula com unidade modular integrada, instalação hidrossanitária, 
      assentamento de revestimento, parte elétrica e entrega final.`,
    fotoPrincipal: "/static/images/Concluidas/Ubs/IMG_2506.jpg",
    fotos: [
      "/static/images/Concluidas/Ubs/IMG_2506.jpg",
      "/static/images/Concluidas/Ubs/IMG_2506.jpg",
      "/static/images/Concluidas/Ubs/IMG_2503.jpg",
      "/static/images/Concluidas/Ubs/IMG_2504.jpg"
    ]
  },
  {
    titulo: "Fenakiwi - Bilheteria",
    dataConclusao: new Date(2025, 4, 19),
    descricao: `A SV Engenharia e Serviços finalizou a construção de duas bilheterias para a Fenakiwi, 
      em Farroupilha. Mais um projeto entregue com qualidade e comprometimento, contribuindo para a 
      infraestrutura do evento.`,
    fotoPrincipal: "/static/images/Concluidas/Fenakiwi/bilheteria-fenakiwi-1.jpg",
    fotos: [
      "/static/images/Concluidas/Fenakiwi/bilheteria-fenakiwi-1.jpg",
      "/static/images/Concluidas/Fenakiwi/bilheteria-fenakiwi-2.jpg",
      "/static/images/Concluidas/Fenakiwi/bilheteria-fenakiwi-3.jpg",
      "/static/images/Concluidas/Fenakiwi/bilheteria-fenakiwi-4.jpg",
      "/static/images/Concluidas/Fenakiwi/bilheteria-fenakiwi-5.jpg"
    ]
  },
  {
    titulo: "Calçadas do Município de Carlos Barbosa/RS",
    dataConclusao: new Date(2025, 0, 15),
    descricao: `Concluída em janeiro de 2025, a obra de construção e revitalização das calçadas do município de 
      Carlos Barbosa/RS é mais um projeto finalizado com excelência pela equipe da SV Engenharia e Serviços.<br /><br />
      Este trabalho teve como foco a melhoria da mobilidade urbana, oferecendo mais segurança, acessibilidade e 
      conforto aos pedestres. A nova estrutura das calçadas valoriza o espaço público, promovendo mais qualidade 
      de vida para os moradores e visitantes da cidade.<br /><br />
      O projeto representa o compromisso da SV com soluções urbanas eficientes e com o desenvolvimento de cidades 
      mais acessíveis, seguras e preparadas para o futuro.`,
    fotoPrincipal: "/static/images/Concluidas/Calcada-Carlos-Barbosa/calcada-carlos-barbosa-01.jpg",
    fotos: [
      "/static/images/Concluidas/Calcada-Carlos-Barbosa/calcada-carlos-barbosa-01.jpg",
      "/static/images/Concluidas/Calcada-Carlos-Barbosa/calcada-carlos-barbosa-02.jpg",
      "/static/images/Concluidas/Calcada-Carlos-Barbosa/calcada-carlos-barbosa-03.jpg",
      "/static/images/Concluidas/Calcada-Carlos-Barbosa/calcada-carlos-barbosa-04.jpg",
      "/static/images/Concluidas/Calcada-Carlos-Barbosa/calcada-carlos-barbosa-05.jpg",

    ]
  },
  {
    titulo: "Estrutura da Oficina - Concessionária IESA GWM | Caxias do Sul/RS",
    dataConclusao: new Date(2024, 7, 1),
    descricao: `Em agosto de 2024, a SV Engenharia e Serviços concluiu a estruturação da oficina da nova concessionária IESA GWM, 
      localizada em Caxias do Sul/RS. A obra integrou a fase final de implantação do espaço, contribuindo diretamente para a 
      funcionalidade e operação da área técnica do empreendimento.<br /><br />
      Foram realizados os seguintes serviços:<br /><br />
      ✅ Aplicação de piso epóxi industrial em toda a área da oficina, garantindo resistência a alto tráfego, fácil limpeza e acabamento profissional;<br />
      ✅ Instalação da rede elétrica, com infraestrutura planejada para atender às necessidades operacionais de uma oficina moderna;<br />
      ✅ Sistema de monitoramento com câmeras e cabeamento estruturado, assegurando maior controle e segurança do ambiente;<br />
      ✅ Demarcação das vagas de trabalho e circulação, promovendo organização, segurança e eficiência no fluxo interno.<br /><br />
      Com foco em qualidade, durabilidade e segurança, a SV Engenharia entregou um ambiente completo e pronto para operação, contribuindo com a excelência 
      da nova unidade IESA GWM desde o seu início.<br /><br />
      Mais um serviço executado com comprometimento, dentro dos prazos e com alto padrão técnico.`,
    fotoPrincipal: "/static/images/Concluidas/IESA-GWM/IESA-GWM-01.jpg",
    fotos: [
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-01.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-02.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-03.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-04.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-05.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-06.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-07.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-08.jpg",
      "/static/images/Concluidas/IESA-GWM/IESA-GWM-09.jpg",
    ]
  },
  {
    titulo: "Quadra esportiva em Caxias do Sul/RS",
    dataConclusao: new Date(2025, 6, 25),
    descricao: `Concluímos com sucesso a obra de construção da quadra esportiva no Bairro Jardim América, em Caxias do Sul. O 
      projeto foi realizado para atender às demandas da Administração Pública Municipal, com o objetivo de oferecer à comunidade 
      um espaço adequado para a prática esportiva, lazer e integração social.<br /><br />
      A estrutura da quadra conta com 482,53 m² de área construída, incluindo 50,88 m² de alvenaria estrutural e 23,28 m³ de sapatas 
      e pilaretes, garantindo solidez e segurança à construção. Para a durabilidade da obra, foi aplicada impermeabilização em 
      172,80 m² e instalado alambrado metálico em 405,00 m², proporcionando proteção e delimitação segura do espaço. A quadra também 
      recebeu pintura epóxi, ideal para ambientes esportivos, conferindo maior resistência e acabamento.<br /><br />
      Esta entrega reforça o compromisso da SV Engenharia & Serviços em contribuir com obras públicas de qualidade, que valorizam os 
      bairros e promovem mais qualidade de vida para a população.`,
    fotoPrincipal: "/static/images/Concluidas/quadra-esportiva-jardim-america/quadra-esportiva-jardim-america-1.jpg",
    fotos: [
      "/static/images/Concluidas/quadra-esportiva-jardim-america/quadra-esportiva-jardim-america-1.jpg",
      "/static/images/Concluidas/quadra-esportiva-jardim-america/quadra-esportiva-jardim-america-2.jpg",
      "/static/images/Concluidas/quadra-esportiva-jardim-america/quadra-esportiva-jardim-america-3.jpg",
      "/static/images/Concluidas/quadra-esportiva-jardim-america/quadra-esportiva-jardim-america-4.jpg",
      "/static/images/Concluidas/quadra-esportiva-jardim-america/quadra-esportiva-jardim-america-5.jpg",
      "/static/images/Concluidas/quadra-esportiva-jardim-america/quadra-esportiva-jardim-america-6.jpg",
    ]
  }
]

export default function ObrasConcluidas() {
  const [obras, setObras] = React.useState([...obrasConcluidas]);

  const handleFotoPrincipal = (indexObra, indexFoto) => {
    const obrasTmp = [...obras];
    const obra = { ...obrasTmp[indexObra] };
    const fotoPrincipal = obra.fotos[indexFoto];

    obra.fotoPrincipal = fotoPrincipal;

    obrasTmp[indexObra] = obra;

    setObras(obrasTmp);
  }

  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span>SV Engenharia & Serviços</span>
          <h2>Obras Concluidas</h2>
          <img src="/static/images/categoria.png" alt="" />
        </div>
      </section>

      <section className="w-full flex justify-center items-center py-[2rem]">
        <div className="w-full max-w-[100rem] flex flex-col">
          {obras.sort((a, b) => {
            if (a.dataConclusao > b.dataConclusao) return -1;
            if (a.dataConclusao < b.dataConclusao) return 1;
            return 0;
          })
            .map((a, i) => (
              <div className={`${styles['obra-concluida-box']} duration-[.33s] transition-all`} key={`obra_${i}`}>
                <div className={`${styles['conteudo']} duration-[.33s] transition-all`}>
                  <span className="duration-[.33s] transition-all">OBRA CONCLUÍDA</span>
                  <span className={`${styles['data-termino']} duration-[.33s] transition-all`}>Término:&nbsp;{new Intl.DateTimeFormat("pt-BR").format(a.dataConclusao)}</span>
                  <h3 className="duration-[.33s] transition-all">{a.titulo}</h3>
                  <p className="!leading-[1.2em]" dangerouslySetInnerHTML={{ __html: a.descricao }} />
                </div>
                <div className={`${styles['fotos']} !overflow-hidden`}>
                  <div className="w-full h-[37rem]">
                    <img src={a.fotoPrincipal} alt={"Foto Principal"} />
                  </div>

                  <MultiCarousel
                    responsive={responsive}
                    className="w-full flex"
                  >
                    {

                      a.fotos.map((foto, i2) => (

                        <div className="w-full h-[10rem] border-[white] border-[1px] border-solid" key={`foto-${i2}`}>
                          <img src={foto} onClick={() => handleFotoPrincipal(i, i2)} className="w-full h-full object-cover object-center cursor-pointer" alt={`foto-${i2}`} />
                        </div>

                      ))
                    }
                  </MultiCarousel>

                </div>
              </div>
            ))
          }
        </div>
      </section>

      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
