//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { DB_SERVER } = require("./config");

//Used to ensure https connection
const fs =  require("fs");
const https = require("https");

const key = fs.readFileSync("private.key");
const cert = fs.readFileSync("certificate.crt");

const cred = {
  key,
  cert
};

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
app.use(express.json());
app.use(cors());

//Routes
app.get("/cert", (req, res) => {
 res.sendFile(cert);
});
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

const httpsServer = https.createServer(cred, app);
httpsServer.listen(8443);
