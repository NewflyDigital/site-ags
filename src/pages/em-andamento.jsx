import Menu from "../components/menu";
import React, { useState } from "react";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Andamento.module.css";
import RodapeNewFly from "../components/rodape-newfly";

const obrasEmAndamento = [
  {
    titulo: "Drenagem Pluvial no Bairro Sagrado Coração de Jesus - Veranópolis/RS",
    descricao: `Está em andamento a execução dos serviços de reparo nas tubulações de drenagem pluvial no Bairro Sagrado Coração de Jesus, 
      em Veranópolis/RS. O projeto contempla aproximadamente 628 metros de rede, garantindo melhorias significativas no sistema de escoamento 
      das águas da região.<br /><br />
      A obra prevê o fornecimento de materiais e mão de obra especializada, com prazo de execução de 60 dias, a contar da ordem de início. 
      Todo o processo está sendo realizado conforme o cronograma físico-financeiro aprovado, assegurando eficiência e qualidade em cada 
      etapa.<br /><br />
      Esse investimento em infraestrutura irá contribuir para a valorização do bairro, trazendo mais segurança e conforto para a comunidade, 
      além de reforçar o compromisso da SV Engenharia em entregar soluções que impactam positivamente a vida urbana.

`,
    imagemPrincipal: "/static/images/andamento/drenagem-pluvial/drenagem-pluvial-1.jpg",
    imagens: [
      "/static/images/andamento/drenagem-pluvial/drenagem-pluvial-1.jpg",
      "/static/images/andamento/drenagem-pluvial/drenagem-pluvial-2.jpg",
      "/static/images/andamento/drenagem-pluvial/drenagem-pluvial-3.jpg",
      "/static/images/andamento/drenagem-pluvial/drenagem-pluvial-4.jpg",
      "/static/images/andamento/drenagem-pluvial/drenagem-pluvial-5.jpg",
      "/static/images/andamento/drenagem-pluvial/drenagem-pluvial-6.jpg",
    ]
  },
  {
    titulo: "Iluminação Estação Férrea em Caxias do Sul/RS",
    descricao: `Está em andamento a execução das obras de revitalização do Largo da Antiga Estação Férrea, 
      um importante espaço público localizado em Caxias do Sul/RS. O projeto contempla melhorias na infraestrutura 
      elétrica e luminotécnica, visando modernizar o local e torná-lo mais seguro e funcional para a comunidade.<br /><br />
      Entre os serviços previstos estão a implantação de 480 metros de rede de tubulação para a instalação elétrica, a 
      construção de uma subestação, além de redes de distribuição e instalação elétrica de baixa tensão. O projeto também 
      inclui um novo sistema de iluminação, que trará mais visibilidade e valorização ao espaço histórico.<br /><br />
      Essa obra reforça nosso compromisso com o desenvolvimento urbano e com a preservação de locais que fazem parte da 
      história da cidade.`,
    imagemPrincipal: "/static/images/andamento/iluminacao-estacao-ferrea/iluminacao-estacao-ferrea-1.jpg",
    imagens: [
      "/static/images/andamento/iluminacao-estacao-ferrea/iluminacao-estacao-ferrea-1.jpg",
      "/static/images/andamento/iluminacao-estacao-ferrea/iluminacao-estacao-ferrea-2.jpg",
      "/static/images/andamento/iluminacao-estacao-ferrea/iluminacao-estacao-ferrea-3.jpg",
      "/static/images/andamento/iluminacao-estacao-ferrea/iluminacao-estacao-ferrea-4.jpg",
      "/static/images/andamento/iluminacao-estacao-ferrea/iluminacao-estacao-ferrea-5.jpg",
      "/static/images/andamento/iluminacao-estacao-ferrea/iluminacao-estacao-ferrea-6.jpg",

    ]
  },
  {
    titulo: "Construção da Unidade de Acolhimento em Nova Prata/RS",
    descricao: `A SV Engenharia e Serviços está executando a construção de uma nova Unidade de Acolhimento no município de Nova Prata/RS, com área total de 
      306,70 m². O projeto foi desenvolvido para proporcionar um espaço seguro, confortável e acessível, atendendo às necessidades de acolhimento com qualidade 
      e dignidade.<br /><br />
      A obra contempla a execução completa da estrutura, incluindo fundações, alvenaria, cobertura, instalações elétricas e hidráulicas, revestimentos, pintura 
      e a implantação de um sistema de prevenção e combate a incêndios. Todas as etapas estão sendo conduzidas de acordo com as normas técnicas vigentes, com 
      especial atenção à acessibilidade, garantindo um ambiente inclusivo e funcional.<br /><br />
      Mais do que uma construção, este projeto representa um investimento no cuidado com as pessoas, promovendo acolhimento e bem-estar para os futuros usuários 
      da unidade.
      `,
    imagemPrincipal: "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-1.jpg",
    imagens: [
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-1.jpg",
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-2.jpg",
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-3.jpg",
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-4.jpg",
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-5.jpg",
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-6.jpg",
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-7.jpg",
      "/static/images/andamento/Unidade-Acolhimento-Nova-Prata/Unidade-Acolhimento-Nova-Prata-8.jpg",
    ]
  },
  {
    titulo: "Reforma do Muro Externo – Aeroporto Regional Hugo Cantergiani em Caxias do Sul/RS",
    descricao: `A SV Engenharia e Serviços está conduzindo a reforma completa do muro externo do Aeroporto Regional Hugo Cantergiani, em Caxias do Sul/RS. 
      A estrutura existente apresentava sinais evidentes de desgaste e danos em diversos pontos, exigindo uma intervenção técnica para a restauração de sua 
      integridade e funcionalidade.<br /><br />
      A obra compreende a demolição dos trechos comprometidos, seguida do reforço das fundações e da execução de nova alvenaria estrutural com blocos de concreto, 
      totalizando aproximadamente 2,20 metros de altura e 321 metros de extensão. Estão sendo retiradas placas de concreto danificadas e refeita toda a estrutura 
      do muro, corrigindo falhas e restabelecendo a resistência original da construção. Na fase final, será realizada a aplicação de reboco e pintura, além da 
      execução de melhorias no sistema de drenagem, o que garantirá maior durabilidade à estrutura.`,
    imagemPrincipal: "/static/images/andamento/Aeroporto-Regional-Hugo-Cantergiani/Aeroporto-Regional-Hugo-Cantergiani-1.jpg",
    imagens: [
      "/static/images/andamento/Aeroporto-Regional-Hugo-Cantergiani/Aeroporto-Regional-Hugo-Cantergiani-1.jpg",
      "/static/images/andamento/Aeroporto-Regional-Hugo-Cantergiani/Aeroporto-Regional-Hugo-Cantergiani-2.jpg",
      "/static/images/andamento/Aeroporto-Regional-Hugo-Cantergiani/Aeroporto-Regional-Hugo-Cantergiani-3.jpg",
      "/static/images/andamento/Aeroporto-Regional-Hugo-Cantergiani/Aeroporto-Regional-Hugo-Cantergiani-4.jpg",
      "/static/images/andamento/Aeroporto-Regional-Hugo-Cantergiani/Aeroporto-Regional-Hugo-Cantergiani-5.jpg",
    ]
  },
  {
    titulo: "Nova Unidade Básica de Saúde em Lindolfo Collor/RS",
    descricao: `A SV Engenharia e Serviços está executando a construção da nova Unidade Básica de Saúde de Lindolfo Collor/RS, 
      um projeto que visa ampliar e qualificar o atendimento em saúde no município. Neste momento, a obra encontra-se na fase 
      inicial de fundações. Já foram concluídos o gabarito da obra com definição dos eixos e pontos das estacas, o levantamento 
      topográfico e marcação do solo, o início da cravação das estacas e a montagem das formas e ferragens dos blocos de coroamento.<br /><br />
      A estrutura está sendo executada com responsabilidade técnica e dentro dos padrões exigidos para garantir segurança, durabilidade e 
      funcionalidade ao futuro espaço de atendimento.<br /><br />
      Acompanhe nosso site para mais atualizações sobre essa e outras obras em andamento.`,
    imagemPrincipal: "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-1.jpg",
    imagens: [
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-1.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-2.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-3.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-4.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-5.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-7.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-8.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-9.jpg",
      "/static/images/andamento/UBS-Lindolfo-Collor/UBS-Lindolfo-Collor-10.jpg",
    ]
  },
  {
    titulo: "Lar de Idosos São Francisco em Veranópolis",
    descricao: `Na cidade de Veranópolis/RS, está em andamento uma importante obra de ampliação 
      do Lar de Idosos São Francisco, que terá sua área construída ampliada de 793,96 m² para 1.926,43 m². 
      Nesta fase da execução, estão sendo realizadas as etapas de fundação, com destaque para a concretagem 
      das vigas baldrame, que servirão de base estrutural para a continuidade do projeto.<br /><br />
      Essa ampliação representa um avanço significativo para a comunidade local, possibilitando a criação de 
      mais de 30 novas vagas e promovendo maior conforto, acessibilidade e qualidade de vida aos idosos atendidos. 
      A obra reafirma o compromisso com o bem-estar da população idosa e o fortalecimento da rede de acolhimento 
      no município.`,
    imagemPrincipal: "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-01.jpg",
    imagens: [
      "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-01.jpg",
      "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-02.jpg",
      "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-03.jpg",
      "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-04.jpg",
      "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-05.jpg",
      "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-06.jpg",
      "/static/images/andamento/veranopolis/2025-05-21-VERANOPOLIS-07.jpg",
    ]
  },
  {
    titulo: "CMEI Regina Piola em Concórdia/SC",
    descricao: `Dia a dia estamos avançando na construção da CMEI Regina Piola na
              cidade de Concórdia/SC. Está sendo focado na execução da cortina
              de concreto, vigas de baldrame, sapatas e pilares de arranque.
              <br />
              Este progresso é fundamental para garantir a estrutura segura e
              durável do prédio, que em breve se tornará um espaço repleto de
              aprendizado e diversão para nossas crianças.
              <br />
              Cada passo dado nessa obra nos aproxima ainda mais de um futuro
              brilhante, onde a educação infantil poderá florescer em um
              ambiente moderno e acolhedor.`,
    imagemPrincipal: "/static/images/andamento/andadamento-01-00.jpg",
    imagens: [
      "/static/images/andamento/andadamento-01-00.jpg",
      "/static/images/andamento/andadamento-01-01.jpg",
      "/static/images/andamento/andadamento-01-02.jpg",
      "/static/images/andamento/andadamento-01-03.jpg",
      "/static/images/andamento/andadamento-01-04.jpg",
      "/static/images/andamento/andadamento-01-05.jpg",
      "/static/images/andamento/andadamento-01-06.jpg",
      "/static/images/andamento/andadamento-01-07.jpg",
      "/static/images/andamento/andadamento-01-08.jpg",
    ]
  },
  {
    titulo: "Realização da Revitalização pedreira São Marcos",
    descricao: `Em São Marcos/RS a antiga pedreira terá uma revitalização para a
              comunidade. O projeto contempla a construção de quiosques com
              churrasqueiras, banheiros e um refeitório com deck integrado. Será
              realizado toda a pavimentação, estrutura elétrica e hidráulica,
              pintura e todos os acabamentos necessários.`,
    imagemPrincipal: "/static/images/andamento/Blog-00-01.png",
    imagens: [
      "/static/images/andamento/Blog-00-01.png",
      "/static/images/andamento/Blog-00-02.png",
      "/static/images/andamento/Blog-00-03.png",
      "/static/images/andamento/Blog-00-04.png",
      "/static/images/andamento/Blog-00-05.png",
      "/static/images/andamento/Blog-00-06.png",
      "/static/images/andamento/Blog-00-07.png",
      "/static/images/andamento/Blog-00-08.png",
      "/static/images/andamento/Blog-00-09.png",
    ]
  },
]

export default function Andamento() {
  const [state, setState] = React.useState({
    loading: false,
    obras: [...obrasEmAndamento]
  })

  const { obras } = state;

  const handleImagemPrincipal = (indexObra, indexImagem) => {
    const obrasTmp = [...obras];

    const obraSelecionada = { ...obrasTmp[indexObra] };
    const { imagens } = obraSelecionada;

    obraSelecionada.imagemPrincipal = imagens[indexImagem];

    obrasTmp[indexObra] = obraSelecionada;

    setState(a => ({
      ...a,
      obras: obrasTmp
    }));
  }


  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span>SV Engenharia & Serviços</span>
          <h2>Obras em Andamento</h2>
          <img src="/static/images/categoria.png" alt="" />
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <div className="w-full max-w-[80rem] grid gap-[5rem]">
          {obras.map((obra, index) => (
            <div className="w-full flex flex-col px-[1rem] sm:px-0" key={`key-obras-${index}`}>
              <div className="grid sm:grid-cols-2 gap-[2rem]">
                <div className="w-full flex flex-col">
                  <h3 className="text-[14px] font-[600] text-[#bbb] tracking-[12px] leading-[25px]">OBRAS EM CONSTRUÇÃO</h3>
                  <h4 className="text-[3em] font-[800] leading-[1em] my-[1rem]" >{obra.titulo}</h4>
                  <p dangerouslySetInnerHTML={{ __html: obra.descricao }} />
                </div>
                <div className="w-full h-[35rem] flex flex-col justify-center items-center">
                  <img src={obra.imagemPrincipal} className="w-full h-full object-cover object-center" alt={obra.titulo} />
                </div>
              </div>
              <div className="w-full sm:h-[12rem] grid grid-cols-3 sm:grid-cols-9 gap-[.5rem] my-[2rem]">
                {obra.imagens.map((imagem, indexImagem) => (
                  <div key={`key_imagem_${index}_${indexImagem}`} className="w-full h-[12rem]" onClick={() => handleImagemPrincipal(index, indexImagem)}>
                    <img src={imagem} alt={`imagem_${index}_${indexImagem}`} className="w-full h-full object-cover object-center cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
