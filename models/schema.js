const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const dbSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

function validate(appointment) {
  const schema = {
    id: Joi.number().required(),
    email: Joi.string().required().email()
  };

  return Joi.validate(appointment, schema);
}

const Db = mongoose.model("Nominee", dbSchema);

module.exports = {
  Db,
  validate,
};
