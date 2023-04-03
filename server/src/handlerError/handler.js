module.exports = (err, req, res, next) => {
  console.log(err);
  const {errorsLogger} = require('./error');
  module.exports.errorHandler = (err, req, res, next) => {
    errorsLogger(err);  
  if (err.message ===
    'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
    'new row for relation "Users" violates check constraint "Users_balance_ck"') {
    err.message = 'Not Enough money';
    err.code = 406;
  }
  if (!err.message || !err.code) {
    res.status(500).send('Server Error');
  } 
  else {
    return res.status(err.code).send(err.message); 
  }
};
}
