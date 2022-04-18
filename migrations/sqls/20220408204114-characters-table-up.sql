CREATE TABLE IF NOT EXISTS `character` (
  player_id INT FOREIGN KEY REFERENCES player(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  exp INT DEFAULT 0,
  gold_amount INT DEFAULT 0,
  PRIMARY KEY(player_id, name)
);