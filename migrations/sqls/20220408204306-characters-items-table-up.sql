CREATE TABLE IF NOT EXISTS characters_items (
  player_id INT NOT NULL,
  character_name VARCHAR(100) NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  aquirement_date DATETIME DEFAULT NOW(),
  FOREIGN KEY (player_id) REFERENCES player(id) ON DELETE CASCADE,
  FOREIGN KEY (character_name) REFERENCES `character`(name) ON DELETE CASCADE,
  FOREIGN KEY (item_id) REFERENCES item(id) ON DELETE CASCADE,
  PRIMARY KEY(player_id, character_name, item_id)
);