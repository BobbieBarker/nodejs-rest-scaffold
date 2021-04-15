'use strict';
const db = require('../../../models');

const create = async widgetAttrs => db.Widget.create(widgetAttrs);

module.exports = create;
