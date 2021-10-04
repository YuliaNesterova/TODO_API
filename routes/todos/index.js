const router = require('express');
const { celebrate, Joi } = require('celebrate');
const { getItems, createItem, deleteItem, markItem, unmarkItem } = require('../../controllers/todos');

const todosRouter = router.Router();

todosRouter.get('/todos', getItems);
todosRouter.post('/todos', celebrate({
  body: Joi.object().keys({
    todo: Joi.string().required()
  })
}) ,createItem);
todosRouter.delete('/todos/:todoId', celebrate({
  params: Joi.object().keys({
    todoId: Joi.string().allow('').required()
  })
}) ,deleteItem);
todosRouter.put('/todos/:todoId/status', celebrate({
  params: Joi.object().keys({
    todoId: Joi.string().allow('').required()
  })
}), markItem);
todosRouter.delete('/todos/:todoId/status', celebrate({
  params: Joi.object().keys({
    todoId: Joi.string().allow('').required()
  })
}), unmarkItem);

module.exports.todosRouter = todosRouter;
