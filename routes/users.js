const express = require('express');
const router = express.Router();

const users = { items: [] };

router.get('/', (req, res, next) => {
  res.render('users', {
    users: JSON.stringify(users)
  });
});

router.post('/', (req, res, next) => {
  users.items = [...users.items, req.body];
  res.render('message', {
    message: 'Ok!'
  });
});

router.delete('/:email', (req, res, next) => {
  if (!users.items.find(item => req.params.email === item.email)) {
    res.send('Nok!');
    return;
  }
  users.items = users.items.filter(item => req.params.email !== item.email);
  res.send('Ok!');
});

module.exports = router;
