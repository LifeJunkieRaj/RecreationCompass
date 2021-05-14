CREATE TABLE beachesAndParks (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    if_beach BOOLEAN NOT NULL,
    if_park BOOLEAN NOT NULL,
);

INSERT INTO beachesAndParks (id, name, location, if_beach, if_park) values (124,
'howard park beach', 'tarpon springs, fl', true, true);

//belongs in package.json in Scripts
    //"start": "npm start --prefix backend"