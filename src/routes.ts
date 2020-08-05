import express from 'express';
import ClassesControlller from './controllers/ClassesController';
import ConnectionsControlller from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesControlller();
const connectionsControlller = new ConnectionsControlller();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsControlller.create);
routes.get('/connections', connectionsControlller.index);

export default routes;


