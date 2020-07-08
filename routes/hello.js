const express = require('express');
const router = express.Router();

router.get('/:firstName/:lastName', (req, res, next) => {
  res.render('hello', {
    firstName: req.params.firstName,
    lastName: req.params.lastName
  });
});

module.exports = router;
