'use strict';
const Joi = require('joi');

const widgetSchema = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.number().min(0).required(),
  brandId: Joi.string().required()
})
.required()
.messages({'any.required': 'Request body is required'});

module.exports = widgetSchema;
