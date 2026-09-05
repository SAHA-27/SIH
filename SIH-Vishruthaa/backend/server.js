const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "QuantumXplore Backend is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});