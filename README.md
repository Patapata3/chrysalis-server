# chrysalis-server
REST-server for the chrysalis project

# Configuring and starting the server
## Configuring POstgreSQL
1. Download and install postgreSQL https://www.postgresql.org/download/
2. Open pgAdmin, create a user and a database (or just use default "postgres" user for the database)
## Starting the server
1. In the src/config/Config.json under the "Development" tag write the name of the database previously created as well as the username and password for the user assigned as the owner of this database
2. After installing the dependencies with ```npm install``` run  ```npm install -g sequelize-cli``` in the project folder (or in the terminal in your IDE)
3. Run command ```sequelize db:migrate``` to propagate the project's data model to the database
4. Start the server with the command ```npm run dev```
## Additional remarks
The server will start on the port 8080 by default, it can be changed in the src/config/Config.json under the ```serverPort``` tag\
If the port was changed, you will have to change it in the rest-config.json file in the CHRYSALIS project for it to run correctly
