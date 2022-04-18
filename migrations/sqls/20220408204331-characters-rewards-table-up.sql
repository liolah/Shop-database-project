CREATE TABLE IF NOT EXISTS characters_rewards (
  player_id INT NOT NULL,
  character_name VARCHAR(100) NOT NULL,
  reward_id INT NOT NULL,
  status ENUM('Claimed', 'Unclaimed') DEFAULT 'Unclaimed',
  FOREIGN KEY (player_id) REFERENCES player(id) ON DELETE CASCADE,
  FOREIGN KEY (character_name) REFERENCES `character`(name) ON DELETE CASCADE,
  FOREIGN KEY (reward_id) REFERENCES reward(id) ON DELETE CASCADE,
  PRIMARY KEY(player_id, character_name, reward_id)
);