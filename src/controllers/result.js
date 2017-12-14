const path = require('path');
const resultsQuery = require('../model/queries/resultsByTag');

exports.get = (req, res) => {
  const tag = 'Romantic'
  resultsQuery(tag)
  .then(ideas => {
    var ideasArr = [];
    ideas.forEach(function(idea){
      ideasArr.push(idea.idea_name);
    })
    res.render('result', {ideasArr, tag})
  })
  .catch(err => next(err));
};
