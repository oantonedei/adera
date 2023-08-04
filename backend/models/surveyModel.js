const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
    {
        email: String,
        country: String,
        difficulty: String,
        frequency: String,
        recommendation: String,
        designer: String,
        points: Number,
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("survey", SurveySchema);