'use strict';

'use strict';
const Joi = require('joi');

const paramsSchema = Joi.object().keys({
  id: Joi.string().uuid().required().messages({'string.required': 'widget id is required'})
})
.required()
.messages({'any.required': 'Request body is required'});

module.exports = paramsSchema;