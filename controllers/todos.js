import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import {v4 as uuidv4} from 'uuid'

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, '../db/db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data = db.data || { items: [] };

function getItems (req, res) {
  res.status(200).send(db.data.items);
}

function createItem (req, res) {
  const { item } = req.body;
  const id = uuidv4()

  db.data.items.push({id: id, name: item, checked: false})
  db.write()
    .then(() => {
      res.status(200).send(db.data.items)
    })
    .catch((err) => console.log(err));
}

function deleteItem (req, res) {
  const index = db.data.items.findIndex(array => array.id === req.params.itemId);

  if (index > -1) {
    db.data.items.splice(index, 1);

    db.write()
    .then(() => {res.send(db.data.items)})
    .catch((err) => console.log(err));
  } else {
    res.status(404).send('Такой записи не найдено')

    return
  }


}

function markItem (req, res) {
  const index = db.data.items.findIndex(array => array.id === req.params.itemId);
  if (index > -1) {
    db.data.items[index].checked = true;
  } else {
    res.status(404).send('Такой записи не найдено')
  }
  db.write()
    .then(() => {res.send(db.data.items)})
    .catch((err) => console.log(err));
}

function unmarkItem (req, res) {
  const index = db.data.items.findIndex(array => array.id === req.params.itemId);
  if (index > -1) {
    db.data.items[index].checked = false;
  } else {
    res.status(404).send('Такой записи не найдено')
  }
  db.write()
    .then(() => {res.send(db.data.items)})
    .catch((err) => console.log(err));
}

export {getItems, createItem, deleteItem, markItem, unmarkItem};