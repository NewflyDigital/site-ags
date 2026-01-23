import * as React from "react";
import Admin from "../../../components/admin";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";

import { Read, Create, Update } from "../../../services/produtos";
import { UploadImage, DeleteImage } from "../../../services/upload-file";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((m) => m.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Content = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = React.useState(false);
  const [nome, setNome] = React.useState("");
  const [preco, setPreco] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const [imagem, setImagem] = React.useState("");
  const [imagemStream, setImagemStream] = React.useState(null);
  const fileRef = React.useRef(null);

  /* LOAD */
  const loadData = async (produtoId) => {
    if (!produtoId || produtoId === "null") return;

    setLoading(true);
    const data = await Read(produtoId);

    setNome(data.nome);
    setPreco(data.preco);
    setImagem(data.imagem || "");

    if (data.descricao) {
      const blocks = convertFromHTML(data.descricao);
      const content = ContentState.createFromBlockArray(blocks);
      setEditorState(EditorState.createWithContent(content));
    }

    setLoading(false);
  };

  React.useEffect(() => {
    if (router.isReady) loadData(id);
  }, [router.isReady]);

  React.useEffect(() => {
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setDescricao(html);
  }, [editorState]);

  /* SAVE */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = { nome, preco, descricao, imagem };

      let produtoId = id;

      if (id && id !== "null") {
        await Update(id, params);
      } else {
        produtoId = await Create(params);
      }

      if (imagemStream) {
        await UploadImage({
          file: imagemStream,
          fileName: imagem,
          path: `produtos/${produtoId}`,
        });
      }

      Swal.fire("Sucesso", "Produto salvo com sucesso", "success");
      router.push("/admin/produtos");
    } catch (e) {
      Swal.fire("Erro", e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper className="p-6">
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>

      <Box component="form" onSubmit={handleSubmit} className="space-y-4">
        <Link href="/admin/produtos">&#171; Voltar</Link>

        <TextField
          label="Nome do produto"
          fullWidth
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <TextField
          label="Preço"
          fullWidth
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <div className="border p-2 bg-white">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>

        <TextField label="Imagem" fullWidth value={imagem} disabled />

        <Button type="button" onClick={() => fileRef.current.click()}>
          Selecionar imagem
        </Button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;
            setImagem(file.name);
            setImagemStream(file);
          }}
        />

        <Button type="submit" variant="contained" color="success">
          Salvar
        </Button>
      </Box>
    </Paper>
  );
};

export default function AdminProdutosId() {
  return (
    <Admin>
      <Content />
    </Admin>
  );
}
