const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);
const { exec } = require("child_process");
app.get("/", (req, res) => {
  // exec('node -e "setTimeout(()=>{}, 10000)"');
  res.send("CloudOps Backend Running 🚀");
});
app.get("/api/stress", (req, res) => {
  exec('node -e "for(let i=0;i<1e9;i++){}"');

  res.json({
    message: "CPU stress triggered"
  });
});
  


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});