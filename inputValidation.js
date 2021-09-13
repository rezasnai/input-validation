/** @format */

module.exports.isEmail = (email) => {
  return /^[\w_\.-]+@[\w]+\.[\w]{2,4}$/g.test(email);
};
