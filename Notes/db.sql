CREATE TABLE beachesAndParks (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    if_beach BOOLEAN NOT NULL,
    if_park BOOLEAN NOT NULL,
);

INSERT INTO beachesAndParks (id, name, location, if_beach, if_park) values (124,
'howard park beach', 'tarpon springs, fl', true, true);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    beaches_and_parks_id BIGINT NOT NULL REFERENCES beachesAndParks(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5)
)