const express = require("express");
const surveyRoutes = express.Router();

//Controller imports
const { addSurvey, getSurvey } = require("../controllers/surveyController");

//Getters
surveyRoutes.get("/", getSurvey);

//Posters
surveyRoutes.post("/", addSurvey);

module.exports = surveyRoutes;
