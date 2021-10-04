const { todosModel } = require('../../models/todos');
const { v4: uuidv4 } = require('uuid');

module.exports.getItems = async (req, res) => {
  const todos = await todosModel.getState();

  res.status(200).send(todos);
}

module.exports.createItem = async (req, res) => {
  const { todo } = req.body;
  const id = uuidv4();

  await todosModel.get('todos')
    .unshift({ id: id, name: todo, checked: false})
    .write()

    res.status(200).send(todosModel.getState());
}

module.exports.deleteItem = async (req, res) => {
  const { todoId }  = req.params;

  await todosModel.get('todos')
      .remove({ id: todoId })
      .write()

    res.status(200).send(todosModel.getState());
}

module.exports.markItem = async (req, res) => {
  const { todoId } = req.params;

  await todosModel.get('todos')
    .find({ id: todoId })
    .assign({ checked: true})
    .write()

  res.status(200).send(todosModel.getState());
}

module.exports.unmarkItem = async (req, res) => {
  const { todoId } = req.params;

  await todosModel.get('todos')
    .find({ id: todoId })
    .assign({ checked: false})
    .write()

  res.status(200).send(todosModel.getState());
}