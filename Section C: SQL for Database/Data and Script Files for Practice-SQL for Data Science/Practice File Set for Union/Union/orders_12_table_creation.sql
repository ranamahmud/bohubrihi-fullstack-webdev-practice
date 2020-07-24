DROP TABLE orders1;
CREATE TABLE orders1(
  id INTEGER PRIMARY KEY NOT NULL,
  account_id INTEGER,
  occurred_at DATE,
  standard_qty FLOAT,
  gloss_qty FLOAT,
  poster_qty FLOAT,
  total FLOAT,
  standard_amt_usd FLOAT,
  gloss_amt_usd FLOAT,
  poster_amt_usd FLOAT,
  total_amt_usd FLOAT
);

DROP TABLE orders2;
CREATE TABLE orders2(
  id INTEGER PRIMARY KEY NOT NULL,
  account_id INTEGER,
  occurred_at DATE,
  standard_qty FLOAT,
  gloss_qty FLOAT,
  poster_qty FLOAT,
  total FLOAT,
  standard_amt_usd FLOAT,
  gloss_amt_usd FLOAT,
  poster_amt_usd FLOAT,
  total_amt_usd FLOAT
);
