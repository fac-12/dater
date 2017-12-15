const path = require('path');
const feelingLuckyQuery = require('../model/queries/feelinglucky');
const idQuery=require('../model/queries/idSearch');

exports.get = (req, res) => {
  feelingLuckyQuery()
    .then(lucky => {
      idQuery(lucky[0].id)
        .then(luckyResult => {
          const luckyName = luckyResult[0].idea_name
          const luckyTags = luckyResult[0].string_agg
          res.render('feelinglucky', {
          luckyName, luckyTags})
        })
        .catch(err => next(err));
          })
          .catch(err => next(err));
};
