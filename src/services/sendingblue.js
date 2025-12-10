import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;

export const SendContato = async ({
  nome = "",
  email = "",
  telefone = "",
  cidade = "",
  mensagem = "",
}) => {
  const headers = {
    accept: "application/json",
    "api-key": apiKey,
    "content-type": "application/json",
  };

  const subject = "Contato do Site";

  const htmlContent = `
    <html>
      <head></head>
      <body>
        <p>Nome: ${nome}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${telefone}</p>
        <p>Cidade: ${cidade}</p>
        <p>Mensagem: ${mensagem}</p>
      </body>
    </html>
  `;

  const body = {
    sender: {
      name: `Contato do Site SV Engenharia`,
      email: `contato@svengenharia.srv.br`,
    },
    to: [
      {
        email: `contato@svengenharia.srv.br`,
        name: `Site Site SV Engenharia`,
      },
    ],
    subject: subject,
    htmlContent: htmlContent,
  };

  try {
    const response = await axios.post(
      `https://api.sendinblue.com/v3/smtp/email`,
      body,
      {
        headers: { ...headers },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
