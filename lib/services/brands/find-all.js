'use strict';
const db = require('../../../models');

const findAll = () => db.Brand.findAll()

module.exports = findAll;
