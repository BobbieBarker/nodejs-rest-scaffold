'use strict';
const Joi = require('joi');

const widgetSchema = Joi.object().keys({
  name: Joi.string(),
  quantity: Joi.number().min(0),
})
.required()
.messages({'any.required': 'Request body is required'});

module.exports = widgetSchema;
