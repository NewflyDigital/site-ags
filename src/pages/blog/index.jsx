import * as React from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import Whats from "../../components/whats";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import RodapeNewFly from "../../components/rodape-newfly";
import { useQuery } from "@tanstack/react-query";
import { ReadAll } from "../../services/blog";
import CachedImage from "../../components/CachedImage";

export default function Blog() {
  const { data, isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: ReadAll,
  });

  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno}></div>
      </section>

      <section style={{ marginTop: "0px" }} className={styles.background}>
        <div className={styles.interno}>
          <p style={{ fontSize: "36 px" }}>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "64px",
                color: "#2e9845",
                lineHeight: "84px",
              }}
            >
              Acompanhe as novidades
            </h3>
            <p>
              Confira as últimas matérias e fique por dentro de
              todas as notícias.
            </p>
          </p>
        </div>
      </section>

      {(() => {

        if (isLoading) return <div>Carregando...</div>
        if (!data) return <div>Não há artigos cadastrados</div>

        const retorno = [];
        let primeiroArtigo = null;
        const listaDeArtigos = []

        data?.map((artigo, index) => {

          const imagemUrl = `https://firebasestorage.googleapis.com/v0/b/sv-engenharia.firebasestorage.app/o/images%2Fblog%2F${artigo.id}%2F${artigo.imagem}?alt=media`;

          const dataPorExtenso = new Intl.DateTimeFormat("pt-Br", {
            weekday: "long",
            month: "long",
            day: "2-digit",
            year: "numeric",
            timeZone: "America/Sao_Paulo",
          }).format(new Date(artigo.dataDoArtigo));

          const resumo = artigo.texto
            .replace(/<[^>]+>/g, "")
            .replace(/[\n\r]/g, "")
            .replace("  ", "")
            .substring(0, 200)
            .split("&nbsp;")
            .join(" ");

          if (index === 0) {
            primeiroArtigo = (
              <section style={{ marginTop: "-130px" }} className={styles.background}>
                <Link legacyBehavior href={`/blog/${artigo.id}`} passHref>
                  <div className={`${styles.interno2} cursor-pointer`}>
                    <CachedImage src={imagemUrl} className="w-full" alt={"Imagem Artigo"} />

                    <p style={{ marginLeft: "2rem" }}>
                      <h4>{dataPorExtenso}</h4>
                      <h2 style={{ color: "#01030e" }}>
                        {artigo.titulo}
                      </h2>
                      <p className="!text-[#777]">
                        {resumo}...
                      </p>
                    </p>
                  </div>
                </Link>
              </section>
            )
          } else {
            listaDeArtigos.push(<Link legacyBehavior href={`/blog/${artigo.id}`} passHref>
              <div className="w-full flex flex-col justify-start items-start cursor-pointer">
                <CachedImage src={imagemUrl} alt={"Imagem Artigo"} className="rounded-[.5rem]" />
                <h3 className="font-[300] text-[1.75em] leading-[2rem] my-[1.5rem]">{artigo.titulo}</h3>
                <p className="text-[#777]">{resumo.substring(0, 125)}...</p>
              </div>
            </Link>)
          }

        })

        retorno.push(primeiroArtigo)

        if (listaDeArtigos.length > 0) {
          retorno.push(<div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[25rem] sm:max-w-[80rem] grid grid-cols-1 sm:grid-cols-3 gap-[1rem]">
              {listaDeArtigos}
            </div>
          </div>
          )
        }

        return retorno;

      })()}
      <Rodape />
      <Whats />
      <RodapeNewFly />
    </>
  );
}
