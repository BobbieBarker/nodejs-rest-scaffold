'use strict';

const Widgets = require('../../../services/widgets');

const findById = async({ params: { id }}, res, next) => {
  try {
    const widgets = await Widgets.findById(id);
    res.send(widgets)
  } catch (error) {
    next(error)
  }
}

module.exports = findById;