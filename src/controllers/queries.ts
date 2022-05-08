export default {
  insert: (tableName: String, ...attributes: String[]) =>
    `INSERT INTO
    ${tableName} 
  VALUES
    ("${attributes.join('", "')}");`,
  selectAll: (tableName: String) => `SELECT * FROM ${tableName};`,
  popularItems: (itemsNumber?: Number) =>
    `SELECT
  item.name as \`Item name\`,
  count(\`character\`.name) as \`Number of owner characters\`
from
  \`character\`
  left join characters_items on \`character\`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  item.name
order by
  \`Number of owner characters\` desc
${itemsNumber ? `LIMIT ${itemsNumber}` : ''};`,
  unownedItems: (name: string) => `select
  name as \`Item name\`
from
  item
where
  id not in (
    SELECT
      item_id
    from
      characters_items
    where
      character_name = '${name}'
  );`,
  acquirableItems: (name: string) => `SELECT
  name as \`Item name\`,
  buy_price as \`Item price\`,
  unlock_level as \`Item level\`
from
  item
where
  buy_price <= (
    Select
      gold_amount
    from
      \`character\`
    where
      \`character\`.name = '${name}'
  )
  and unlock_level <= (
    (
      Select
        \`exp\`
      from
        \`character\`
      where
        \`character\`.name = '${name}'
    ) / 1000
  );`,
  charactersItemsRank: (itemsNumber?: number) => `SELECT
  \`character\`.name as \`Character\`,
  MAX(item.unlock_level) as \`Max item level\`
from
  \`character\`
  left join characters_items on \`character\`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  \`character\`.name
order by
  \`Max item level\` DESC,
  \`Character\` ASC
  ${itemsNumber ? `LIMIT ${itemsNumber}` : ''};`,
  charactersWithNItemsOrMore: (itemsNumber?: number) => `SELECT
  \`character\`.name as \`Character\`,
  count(item.name) as \`Number of owned items\`
from
  \`character\`
  left join characters_items on \`character\`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  \`Character\`
having
  \`Number of owned items\` >= ${itemsNumber}
order by
  \`Number of owned items\` desc;`,
  itemsStatistics: () => `SELECT
  \`character\`.name as \`Character\`,
  count(item.name) as \`Number of owned items\`,
  sum(bonus_exp) as \`Experience gained from items\`,
  sum(buy_price) as \`Total gold amount spent on the items\`,
  sum(sell_price) as \`Total items selling price\`
from
  \`character\`
  left join characters_items on \`character\`.name = characters_items.character_name
  left join item on characters_items.item_id = item.id
group by
  \`character\`.name
order by
  \`character\`.name asc;`,
};
