const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/restaurants", require("./routes/restaurantRoutes"));
app.use("/api/menus", require("./routes/menuRoutes"));
app.use("/api/photos", require("./routes/photoRoutes"));
app.use("/api/avis", require("./routes/avisRoutes"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Serveur sur le port ${PORT}`));