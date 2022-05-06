INSERT INTO
  player (name, email, password_digest)
VALUES
  ();

INSERT INTO
  charcter (player_id, name, exp, gold_amount)
VALUES
  ();

INSERT INTO
  reward (name, description)
VALUES
  ();

INSERT INTO
  item (
    name,
    description,
    type,
    unlock_level,
    bonus_exp,
    sell_price,
    buy_price
  )
VALUES
  ();

INSERT INTO
  characters_items (player_id, character_name, item_id, quantity)
VALUES
  ();

INSERT INTO
  characters_rewards (player_id, character_name, reward_id)
VALUES
  ();

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
;

SELECT
  *
FROM
  reward
LIMIT
  5;

-- ------------------------------------------------------------------------------------------
-- ------------------------------------------------------------------------------------------
select
  *
from
  item
limit
  3, 5;

select
  *
from
  `character`
order by
  exp desc
limit
  3;

-- //-------------------------------------------------------------------------------------------------------------------------------------------------------
-- ^ Most popular items
SELECT
  item.name as `Item name`,
  count(`character`.name) as `Number of owner characters`
from
  `character`
  left join characters_items on `character`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  item.name
order by
  `Number of owner characters` desc
LIMIT
  5;

-- ? Get all the items that are not owned by any character
select
  name as `Item name`
from
  item
where
  id not in (
    SELECT
      item_id
    from
      characters_items
    where
      character_name = 'Ahri'
  );

-- * Get all the items that the character can buy with his current level and money
SELECT
  name as `Item name`
from
  item
where
  buy_price <= (
    Select
      gold_amount
    from
      `character`
    where
      `character`.name = 'Ahri'
  )
  and unlock_level <= (
    (
      Select
        `exp`
      from
        `character`
      where
        `character`.name = 'Ahri'
    ) / 1000
  );

-- ! Rank the players according to the highest level item they have (not considering the rewards)
SELECT
  `character`.name as `Character`,
  MAX(item.unlock_level) as `Max item level`
from
  `character`
  left join characters_items on `character`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  `character`.name
order by
  `Max item level` DESC,
  `Character` ASC
  LIMIT 5;

-- todo Get the characters that have n items or more
SELECT
  `character`.name as `Character`,
  count(item.name) as `Number of owned items`
from
  `character`
  left join characters_items on `character`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  `Character`
having
  `Number of owned items` >= 0
order by
  `Number of owned items` desc;

--   SELECT
--   character_name as `Character`,
--   count(DISTINCT item_id) as `Number of owned items`
-- from
--   characters_items
-- group by
--   `Character`
-- having
--   `Number of owned items` >= 0
-- order by
--   `Number of owned items` desc;
-- & Get all players with total items statistics
SELECT
  `character`.name as `Character`,
  count(item.name) as `Number of owned items`,
  sum(bonus_exp) as `Experience gained from items`,
  sum(buy_price) as `Total gold amount spent on the items`,
  sum(sell_price) as `Total items selling price`
from
  `character`
  left join characters_items on `character`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  `character`.name
order by
  `character`.name asc;