# How to run app
````js
node app
````

## migration db
````shell
npx sequelize init
npx sequelize migration:create --name test_name
npx sequelize db:migrate
````