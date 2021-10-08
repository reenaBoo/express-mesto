// это файл маршрутов
const router = require('express').Router(); // создали роутер
// eslint-disable-next-line object-curly-newline
const { findCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/cards');

router.get('/cards', findCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);
router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;
