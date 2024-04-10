import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("You are looking at root route.");
});

app.listen(8080, () => {
  console.log("Running on PORT 8080");
});
