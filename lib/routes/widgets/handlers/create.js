'use strict';

const Widgets = require('../../../services/widgets');

const create = async({ body }, res, next) => {
  try {
    const widget = await Widgets.create(body);
    res.send(widget)
  } catch (error) {
    next(error)
  }
}

module.exports = create;