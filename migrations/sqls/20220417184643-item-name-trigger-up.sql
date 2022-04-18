CREATE TRIGGER capitalize_character_name_before_insert BEFORE
INSERT
  ON character FOR EACH ROW BEGIN
SET
  NEW.name = CONCAT(
    UCASE(LEFT(NEW.name, 1)),
    LCASE(SUBSTRING(NEW.name, 2))
  );

END;