'use strict';

const Widgets = require('../../../services/widgets');

const update = async({ body, params: { id } }, res, next) => {
  try {
    const widget = await Widgets.update(id, body);
    res.send(widget)
  } catch (error) {
    next(error)
  }
}

module.exports = update;