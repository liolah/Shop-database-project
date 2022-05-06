import { Router } from 'express';
import crud from '../../controllers/crudController';

const routes = Router();

routes.post('/player', crud.createPlayer);
routes.get('/player', crud.selectPlayers);
routes.post('/character', crud.createCharacter);
routes.get('/character', crud.selectCharacters);
routes.post('/item', crud.createItem);
routes.get('/item', crud.selectItems);
routes.post('/reward', crud.createReward);
routes.get('/reward', crud.selectRewards);

export default routes;
