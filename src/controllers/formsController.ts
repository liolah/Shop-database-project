import { Request, Response } from 'express';
import crud from './crudController';
import queries from './queries';

const popularItems = (req: Request, res: Response) => {
  const query = queries.popularItems(req.params.itemsNumber as unknown as number);
  crud.executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const unownedItems = (req: Request, res: Response) => {
  const query = queries.unownedItems(req.params.name as unknown as string);
  crud.executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const acquirableItems = (req: Request, res: Response) => {
  const query = queries.acquirableItems(req.params.name as unknown as string);
  crud.executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const charactersItemsRank = (req: Request, res: Response) => {
  const query = queries.charactersItemsRank(req.params.itemsNumber as unknown as number);
  crud.executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const charactersWithNItemsOrMore = (req: Request, res: Response) => {
  const query = queries.charactersWithNItemsOrMore(req.params.itemsNumber as unknown as number);
  crud.executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const itemsStatistics = (_req: Request, res: Response) => {
  const query = queries.itemsStatistics();
  crud.executeQuery(query, (results: any) => {
    res.json(results);
  });
};

export default {
  popularItems,
  unownedItems,
  acquirableItems,
  charactersItemsRank,
  charactersWithNItemsOrMore,
  itemsStatistics,
};

export {
  popularItems,
  unownedItems,
  acquirableItems,
  charactersItemsRank,
  charactersWithNItemsOrMore,
  itemsStatistics,
};
