const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const REST_API = `https://group-expenses.herokuapp.com`;
const LOCALHOST = `http://localhost:3000`;
module.exports = {
  baseURL:  IS_PRODUCTION ? REST_API : LOCALHOST
}