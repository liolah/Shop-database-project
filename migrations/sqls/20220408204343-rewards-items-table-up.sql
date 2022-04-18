CREATE TABLE IF NOT EXISTS rewards_items (
  reward_id INT FOREIGN KEY REFERENCES reward(id) ON DELETE CASCADE,
  item_id INT FOREIGN KEY REFERENCES item(id) ON DELETE CASCADE,
  quantity INT NOT NULL,
  PRIMARY KEY(reward_id, item_id)
);