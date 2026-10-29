# Country API

## Overview 


A country API tha† allows you to add, remove, and view countries.

## Getting Started

### Prerequisites 

- __Node.js__

- __npm__

- A cloud-based DBM hosting platform (e.g. [Supabase](https://supabase.com/), [Neon](https://neon.com/), etc...)

### Installation requirements
1. Clone the repo by running:  `git clone your_github_url`

2. `cd` into the __server__ folder

3. Install all the dependencies by running `npm install` on your terminal
    - This project uses:

        - __Express__

        - __Cors__

        - __dotenv__

        - __nodemon__

        - __pg__

4. Setup your database

    - Create a database on [Supabase](https://supabase.com/) or other cloud-based database management systems platform

    - Retrieve the database URL and copy it

    - Create a `.env` file in the root directory with the following:
        - `DB_URL=<your_database_url>`

    - Replace `<your_database_url>` with the database URL you just copied from Supabase

    - Run `npm run setup-db` to setup the database

5. Setup your port

    - Add a `PORT` key assigned to the port of your choice in the `.env` file. 

        - `PORT=<port_of_your_choice>` 

        - Preferably __Port 3000__

6. Run the server

    - Run `npm run dev` to run the server in __development mode__

    - Run `npm run start` to run the server in __production mode__



## Database Schema

This database was created with __Postgres__

`country` - table name

```sql
country_id INT GENERATED ALWAYS AS IDENTITY,
name VARCHAR(100) NOT NULL,
capital VARCHAR(100) NOT NULL,
population INT NOT NULL,
languages VARCHAR(100) NOT NULL,
fun_fact VARCHAR(255),
map_image_url VARCHAR(255),
PRIMARY KEY (country_id)
```

### Base URL
`https://localhost:<port>/countries` (or your deployed URL)

### API Endpoints

| Method | Endpoint                  | Description                  |
|--------|---------------------------|------------------------------|
| GET    | /countries                | Retrieves all countries      |
| GET    | /countries/:name          | Retrieves a single country   |
| POST   | /countries                | Creates a new country        |
| DELETE | /countries/:name          |  Deletes a country           |
| UPDATE | /countries/:name          |  Update a country           |

## Get all countries

### Example Request 

__To retrieve all countries__, you can use the `GET` quest:

`GET/countries`

`curl -X GET http://localhost:<port>/countries`

__To retrieve a single country__, you can use the `GET` quest:

`GET/countries/<name_of_country>`

__To add a country__, you can use the `POST` quest and add a JSON object as a body specifying key-value pairs:

`POST/countries/`
    ```
    {
        "name": <name>,
        "capital": <capital>,
        "population": <population>,
        "languages": <languages>,
        "fun_fact": <fun_fact>,
        "map_image_url": <map_image_url>
    }
    ```

__To delete a country__, you can use the `DELETE`:

`DELETE/countries/<name_of_country>`

__To update a country__, you can use the `PATCH`:

`PATCH/countries/<name_of_country>`






### Example Response

A successful response will return a JSON array of countries objects, similar to the following:

```   
    [
        {
          "id": 1,
          "name": "country1",
          "capital": "capital1",
          "population": 1,
          "languages": "language1",
          "fun_fact": "fact1",
          "map_image_url": "url1"
        },
        {
          "id": 2,
          "name": "country2",
          "capital": "capital2",
          "population": 2,
          "languages": "language2",
          "fun_fact": "fact2",
          "map_image_url": "url2"
        },
    ]
```



