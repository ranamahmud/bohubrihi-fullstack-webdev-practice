CREATE TABLE sf_crime_sample(
	incidnt_num INTEGER,
	category VARCHAR(200),
	descript VARCHAR(200),
	day_of_week	VARCHAR(50),
	date VARCHAR(100),
	time VARCHAR(50),
	pd_district	VARCHAR(50),
	resolution VARCHAR(50),
	address	VARCHAR(200),
	lon	FLOAT,
	lat	FLOAT,
	location VARCHAR(200),
	id INTEGER PRIMARY KEY NOT NULL
);