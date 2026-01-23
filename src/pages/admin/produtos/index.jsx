import * as React from "react";
import Admin from "../../../components/admin";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import Swal from "sweetalert2";

import { ReadAll, Delete } from "../../../services/produtos";
import { DeleteImage } from "../../../services/upload-file";

const Content = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const loadData = async () => {
    setLoading(true);
    const retorno = await ReadAll();
    setProdutos(retorno);
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Paper className="paper">
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <ButtonGroup>
                  <Link href="/admin/produtos/null">
                    <Button startIcon={<AddIcon />} variant="contained">
                      Novo Produto
                    </Button>
                  </Link>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {produtos.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.nome}</TableCell>
                <TableCell>R$ {p.preco}</TableCell>
                <TableCell>{p.imagem}</TableCell>
                <TableCell>
                  <Stack direction="row">
                    <Link href={`/admin/produtos/${p.id}`}>
                      <IconButton>
                        <ModeEditIcon />
                      </IconButton>
                    </Link>

                    <IconButton
                      onClick={() => {
                        Swal.fire({
                          title: "Excluir produto?",
                          showDenyButton: true,
                        }).then(async (r) => {
                          if (r.value) {
                            await Delete(p.id);
                            if (p.imagem) {
                              await DeleteImage({
                                path: `produtos/${p.id}`,
                                fileName: p.imagem,
                              });
                            }
                            loadData();
                          }
                        });
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default function AdminProdutos() {
  return (
    <Admin>
      <Content />
    </Admin>
  );
}
