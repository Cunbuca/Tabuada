// server.js
const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");

const CLIENT_ID = "645274112527-qf33l4g56rnljh61i6e00585qmemu310.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

const app = express();
app.use(cors({
  origin: "http://localhost:5500", // frontend
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: "segredo123",
  resave: false,
  saveUninitialized: true
}));

// conectar ao MongoDB
mongoose.connect("mongodb://localhost:27017/appUsuarios");

const User = mongoose.model("User", {
  name: String,
  email: String,
  picture: String
});

app.post("/api/login", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  });

  const payload = ticket.getPayload();

  // salva ou busca o usuário
  let user = await User.findOne({ email: payload.email });
  if (!user) {
    user = await User.create({
      name: payload.name,
      email: payload.email,
      picture: payload.picture
    });
  }

  // salvar na sessão
  req.session.user = user;
  res.json({ success: true });
});

app.get("/api/user", (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ error: "Não autorizado" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});