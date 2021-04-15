'use strict';
const db = require('../../../models');

const update = async (id, widgetAttrs) => {
  await db.Widget.update(widgetAttrs, { returning: true, where: { id } });
  return db.Widget.findByPk(id)
}

module.exports = update;