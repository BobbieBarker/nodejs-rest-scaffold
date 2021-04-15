'use strict';

const Brands = require('../../../services/brands');

const findAll = async(req, res, next) => {
  try {
    const widgets = await Brands.findAll();
    res.send(widgets)
  } catch (error) {
    next(error)
  }
}

module.exports = findAll;