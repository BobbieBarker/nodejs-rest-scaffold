'use strict';

const express = require('express');
const brands = require('./handlers');
const errorHandler = require('../middleware/error-handler');
const validateParams = require('../middleware/validate-params');
const commonSchema = require('../common-validation-schema');
const router = express.Router();

router.delete(
  '/:id',
  validateParams(commonSchema.params),
  brands.deleteById
)

router.get('/', brands.findAll)


router.use(errorHandler)
module.exports = router;