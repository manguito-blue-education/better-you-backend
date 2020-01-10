 # Better You - Backend
 
 ## Configuration Process of this Project
 
 ```
# Creation of the scaffolding of sequlize
npx sequelize-cli init

# Creation of the models
npx sequelize-cli model:create --name User --attributes name:string,email:string,password:string
npx sequelize-cli model:create --name Habit --attributes name:string,reason:string,description:string,reminderHour:string,confirmationHour:string
npx sequelize-cli model:create --name Frequency --attributes name:string,daysValue:integer 

# Migrating this models to the database
npx sequelize-cli db:migrate
```  

## Running for the first time

1. Clone the project

    ```
    git clone https://github.com/manguito-blue-education/better-you-backend.git
    ```

2. Install all dependencies

    ```
    # you can use 'npm install' as well 
    yarn
    ```

3. Setup a Development Database with Docker
    ```
    docker run --rm -d -p 3306:3306 --env MYSQL_ROOT_PASSWORD=root -v better_you_db:/var/lib/mysql mariadb:10.4
    ```
 
 4. Setup a config file in `config/config.json` with the following structure:
    ```
    {
      "development": {
        "username": "root",
        "password": "root",
        "database": "better_you_development",
        "host": "127.0.0.1",
        "dialect": "mariadb",
        "operatorsAliases": false
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "better_you_test",
        "host": "127.0.0.1",
        "dialect": "mariadb",
        "operatorsAliases": false
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "better_you_production",
        "host": "127.0.0.1",
        "dialect": "mariadb",
        "operatorsAliases": false
      }
    }
    ```
 
5. Migrate the DB (remember to first create the schema `better_you_development`)
   ```
    npx sequelize-cli db:migrate
   ```
   
 6. Start the API Server
    ```
    npm run start
    ```
    
  7. Test creating some entries (see `src/schema.js` for the mutations list) in the graphql dev tool at `localhost:4000`. The suggested order is the following:
        1. Create a user
        2. Create a frequency
        3. Create an habit