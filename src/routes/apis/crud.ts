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
routes.post('/character/item', crud.createCharacterItem);
routes.get('/character/item/all', crud.selectCharactersItems);
routes.post('/character/reward', crud.createCharacterReward);
routes.get('/character/reward/all', crud.selectCharactersRewards);
routes.post('/reward/item', crud.createRewardItem);
routes.get('/reward/item/all', crud.selectRewardsItems);

export default routes;
