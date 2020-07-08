const express = require('express');
const router = express.Router();

const form = require('./form');
const hello = require('./hello');
const users = require('./users');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/form', form);
router.use('/hello', hello);
router.use('/users', users);

module.exports = router;
