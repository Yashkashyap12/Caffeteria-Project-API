
import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Example: fetch data from MySQL
app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
