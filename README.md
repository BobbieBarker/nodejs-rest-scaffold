# Assignment Overview
Create an Express based REST API for a Widget Store. Each widget has a single brand. A brand can have multiple widgets.

# The Models

## Widget

The following are the attributes for the widget
* name
* quantity
* brand

## Brand

The following are the attributes for the brand
* name
* lastSoldAt -- date when the widget was last sold, should update if widget quantity decreases

# Required REST Capabilities

The store should support the following capabilities:

1. Create a widget - done.
1. List all widgets - done.
2. Get a widget - done
3. Update a widget including incrementing the quantity of a widget -- done?
4. Delete a brand (which should delete all associated widgets)

# Useful commands

## To initialize the database schema

Initializes the Widget and Brand tables

```
npx sequelize-cli db:migrate
```

## Seed the Database

Run this command to add some test data to the tables

```
npx sequelize db:seed:all
```

## Remove Test Data

Removes all data from the tables

```
npx sequelize db:seed:undo
```

# Helpful Documentation

## node-sqllite documentation

https://github.com/mapbox/node-sqlite3/wiki

## Express

https://expressjs.com/

## Sequelize

https://sequelize.org/master/

sequelize-cli

