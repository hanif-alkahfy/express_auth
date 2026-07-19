const express = require("express");

const authRoutes = require("./routes/AuthRoutes");

const app = express();

// Middleware untuk membaca request body JSON
app.use(express.json());

// Prefix seluruh endpoint auth menjadi /api/auth
app.use("/api/auth", authRoutes);

module.exports = app;