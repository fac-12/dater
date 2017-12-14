const path = require('path');
const resultsQuery = require('../model/queries/resultsByTag');
const querystring = require('query-string');

exports.get = (req, res) => {
  console.log(req.params)
 const tag = req.params.tag;

  resultsQuery(tag)
    .then(ideas => {
      var ideasArr = [];
      ideas.forEach(function(idea){
        ideasArr.push(idea.idea_name);
      })
      res.render('result', {ideasArr, tag});
    })
    .catch(err => console.log(err));
}