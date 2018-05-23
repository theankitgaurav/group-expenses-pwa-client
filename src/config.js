const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  baseURL:  (process.env.NODE_ENV === 'production') ? `https://group-expenses.herokuapp.com`: `http://localhost:3000`
}