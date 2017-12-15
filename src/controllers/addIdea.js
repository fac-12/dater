const bodyParser=require('body-parser');
const addQuery=require('../model/queries/add');
const resultsQuery = require('../model/queries/resultsByTag');

exports.post = (req, res) => {
const addResult={
  idea_name: req.body.addText,
  tags : Object.keys(req.body).slice(1)
}
addQuery(addResult)
.then ((x) => {
  const ideaTag = addResult.tags[0];
  resultsQuery(ideaTag)
  .then(ideas => {
    var ideasArr = [];
    ideas.forEach(function(idea){
      ideasArr.push(idea.idea_name);
    })
    res.render('resultAdd', {ideasArr, ideaTag})
  })
  .catch(err => next(err));
})
.catch(err => next(err));
}
