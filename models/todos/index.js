const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.join(
  'models',
  'todos',
  'db.json',
);

const adapter = new FileSync(dataJSONFilePath);
const db = low(adapter);

db.defaults({todos: []}).write();

module.exports.todosModel = db;