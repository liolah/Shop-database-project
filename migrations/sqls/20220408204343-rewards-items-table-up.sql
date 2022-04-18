CREATE TABLE IF NOT EXISTS rewards_items (
  reward_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (reward_id) REFERENCES reward(id) ON DELETE CASCADE,
  FOREIGN KEY (item_id) REFERENCES item(id) ON DELETE CASCADE,
  PRIMARY KEY(reward_id, item_id)
);