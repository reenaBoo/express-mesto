const validator = require('validator');

module.exports.isValid = (url) => {
  const valided = validator.isURL(url);
  if (valided) {
    return url;
  }
  throw new Error('URL validation err');
};
