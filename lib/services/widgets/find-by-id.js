'use strict';
const db = require('../../../models');

const findById = id => db.Widget.findByPk(id)

module.exports = findById;