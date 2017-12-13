const path = require('path');
const resultsQuery = require('./model/queries/resultsByTag');

exports.get = (req, res) => {
  console.log(req.params);
  // get the tag name from the req object and pass into resultsQuery
  var resultArr = resultsQuery('Romantic')
  res.render('result', {resultArr});
};
