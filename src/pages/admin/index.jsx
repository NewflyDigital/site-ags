import * as React from "react";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../../styles/Admin.Index.module.css";
import { auth } from "../../../firebase-config";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/router";
import { ReadByEmail } from "../../services/usuarios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CachedImage from "../../components/CachedImage";

const Alert2 = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link legacyBehaviorcolor="inherit" href="https://agsengenharia.com.br/">
        AGS Engenharia
      </Link>
      &nbsp;
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#e84800",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000000",
      contrastText: "#fff",
    },
  },
});

export default function SignInSide() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const [logInError, setLogInError] = React.useState({
    status: false,
    message: "",
  });

  const [open, setOpen] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const router = useRouter();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    let isValid = true;

    if (email.trim() === "") {
      const newError = { ...error };
      newError.email = true;
      setError(newError);
      isValid = false;
    }

    if (password.trim() === "") {
      const newError = { ...error };
      newError.senha = true;
      setError(newError);
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);

    signInWithEmailAndPassword(auth, email.trim(), password.trim())
      .then(retorno => {
        ReadByEmail({ email: retorno.user.email })
          .then(retorno => {
            const { status, data } = retorno;

            if (status === 200) {
              if (data.ativo) {
                localStorage.setItem("isAuth", true);
                localStorage.setItem("user", JSON.stringify(data));
                router.push("/admin/dashboard");
              } else {
                setLogInError({
                  status: true,
                  message: "Usuário desabilitado",
                });
              }
            } else {
              setLogInError({
                status: true,
                message: "Usuário não encontrado no banco de dados",
              });
            }
          })
          .finally(() => {
            setLoading(false);
          });

        //router.push("/admin/dashboard");
      })
      .catch(error => {
        const { code } = error;

        switch (code) {
          case "auth/invalid-email":
            setLogInError({ status: true, message: "E-mail inválido" });
            break;
          case "auth/user-disabled":
            setLogInError({ status: true, message: "Usuário desabilitado" });
            break;
          case "auth/user-not-found":
            setLogInError({ status: true, message: "Usuário não encontrado" });
            break;
          case "auth/wrong-password":
            setLogInError({ status: true, message: "Senha inválida" });
            break;
          case "auth/too-many-requests":
            setLogInError({
              status: true,
              message:
                "Conta temporariamente desabilitada devido ao excesso de tentativas em acessá-la. Redefina sua senha e tente novamente.",
            });
            /*Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.*/
            break;
        }
      });
  };

  const handleOpenDialog = ({ open = false }) => {
    setOpen(open);
  };

  const handleRedefinirSenha = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("reset-email");

    if (email.trim() === "") {
      const newError = { ...error };
      newError.emailReset = true;
      setError(newError);
      return;
    }

    sendPasswordResetEmail(auth, email.trim())
      .then(() => setShowAlert(true))
      .catch(erro => console.error(erro))
      .finally(() => handleOpenDialog({ open: false }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/static/images/servicos2-Instalacao.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {loading && <LinearProgress />}
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CachedImage
              src="/static/images/logo.png"
              className={styles.logo}
              alt="Logo SV Engenharia"
            />
            <Typography component="h1" variant="h5">
              Entrar no sistema
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-Mail"
                name="email"
                autoComplete="email"
                autoFocus
                onFocus={() => {
                  const newError = { ...error };
                  newError.email = false;
                  setError(newError);
                }}
                error={error.email}
                helperText={error.email ? "campo obrigatório" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onFocus={() => {
                  const newError = { ...error };
                  newError.senha = false;
                  setError(newError);
                }}
                error={error.senha}
                helperText={error.senha ? "campo obrigatório" : ""}
              />
              {/*
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            */}
              {logInError.status && (
                <Alert severity="error">{logInError.message}</Alert>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  backgroundColor: "#e84800",
                  padding: ".75rem",
                  fontWeight: "500",
                }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(true)}
                  >
                    Esqueceu a senha?
                  </span>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={() => handleOpenDialog({ open: false })}
        component="form"
        noValidate
        onSubmit={handleRedefinirSenha}
        sx={{ mt: 1 }}
      >
        <DialogTitle>Redefiniçao de senha</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para redefinir sua senha, informe seu endereço de e-mail que nós
            enviaremos um link para a alteração da senha.
          </DialogContentText>

          <TextField
            margin="normal"
            required
            fullWidth
            id="reset-email"
            label="E-Mail"
            name="reset-email"
            autoComplete="reset-email"
            autoFocus
            onFocus={() => {
              const newError = { ...error };
              newError.emailReset = false;
              setError(newError);
            }}
            error={error.emailReset}
            helperText={error.emailReset ? "campo obrigatório" : ""}
          />
        </DialogContent>
        <DialogActions sx={{ marginRight: "1rem", marginBottom: ".5rem" }}>
          <Button
            type="button"
            style={{
              border: ".1rem solid var(--color-primary)",
              padding: ".75rem",
              fontWeight: "500",
            }}
            onClick={() => handleOpenDialog({ open: false })}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            style={{
              border: ".1rem solid var(--color-primary)",
              padding: ".75rem",
              fontWeight: "500",
            }}
          >
            Redefinir senha
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert2
          onClose={() => setShowAlert(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          O e-mail para redefinição de senha foi enviado com sucesso! <br />{" "}
          Verifique a sua caixa de e-mails.
        </Alert2>
      </Snackbar>
    </ThemeProvider>
  );
}
