import * as React from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import RodapeNewFly from "../../components/rodape-newfly";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { Read } from "../../services/blog";
import CachedImage from "../../components/CachedImage";

export default function Blog01() {

  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => Read(id),
  })

  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno}>
          <div className={styles.box}></div>

          <div className={styles.box2}>
            <img
              style={{ zIndex: "1234567" }}
              src="/static/images/a-newfly.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section style={{ marginTop: "0px" }} className={styles.background}>
        <div className={styles.interno2}>
          {(() => {
            if (isLoading) return <div>Carregando...</div>;

            const { id, titulo, dataDoArtigo, colunista, texto, imagem, outrasImagens } = data || {};

            const imagemUrl = `https://firebasestorage.googleapis.com/v0/b/sv-engenharia.firebasestorage.app/o/images%2Fblog%2F${id}%2F`;
            const imagens = [];
            imagens.push(`${imagemUrl}${imagem}?alt=media`);

            outrasImagens.map(outraImagem => imagens.push(`${imagemUrl}${outraImagem}?alt=media`));

            const dataPorExtenso = new Intl.DateTimeFormat("pt-Br", {
              weekday: "long",
              month: "long",
              day: "2-digit",
              year: "numeric",
              timeZone: "America/Sao_Paulo",
            }).format(new Date(dataDoArtigo));

            return (
              <div className={styles.box} style={{ maxWidth: "60rem" }}>
                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "64px",
                    color: "#2e9845",
                    lineHeight: "74px",
                    textAlign: "center",
                  }}
                >
                  {titulo}
                </h3>
                <div>
                  <p className={styles.data} style={{ color: "#2e9845" }}>
                    {dataPorExtenso}
                    <a style={{ fontWeight: "400", color: "#01030e" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp; por &nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                    <b className={styles.quem}>{colunista}</b>
                  </p>
                </div>

                <div className="w-full text-[#4f4f4f]" dangerouslySetInnerHTML={{ __html: texto }} />

                <div className="w-full grid grid-cols-3 gap-[.5rem] mt-[2rem]">
                  {imagens.map((imagem, index) => (
                    <CachedImage src={imagem} alt={`Imagem Artigo ${index}`} key={`imagem_${index}`} className="w-full h-full" />
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      <section style={{ marginTop: "-100px" }} className={styles.background}>
        <div className={styles.interno}></div>
      </section>

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
