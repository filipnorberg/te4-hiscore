require("dotenv").config();

module.exports = {
  development: {
    username: process.env.User || "",
    password: process.env.Password || "",
    database: process.env.Name || "",
    host: process.env.Host || "",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "HEROKU_POSTGRES_FÄRG_URL",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};