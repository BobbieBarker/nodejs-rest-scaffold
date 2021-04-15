'use strict';

const Joi = require('joi');
const Boom = require('@hapi/boom')

const sendResponse = (res, { output, details }) => res.status(output.statusCode).send({ details, ...output.payload });

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, _next) => {
  if (Joi.isError(error)) return sendResponse(res, Boom.badRequest(error))
  console.log("🚀 ~ file: error-handler.js ~ line 13 ~ errorHandler ~ error", error)
  return sendResponse(res, Boom.boomify(error))
};

module.exports = errorHandler;