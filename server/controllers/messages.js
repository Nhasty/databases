var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll().then(data => res.json(data)).catch((err) => res.sendStatus(404));
    // respond with data from response
  }, // a function which handles a get request for all messages
  post: function (req, res) { // a function which handles posting a message to the database
  // take req.body and insert into DB
    models.messages.create(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(err);
        return res.sendStatus(404);
      });
  }
};
