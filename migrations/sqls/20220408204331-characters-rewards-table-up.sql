CREATE TABLE IF NOT EXISTS characters_rewards (
  player_id INT FOREIGN KEY REFERENCES player(id) ON DELETE CASCADE,
  character_name VARCHAR(100) FOREIGN KEY REFERENCES character(name) ON DELETE CASCADE,
  reward_id INT FOREIGN KEY REFERENCES reward(id) ON DELETE CASCADE,
  status ENUM('Claimed', 'Unclaimed') DEFAULT 'Unclaimed',
  PRIMARY KEY(player_id, character_name, reward_id)
);