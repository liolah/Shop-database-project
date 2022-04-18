-- INSERT INTO
--   player (name, email, password_digest)
-- VALUES
--   ();

-- INSERT INTO
--   charcter (player_id, name, exp, gold_amount)
-- VALUES
--   ();

-- INSERT INTO
--   reward (name, description)
-- VALUES
--   ();

-- INSERT INTO
--   item (
--     name,
--     description,
--     type,
--     unlock_level,
--     bonus_exp,
--     sell_price,
--     buy_price
--   )
-- VALUES
--   ();

-- INSERT INTO
--   characters_items (player_id, charcter_name, item_id, quantity)
-- VALUES
--   ();

-- INSERT INTO
--   characters_rewards (player_id, charcter_name, reward_id,)
-- VALUES
--   ();

INSERT INTO
  rewards_items (reward_id, item_id, quantity)
VALUES
  ();

-- ------------------------------------------------------------------------------------------
SELECT
  *
FROM
  player
LIMIT
  5;

SELECT
  *
FROM
  character
LIMIT
  5;

SELECT
  *
FROM
  item
LIMIT
  5;

SELECT
  *
FROM
  reward
LIMIT
  5;

-- ------------------------------------------------------------------------------------------
-- ------------------------------------------------------------------------------------------
SELECT
  item.name,
  count(character.name) as `Number of owner characters`
from
  character
  left join characters_items on character.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  item.name order by `Number of owner characters` desc;


SELECT
  character.name,
  count(item.name) as `Number of owned items`,
  sum(item.exp) as `Experience gained from items`,
  sum(item.buy_price) as `Total gold amount spent on the items`,
  sum(item.sell_price) as `Total selling price`
from
  character
  left join characters_items on character.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  character.name order by character.name desc LIMIT 5;


SELECT
  character.name,
  count(item.name) as `Number of owned items`,
  sum(item.exp) as `Experience gained from items`,
  sum(item.buy_price) as `Total gold amount spent on the items`,
  sum(item.sell_price) as `Total selling price`
from
  character
  left join characters_items on character.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  character.name
order by
  character.name desc
LIMIT
  5;


