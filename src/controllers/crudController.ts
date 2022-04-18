import { request, Request, Response } from 'express';
import mysql from 'mysql';
import client from '../config/client';
import queries from '../queries/crudQueries.json';

function executeQuery(query: string, params: any[]) {
  client.query(query, params, function (error, results) {
    if (error) throw error;
    return results;
  });
}

const createPlayer = (req: Request, res: Response) => { 
  const { name, position, team, age } = req.body;
  const query = queries.createPlayer?;
  const params = [name, position, team, age];
  executeQuery(query, params);
  res.send('Player created');
}

