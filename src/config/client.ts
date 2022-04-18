import dotenv from 'dotenv';
import { createConnection } from 'mysql';

dotenv.config();

const {
  MySQL_HOST,
  MySQL_USER,
  MySQL_DB,
  MySQL_DB_PASSWORD,
} = process.env;

const client = createConnection({
  host: MySQL_HOST,
  user: MySQL_USER,
  database: MySQL_DB,
  password: MySQL_DB_PASSWORD,
});


export default client;
