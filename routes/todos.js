import router from 'express';
const todosRouter = router.Router();
import {getItems, createItem, deleteItem, markItem, unmarkItem} from '../controllers/todos.js'

todosRouter.get('/items', getItems);
todosRouter.post('/items', createItem);
todosRouter.delete('/items/:itemId', deleteItem);
todosRouter.put('/items/:itemId/check', markItem);
todosRouter.delete('/items/:itemId/check', unmarkItem);

export default todosRouter;
