require('dotenv').config();

const options = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB_NAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  charset: 'latin1',
  collate: 'latin1_swedish_ci',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG === 'true',
};

module.exports = {
  development: options,
  test: options,
  production: options,
};