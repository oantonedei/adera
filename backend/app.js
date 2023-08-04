//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { DB_SERVER } = require("./config");

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_SERVER, { useUnifiedTopology: true })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

//Import routes
const surveyRoutes = require("./routers/surveyRoutes");

//Initialize express
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/survey", surveyRoutes);

//Error handling
app.all("*", (req, res, next) => {
  next(new Error("Page Not Found", 404));
});
app.use((err, req, res, next) => {
  console.log("Error Here", err);
  const status = err.status || 500;
  res.status(status).send(err.message || "Internal Server Error");
});

//Start server
app.listen(3000, () => console.log("Server on port 3000"));
