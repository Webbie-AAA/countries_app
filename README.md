# Country API

##Overview 


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


