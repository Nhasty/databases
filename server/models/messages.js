var db = require('../db');
// db = mysql.createconnection()
// a function which produces all the messages
module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.connection.query('SELECT * FROM messages', [], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },


  // a function which can be used to insert a message into the database
  create: function ({text, username, roomname}) {
    var queryString = 'INSERT INTO messages (messageText, roomname, username) VALUES (?, ?, ?)';
    var queryArgs = [text, roomname, username];
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
