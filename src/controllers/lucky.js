const path = require('path');
// const lucky = require('./model/databases/queries')

exports.get = (req, res) => {
  //{lucky} needs to be passed in below when query written
  res.render('feelinglucky');
};
