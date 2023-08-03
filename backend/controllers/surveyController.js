const { SECRET } = require("../config.json");
const surveyModel = require("../models/surveyModel");

module.exports.addSurvey = async (req, res, next) => {
  try {
    const survey_response = req.body;
      console.log(survey_response);
      res.json(survey_response);
  } catch (error) {
    next(error);
  }
};

module.exports.getSurvey = async (req, res, next) => {
  try {
    console.log("I have the data");
    res.json("I have the data");
  } catch (error) {
    next(error);
  }
};
