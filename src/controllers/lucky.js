const path = require('path');
const feelingLuckyQuery = require('../model/queries/feelinglucky');

exports.get = (req, res) => {
  feelingLuckyQuery()
  .then(lucky => {
    lucky = lucky[0].idea_name;
    res.render('feelinglucky', {lucky})
  })
  .catch(err => next(err));
};