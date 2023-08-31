const { PublishCommand } = require("@aws-sdk/client-sns");
const snsClient = require("../middlewares/snsClient");

const { SECRET, TOPIC_ARN } = require("../config.json");
const surveyModel = require("../models/surveyModel");

/**
 * @param {string | Record<string, any>} message - The message to send. Can be a plain string or an object
 *                                                 if you are using the `json` `MessageStructure`.
 * @param {string} topicArn - The ARN of the topic to which you would like to publish.
 */
const publish = async (message, topicArn) => {
  const response = await snsClient.send(
    new PublishCommand({
      Message: message,
      TopicArn: topicArn,
    })
  );
  return response;
};

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

    const message = {
      email: survey_response.email,
      country: survey_response.country,
    };
    const emailStatus = await publish(JSON.stringify(message), TOPIC_ARN);

    res.json({ status: 200, result, emailStatus });
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
