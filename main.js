const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const routes = require('./lib/routes')
/**
 * To initialize the database schema
 * ```
 * npx sequelize-cli db:migrate
 * ```
 *
 * To seed the database with some test data:
 *
 * ```
 * npx sequelize db:seed:all
 * ```
 *
 * To remove the test data:
 *
 * ```
 * npx sequelize db:seed:undo
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/brands', routes.brands)
app.use('/widgets', routes.widgets)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})