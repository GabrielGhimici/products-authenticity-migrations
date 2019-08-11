const dotenv = require('dotenv');

dotenv.config();

module.exports = {
   "type": "mysql",
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASS,
   "database": process.env.DB_DATABASE,
   "migrations": [
     "dist/migrations/*.js"
   ],
   "cli": {
     "migrationsDir": "migrations"
   }
}
