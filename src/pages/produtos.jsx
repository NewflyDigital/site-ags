import * as React from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";
import styles from "../styles/Produtos.module.css";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ReadAll } from "../services/produtos";
import CachedImage from "../components/CachedImage";

export default function Produtos() {
  const { data: produtos, isLoading } = useQuery({
    queryKey: ["produtos"],
    queryFn: ReadAll,
  });

  return (
    <>
      <Menu />

      {/* HEADER */}
      <section className={styles.backgroundimg}>
        <div className={styles.interno2}>
          <span>AGS Engenharia & Climatização</span>
          <a className="flex flex-row justify-center items-center">
            <img
              className="w-full max-w-[3rem] mr-4"
              src="/static/images/wrench.png"
              alt="Categoria"
            />
            <h2>Serviços</h2>
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: "48px",
              color: "#e84800",
              lineHeight: "84px",
            }}
          >
            Nossos Produtos
          </h3>
          <p>
            Confira nossos produtos e soluções pensadas para sua necessidade.
          </p>
        </div>
      </section>

      {/* LISTAGEM */}
      <section className={styles.background}>
        <div className="w-full max-w-[80rem] mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {isLoading && <p>Carregando produtos...</p>}

          {!isLoading && (!produtos || produtos.length === 0) && (
            <p>Nenhum produto cadastrado.</p>
          )}

          {produtos?.map((produto) => {
            const imagemUrl = produto.imagem || "/static/images/placeholder.png";

            const descricaoLimpa = (produto.descricao || "")
              .replace(/<[^>]+>/g, "")
              .replace(/[\n\r]/g, "")
              .substring(0, 120);
            {
              /*
  href={`/produtos/${produto.id}`}
  */
            }
            return (
              <Link
                key={produto.id}
                href={`Whatsapp://send?phone=5554999999999&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20produto%20${produto.nome}`}
                className="cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
                  <CachedImage
                    src={imagemUrl}
                    alt={produto.nome || "Produto"}
                    className="rounded-md mb-4"
                  />

                  <h3 className="text-lg font-semibold mb-2">{produto.nome}</h3>

                  <p className="text-sm text-gray-600 flex-grow">
                    {descricaoLimpa || "Sem descrição disponível"}
                  </p>

                  {produto.preco && (
                    <span className="mt-3 text-[#e84800] font-bold text-lg">
                      R${" "}
                      {Number(produto.preco).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Rodape />
      <Whats />
      <RodapeNewFly />
    </>
  );
}
