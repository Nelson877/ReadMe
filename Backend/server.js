require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const libraryRoutes = require("./routes/library.routes");
const authRoutes = require("./routes/auth.routes");
const ParentRoutes = require("./routes/parent.routes");

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "https://read-me-eight-alpha.vercel.app"];
app.use(cors({ 
  origin: allowedOrigins, 
  credentials: true 
}));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/library", libraryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/addReader", ParentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));