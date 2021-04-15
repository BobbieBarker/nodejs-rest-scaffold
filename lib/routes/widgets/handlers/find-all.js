'use strict';

const Widgets = require('../../../services/widgets');

const findAll = async(req, res, next) => {
  try {
    const widgets = await Widgets.findAll();
    res.send(widgets)
  } catch (error) {
    next(error)
  }
}

module.exports = findAll;