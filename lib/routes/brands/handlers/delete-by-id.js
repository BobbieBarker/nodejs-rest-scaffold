'use strict';

const Brands = require('../../../services/brands');

const findById = async({ params: { id }}, res, next) => {
  try {
    await Brands.deleteById(id);
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = findById;