'use strict';
const db = require('../../../models');

const findAll = () => db.Widget.findAll()

module.exports = findAll;