const express = require('express');
const router = express.Router();

const User = require('../models/user');
console.log(User);

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

router.post('/', (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
  });
  console.log(newUser);
  newUser.save((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
  });
});
module.exports = router;
