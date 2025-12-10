/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import useCachedImage, { CachedImageStatus } from "./useCachedImage";

const CachedImage = ({ src, alt = "Imagem", ...props }) => {
  const { imageSrc, status } = useCachedImage(src);

  if (status === CachedImageStatus.Erro && !imageSrc) {
    return <p>Imagem não encontrada</p>;
  }

  return imageSrc ? (
    <img src={`${imageSrc}`} alt={alt} {...props} />
  ) : (
    <p>Carregando...</p>
  );
};

export default CachedImage;
