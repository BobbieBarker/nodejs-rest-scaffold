'use strict';

const create = require('./create');
const findAll = require('./find-all');
const findById = require('./find-by-id');
const update = require('./update');

module.exports = {
  create,
  findAll,
  findById,
  update
}