// это файл маршрутов
const router = require('express')
  .Router(); // создали роутер
const {
  findUser,
  findUsers,
  findUserById,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

router.get('/users/me', findUser);
router.get('/users', findUsers);
router.get('/users/:userId', findUserById);
router.patch('/users/me', updateUser);
router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
