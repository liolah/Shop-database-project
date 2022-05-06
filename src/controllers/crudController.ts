import { Request, Response } from 'express';
import client from '../config/client';
import queries from './queries';

// ---------------------------------------------------------------------------------------------------------------------
// Basic functions

function executeQuery(
  query: string,
  callback?:
    | { (results: any): void; (results: any): void; (results: any): void; (results: any): void; (arg0: any): void }
    | undefined,
) {
  client.query(query, function (error, results, fields) {
    if (error) throw error;
    return callback ? callback(results) : results;
  });
}

function insertInto(tableName: string, ...attributes: any[]) {
  const query = queries.insert(tableName, ...attributes);
  executeQuery(query);
}

function selectAllQuery(tableName: string) {
  const query = queries.selectAll(tableName);
  return query;
}

// ------------------------------------------------------------------------------------------------------------------------
// Select

const selectPlayers = (_req: Request, res: Response) => {
  const query = selectAllQuery('player');
  executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const selectCharacters = (_req: Request, res: Response) => {
  const query = selectAllQuery('`character`');
  executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const selectItems = (_req: Request, res: Response) => {
  const query = selectAllQuery('item');
  executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const selectRewards = (_req: Request, res: Response) => {
  const query = selectAllQuery('reward');
  executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const selectCharactersItems = (_req: Request, res: Response) => {
  const query = selectAllQuery('characters_items');
  executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const selectCharactersRewards = (_req: Request, res: Response) => {
  const query = selectAllQuery('characters_rewards');
  executeQuery(query, (results: any) => {
    res.json(results);
  });
};

const selectRewardsItems = (_req: Request, res: Response) => {
  const query = selectAllQuery('rewards_items');
  executeQuery(query, (results: any) => {
    res.json(results);
  });
};

// ------------------------------------------------------------------------------------------------------------------------
// Insert

const createPlayer = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  insertInto('player', name, email, password);
  res.send('Player created');
};

const createCharacter = (req: Request, res: Response) => {
  const { player_id, name, exp, gold_amount } = req.body;
  insertInto('`character`', player_id, name, exp, gold_amount);
  res.send('Character created');
};

const createItem = (req: Request, res: Response) => {
  const { name, description, type, unlock_level, bonus_exp, sell_price, buy_price } = req.body;
  insertInto('item', name, description, type, unlock_level, bonus_exp, sell_price, buy_price);
  res.send('Item created');
};

const createReward = (req: Request, res: Response) => {
  const { name, description } = req.body;
  insertInto('reward', name, description);
  res.send('Reward created');
};

const createCharacterItem = (req: Request, res: Response) => {
  const { player_id, character_name, item_id, quantity } = req.body;
  insertInto('reward', player_id, character_name, item_id, quantity);
  res.send('Reward created');
};

const createCharacterReward = (req: Request, res: Response) => {
  const { player_id, character_name, reward_id } = req.body;
  insertInto('reward', player_id, character_name, reward_id);
  res.send('Reward created');
};

const createRewardItem = (req: Request, res: Response) => {
  const { reward_id, item_id, quantity } = req.body;
  insertInto('reward', reward_id, item_id, quantity);
  res.send('Reward created');
};

export default {
  createPlayer,
  createCharacter,
  createItem,
  createReward,
  createCharacterItem,
  createCharacterReward,
  createRewardItem,
  selectPlayers,
  selectCharacters,
  selectItems,
  selectRewards,
  selectCharactersItems,
  selectCharactersRewards,
  selectRewardsItems,
  executeQuery,
};
