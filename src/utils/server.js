// const express = require("express");
// const cors = require("cors");
import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

// Sample data
const notices = [
  { id: 1, title: "TE Interviews Notice", link: "https://drive.google.com/file/d/1F-4brSDAnTY1grynxqsNvh56_xR-6RuR/view?usp=drive_link" },
  { id: 2, title: "Hackathon Guidelines", link: "https://drive.google.com/file/d/1L2Jvu43-lMMrMmaW1m2BcPr9wdk297RC/view?usp=drive_link" },
  { id: 3, title: "TE Interview Coming Soon!", link: "https://drive.google.com/file/d/1L2Jvu43-lMMrMmaW1m2BcPr9wdk297RC/view?usp=drive_link" },
  { id: 4, title: "New Head Team Formed - Checkout Names!", link: "https://drive.google.com/file/d/1L2Jvu43-lMMrMmaW1m2BcPr9wdk297RC/view?usp=drive_link" },
  { id: 5, title: "New Head Team Formation Meet", link: "https://drive.google.com/file/d/1L2Jvu43-lMMrMmaW1m2BcPr9wdk297RC/view?usp=drive_link" }
];

app.get("/api/notices", (req, res) => {
  res.json(notices);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running at http://localhost:${PORT}/api/notices`);
});
