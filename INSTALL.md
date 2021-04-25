# Installation instructions:
- Clone the repository that contains this instruction file
## Database
- Setup an instance of Postgres database somewhere accessible by the host of this project
- Create a database for use of this project and copy its connection string
- Execute the Setup.sql file in the root of the project repository
## Envrionment variables
- In the root directory of project repository, copy and rename `sample.env` to `.env`
- edit the first line of the `.env` so that it contains the connection string from the last section
- Save a secret key of your choosing in the second line of the `.env` file, feel free to use a generator
## Node
- In a terminal at the **root** of  directory, `cd frontend` then `npm install`
- Make sure port 5000 is not in use
- In the terminal, run `npm run serve` and open browser at `localhost:5000`
- In a new terminal at the **root** of the repository, `cd backend`, then `npm install`
- Make sure port 3000 is not in use, then `npm run test`

# Access frontend
The (development build) project is available in a browser at `http://localhost:5000`