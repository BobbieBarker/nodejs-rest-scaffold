'use strict';
const db = require('../../../models');

const deleteById = id => db.Brand.destroy({ where: { id } });

module.exports = deleteById;
