module.exports = {
  client: "mysql",
  connection: {
    host: process.env.SQL_HOST,
    database: "webcomputing",
    user: "webapp",
    password: "password",
    //insecureAuth: true,
  },
};
