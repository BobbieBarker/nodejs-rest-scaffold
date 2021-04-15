'use strict';

const validateBody = schema => async(req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
    return;
  } catch (error) {
    next(error);
    return;
  }
};

module.exports = validateBody;
