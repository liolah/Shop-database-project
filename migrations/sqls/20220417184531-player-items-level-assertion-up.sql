CREATE ASSERTION player_items_level_constraint CHECK (
  NOT EXISTS (
    SELECT
      *
    FROM
      character
      LEFT JOIN characters_items ON character.name = characters_items.character_name
      AND character.player_id = characters_items.player_id
      LEFT JOIN item ON characters_items.item_id = item.id
    WHERE
      unlock_level > (exp / 1000)
  )
);