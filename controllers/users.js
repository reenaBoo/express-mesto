// это файл контроллеров

const User = require('../models/user');

const ERROR_CODE_400 = 400;
const ERROR_CODE_404 = 404;
const ERROR_CODE_500 = 500;

module.exports.findUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(ERROR_CODE_400).send({
          message: 'Переданы некорректные данные при создании пользователя',
        });
      }
      res.status(ERROR_CODE_500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.findUserById = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (user) {
        res.status(200).send({ data: user });
      } else {
        res.status(ERROR_CODE_404).send({
          message: 'Пользователь по указанному _id не найден',
        });
      }
    })
    .catch(() => res.status(ERROR_CODE_500).send({ message: 'На сервере произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(ERROR_CODE_400).send({
          message: 'Переданы некорректные данные при создании пользователя',
        });
      }
      return res.status(ERROR_CODE_500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.updateUser = (req, res) => {
  // обновим имя найденного по _id пользователя
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (user) {
        res.status(200).send({ data: user });
      } else {
        res.status(ERROR_CODE_404).send({
          message: 'Пользователь с указанным _id не найден',
        });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE_400).send({
          message: 'Переданы некорректные данные при обновлении профиля',
        });
      }
      res.status(ERROR_CODE_500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.updateAvatar = (req, res) => {
  // обновим имя найденного по _id пользователя
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (user) {
        res.status(200).send({ data: user });
      } else {
        res.status(ERROR_CODE_404).send({
          message: 'Пользователь с указанным _id не найден',
        });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE_400).send({
          message: 'Переданы некорректные данные при обновлении аватара',
        });
      }
      res.status(ERROR_CODE_500).send({ message: 'На сервере произошла ошибка' });
    });
};
