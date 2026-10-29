DROP TABLE IF EXISTS country;

CREATE TABLE country (
    country_id INTEGER GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100) NOT NULL,
    population INT NOT NULL,
    languages VARCHAR(100) NOT NULL,
    map_image_url VARCHAR(225),
    PRIMARY KEY (country_id)

)