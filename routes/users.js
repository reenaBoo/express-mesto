// это файл маршрутов
const router = require('express').Router(); // создали роутер
const { findUsers, findUserById, createUser } = require('../controllers/users');

router.get('/users', findUsers);
router.get('/users/:userId', findUserById);
router.post('/users', createUser);

module.exports = router;
