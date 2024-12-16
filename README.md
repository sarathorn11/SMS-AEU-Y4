# SMS-AEU-Y4

# Step 1: Install Node.js

    First, make sure Node.js is installed on your system. You can download and install Node.js from the official website.

    Verify the installation:

    node -v
    npm -v

# Step 2: Initialize a New Project

    - Create a new directory for your project and navigate into it:
        mkdir my-express-app
        cd my-express-app
    - Initialize a new package.json file:
        npm init -y

# Step 3: Install

    - Install Express
        npm install express --save
    - Install nodemon globally:
        npm install -g nodemon
    - Install dotenv:
        npm i dotenv

# Step 4: migration files

    1. run: npx sequelize-cli migration:generate --name table-name
    2. change file extension from **.js** to **.cjs**
    3. The prefix file must be **migrate-**. Example **migrate-user**
    4. To execute all migration file **npx sequelize-cli db:migrate**
    5. To drop migration tables "npx sequelize-cli db:migrate:undo:all"

# Step 5: seeder files

    1. run: **npx sequelize-cli seed:generate --name seed-name**
    2. Change file extension from **.js** to **.cjs**
    3. The prefix file must be **seed-**. Example **seed-user**
    4. To execute all seed files, run:** npx sequelize-cli db:seed:all**

For coding standards and contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).
