CREATE TABLE IF NOT EXISTS item (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(100) DEFAULT 'Generic',
  unlock_level INT NOT NULL,
  bonus_exp INT DEFAULT 0,
  sell_price INT NOT NULL,
  buy_price INT NOT NULL
);