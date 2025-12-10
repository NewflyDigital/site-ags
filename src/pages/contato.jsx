import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Contato.module.css";
import { SendContato } from "../services/sendingblue";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";

import Menu from "../components/menu";
import Rodape from "../components/rodape";
import GoogleMap from "../components/map";
import CssBaseline from "@mui/material/CssBaseline";
import Whats from "../components/whats";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const themeOptions = {
  palette: {
    type: "black",
    primary: {
      main: "#2e9845",
    },
    secondary: {
      main: "#9f9f9f",
    },
  },
};

const theme = createTheme(themeOptions);

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({
  titulo = "Contact Form",
  open = true,
  toggleModal,
}) {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  const [disableButton, setDisableButton] = React.useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = React.useState(false);
  const [showAlertDanger, setShowAlertDanger] = React.useState(false);

  const handleCloseAlert = () => {
    setShowAlertSuccess(false);
    setShowAlertDanger(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!nome || !email || !telefone || !cidade || !mensagem) {
      setShowAlertDanger(true);
      return;
    }

    setDisableButton(true);

    try {
      await SendContato({
        nome,
        email,
        telefone,
        cidade,
        mensagem,
      });
      setShowAlertSuccess(true);
    } catch (error) {
      setShowAlertDanger(true);
    } finally {
      setNome("");
      setEmail("");
      setTelefone("");
      setCidade("");
      setMensagem("");
      setDisableButton(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />
      <section className={styles.background3}></section>

      <section className={styles.background2}>
        <div className={styles.interno2}>
          <h3 className={styles.titulo}>ENTRE EM CONTATO</h3>
        </div>
        <div className={styles.interno}>
          <div className={styles.caixa}>
            <div className={styles.box}>
              <img
                className={styles.icone}
                src="/static/images/icone-contato.png"
                alt="" />

              <h3>EXCELÊNCIA EM SERVIÇOS</h3>
            </div>
            <div className={styles.box}>
              <h4>
                Assim que recebida, sua mensagem será encaminhada à equipe
                responsável e respondida o mais breve possível.
                <br /> <br />
                Em caso de dúvidas adicionais, consulte via fone.
                <br /> <br />
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "8rem" }} className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box_row}>
            <div className={` ${styles.mobile}`}>
              <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{ width: "100%" }}
                noValidate
                autoComplete="off"
              >
                <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center">
                  <TextField
                    label="Nome *"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    color="secondary"
                    size="small"
                    focused
                    sx={{
                      input: { color: "1E1E1E" },
                      width: "40rem",
                      margin: "0.6rem",
                    }}
                  />

                  <TextField
                    label="E-mail *"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    color="secondary"
                    size="small"
                    focused
                    sx={{
                      input: { color: "1E1E1E" },
                      width: "40rem",
                      margin: "0.6rem",
                    }}
                  />
                </div>
                <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center">
                  <TextField
                    label="Telefone *"
                    id="telefone"
                    name="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    color="secondary"
                    size="small"
                    focused
                    sx={{
                      input: { color: "1E1E1E" },
                      width: "100%",
                      maxWidth: "50rem",
                      margin: "0.6rem",
                    }}
                  />

                  <TextField
                    label="Cidade *"
                    id="cidade"
                    name="cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    color="secondary"
                    size="small"
                    focused
                    sx={{
                      input: { color: "1E1E1E" },
                      width: "100%",
                      maxWidth: "50rem",
                      margin: "0.6rem",
                    }}
                  />
                </div>

                <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center">
                  <TextField
                    label="Mensagem *"
                    id="mensagem"
                    name="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    color="secondary"
                    size="small"
                    focused
                    multiline
                    rows={3}
                    sx={{
                      input: { color: "1E1E1E" },
                      width: "100%",
                      maxWidth: "80rem",
                      margin: "0.6rem",
                    }}
                  />
                </div>
                <div style={{ marginRight: ".5rem", marginLeft: ".5rem" }}>
                  <Button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    fullWidth
                    maxWidth="10rem"
                    variant="contained"
                    className="max-w-[300px] bg-[#2e9845] hover:bg-[#2e9845] text-white !p-[.5rem] mt-2 font-bold border-0 cursor-pointer"
                    sx={{ marginLeft: 0, marginRight: 0 }}
                    disabled={disableButton}
                  >
                    ENVIAR AGORA
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex p-0">
        <GoogleMap />
      </section>
      <Whats />
      <Rodape />

      <Snackbar
        open={showAlertSuccess}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <MuiAlert onClose={handleCloseAlert} severity="success">
          Enviado com sucesso!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={showAlertDanger}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <MuiAlert onClose={handleCloseAlert} severity="error">
          Ocorreu um erro, tente novamente!
        </MuiAlert>
      </Snackbar>

    </ThemeProvider>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  toggleModal: PropTypes.func,
};
