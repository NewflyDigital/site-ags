import { useState, useEffect } from "react";
import { getImageFromDB, saveImageToDB } from "./indexDBHelper";

export const CachedImageStatus = {
  Carregando: "Carregando",
  Ok: "Ok",
  Erro: "Erro",
};

const useCachedImage = imageUrl => {
  const [imageSrc, setImageSrc] = useState(null);
  const [source, setSource] = useState("carregando");
  const [status, setStatus] = useState(CachedImageStatus.Carregando);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fetchImage = async () => {
      if (!imageUrl) return;

      const cachedImage = await getImageFromDB(imageUrl);

      if (cachedImage) {
        setImageSrc(URL.createObjectURL(cachedImage));
        setSource("cache"); // Indica que a imagem veio do cache
        setStatus(CachedImageStatus.Ok);
        return;
      }

      try {
        const response = await fetch(imageUrl);

        if (!response.ok) {
          setStatus(CachedImageStatus.Erro);
          return;
        }

        const blob = await response.blob();
        await saveImageToDB(imageUrl, blob);
        setImageSrc(URL.createObjectURL(blob));
        setSource("cdn"); // Indica que a imagem veio da CDN
        setStatus(CachedImageStatus.Ok);
      } catch (e) {
        console.error("erro", e);
        setStatus(CachedImageStatus.Erro);
        setImageSrc(imageUrl);
        setSource("cdn");
        console.error("Erro ao carregar imagem:", e);
      }
    };

    fetchImage();
  }, [imageUrl]);

  return { imageSrc, source, status };
};

export default useCachedImage;
