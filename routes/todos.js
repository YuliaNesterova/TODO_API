import router from 'express';
import { celebrate, Joi } from 'celebrate';
const todosRouter = router.Router();
import {getItems, createItem, deleteItem, markItem, unmarkItem} from '../controllers/todos.js'

todosRouter.get('/items', getItems);
todosRouter.post('/items', celebrate({
  body: Joi.object().keys({
    item: Joi.string().required()
  })
}) ,createItem);
todosRouter.delete('/items/:itemId', celebrate({
  params: Joi.object().keys({
    itemId: Joi.number().required()
  })
}) ,deleteItem);
todosRouter.put('/items/:itemId/check', celebrate({
  params: Joi.object().keys({
    itemId: Joi.number().required()
  })
}), markItem);
todosRouter.delete('/items/:itemId/check', celebrate({
  params: Joi.object().keys({
    itemId: Joi.number().required()
  })
}), unmarkItem);

export default todosRouter;
