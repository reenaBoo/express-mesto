// это файл маршрутов
const router = require('express').Router(); // создали роутер
const { findCards, createCard, deleteCard } = require('../controllers/cards');

router.get('/cards', findCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);

module.exports = router;
