import express from 'express';
import ClassesControlller from './controllers/ClassesController';


const routes = express.Router();
const classesControllers = new ClassesControlller();



routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);


export default routes;


