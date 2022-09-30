var db = require('../db');
// console.log('db', db);
module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM users', [], (err, result) => {
      callback(err, result);
    });
  },
  create: function ({username}) {
    var queryString = 'INSERT INTO users (username) VALUES (?)';
    var queryArgs = [username];
    return new Promise((resolve, reject) => {
      db.connection.query(queryString, queryArgs, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
};
