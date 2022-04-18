import { Router } from 'express';
import crud from './apis/crud';
import forms from './apis/forms';

const routes = Router();

routes.use('/users');


export default routes;
