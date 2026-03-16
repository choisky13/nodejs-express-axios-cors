const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.text());

let data = { message: "여러분 화이팅!" };

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.post("/", (req, res) => {
  const body = req.body;
  data.message = body;

  const responseData = typeof body === "object" ? JSON.stringify(body) : body;
  res.status(200).send(`받은 POST 데이터: ${responseData}`);
});

app.put("/", (req, res) => {
  const body = req.body;
  data.message = body;

  const responseData = typeof body === "object" ? JSON.stringify(body) : body;
  res.status(200).send(`업데이트된 데이터: ${responseData}`);
});

app.delete("/", (req, res) => {
  data = {};
  res.status(200).send("데이터가 삭제되었습니다.");
});

app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT}/ 에서 실행 중입니다.`);
});
