CREATE TABLE beachesAndParks (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    if_beach BOOLEAN NOT NULL
);

INSERT INTO beachesAndParks (id, name, location, if_beach) values (124,
'howard park beach', 'tarpon springs, fl', true);