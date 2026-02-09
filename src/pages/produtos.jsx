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

  const [categoriaAtiva, setCategoriaAtiva] = React.useState(null);
  const [parceiroAtivo, setParceiroAtivo] = React.useState(null);

  const categorias = [
    {
      id: "High Wall",
      nome: "High Wall",
      icon: "/static/images/wrench.png",
    },
    { id: "InverteR On-Off", nome: "Inverter On-Off", icon: "/static/images/wrench.png" },
    { id: "Cassete", nome: "Cassete", icon: "/static/images/wrench.png" },
    { id: "Piso Teto", nome: "Piso Teto", icon: "/static/images/wrench.png" },
    { id: "Multi Split", nome: "Multi Split", icon: "/static/images/wrench.png" },
    { id: "VRF", nome: "VRF", icon: "/static/images/wrench.png" },
    { id: "Cortina de Ar", nome: "Cortina de Ar", icon: "/static/images/wrench.png" },
    { id: "Split Convencional", nome: "Split Convencional", icon: "/static/images/wrench.png" },
    { id: "Janela", nome: "Janela", icon: "/static/images/wrench.png" },
  ];

  const parceiros = [
    { id: "agratto", logo: "/static/images/parceiros/Logo-agratto.png" },
    { id: "carrier", logo: "/static/images/parceiros/Logo-carrier.png" },
    { id: "consul", logo: "/static/images/parceiros/Logo-consul.png" },
    { id: "daikin", logo: "/static/images/parceiros/Logo-daikin.png" },
    { id: "elgin", logo: "/static/images/parceiros/Logo-elgin.png" },
    { id: "fujitsu", logo: "/static/images/parceiros/Logo-fujitsu.png" },
    { id: "gree", logo: "/static/images/parceiros/Logo-gree.png" },
    { id: "hitachi", logo: "/static/images/parceiros/Logo-hitachi.png" },
    { id: "lg", logo: "/static/images/parceiros/Logo-lg.png" },
    { id: "midea", logo: "/static/images/parceiros/Logo-midea.png" },
    { id: "electrolux", logo: "/static/images/parceiros/Logo-electrolux.png" },
    { id: "samsung", logo: "/static/images/parceiros/Logo-samsung.png" },
    { id: "hisense", logo: "/static/images/parceiros/Logo-hisense.png" },
    { id: "springer", logo: "/static/images/parceiros/Logo-springer.png" },
    { id: "tcl", logo: "/static/images/parceiros/Logo-tcl.png" },
    { id: "ventisol", logo: "/static/images/parceiros/Logo-ventisol.png" },
  ];

  const produtosFiltrados = React.useMemo(() => {
    if (!produtos) return [];

    return produtos.filter((p) => {
      if (categoriaAtiva && p.categoria !== categoriaAtiva) return false;
      if (parceiroAtivo && p.marca !== parceiroAtivo) return false;
      return true;
    });
  }, [produtos, categoriaAtiva, parceiroAtivo]);

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
        <div className={styles.interno3}>
          {parceiros.map((p) => (
            <div
              key={p.id}
              className={styles.parceiros}
              onClick={() => {
                setParceiroAtivo((prev) => (prev === p.id ? null : p.id));
                setCategoriaAtiva(null);
              }}
              style={{
                cursor: "pointer",
                backgroundColor: parceiroAtivo === p.id ? "#d0d0d0" : "",
              }}
            >
              <img src={p.logo} alt={p.id} />
            </div>
          ))}
        </div>
        <div className={`${styles.interno3} mt-8`}>
          {categorias.map((cat) => (
            <div
              key={cat.id}
              className={styles.categorias}
              onClick={() => {
                setCategoriaAtiva((prev) => (prev === cat.id ? null : cat.id));
                setParceiroAtivo(null);
              }}
              style={{
                cursor: "pointer",
                backgroundColor: categoriaAtiva === cat.id ? "#d0d0d0" : "",
              }}
            >
              <img src={cat.icon} alt={cat.nome} />
              <strong style={{ marginTop: "0.5rem" }}>{cat.nome}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.background}></section>

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

          {produtosFiltrados.map((produto) => {
            const imagemUrl =
              produto.imagem || "/static/images/placeholder.png";

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
                href={`Whatsapp://send?phone=54981346814&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20produto%20${produto.nome}`}
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
