const { SECRET } = require("../config.json");
const surveyModel = require("../models/surveyModel");

module.exports.addSurvey = async (req, res, next) => {
  try {
    const survey_response = req.body;
    const user_exists = await surveyModel.findOne({
      email: survey_response.email,
    });
    if (user_exists) {
      return next({
        status: 409,
        message: "User already exists",
      });
    }
    const result = await surveyModel.create(survey_response);
    res.json({ status: 200, result });
  } catch (error) {
    next(error);
  }
};

module.exports.getSurvey = async (req, res, next) => {
  try {
    const all_surveys = await surveyModel.find();
    res.json({ success: true, all_surveys });
  } catch (error) {
    next(error);
  }
};
