import { Router } from 'express';
import forms from '../../controllers/formsController';

const routes = Router();

routes.get('/popularItems/:itemsNumber', forms.popularItems);
routes.get('/unownedItems/:name', forms.unownedItems);
routes.get('/acquirableItems/:name', forms.acquirableItems);
routes.get('/charactersItemsRank/:itemsNumber', forms.charactersItemsRank);
routes.get('/charactersWithNItemsOrMore/:itemsNumber', forms.charactersWithNItemsOrMore);
routes.get('/itemsStatistics', forms.itemsStatistics);

export default routes;
