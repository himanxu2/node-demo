import express from "express";
const app = express();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health-check", (req, res) => {
  res.send("Server cl rha h");
});
