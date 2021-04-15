'use strict';

const express = require('express');
const widgets = require('./handlers');
const validationSchema = require('./validation-schema');
const validateBody = require('../middleware/validate-body');
const errorHandler = require('../middleware/error-handler');
const validateParams = require('../middleware/validate-params');
const commonSchema = require('../common-validation-schema');

const router = express.Router();

router.post(
  '/',
  validateBody(validationSchema.createWidget),
  widgets.create
)

router.get('/', widgets.findAll)

router.get(
  '/:id',
  validateParams(commonSchema.params),
  widgets.findById
)

router.put(
  '/:id',
  validateParams(commonSchema.params),
  validateBody(validationSchema.update),
  widgets.update
)

router.use(errorHandler)
module.exports = router;