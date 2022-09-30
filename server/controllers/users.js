var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        console.log('unable to retrieve users from database');
        res.sendStatus(500);
      } else {
        console.log('you have arrived');
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    console.log(req.body);
    console.log('inside users controller post');
    models.users.create(req.body)
      .then(() => res.send(201))
      .catch((err) => res.send(404));
  }
};
