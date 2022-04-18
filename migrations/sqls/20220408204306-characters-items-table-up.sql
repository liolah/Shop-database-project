CREATE TABLE IF NOT EXISTS characters_items (
  player_id INT FOREIGN KEY REFERENCES player(id) ON DELETE CASCADE,
  character_name VARCHAR(100) FOREIGN KEY REFERENCES character(name) ON DELETE CASCADE,
  item_id INT FOREIGN KEY REFERENCES item(id) ON DELETE CASCADE,
  quantity INT NOT NULL,
  aquirement_date DATETIME DEFAULT NOW(),
  PRIMARY KEY(player_id, character_name, item_id)
);