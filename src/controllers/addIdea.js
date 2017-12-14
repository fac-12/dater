const bodyParser=require('body-parser');
const addQuery=require('../model/queries/add');
const resultsQuery = require('../model/queries/resultsByTag');

exports.post = (req, res) => {
const addResult={
  idea_name: req.body.addText,
  tags : Object.keys(req.body).slice(1)
}
addQuery(addResult)
.then (() => {
  const ideaTag = addResult.tags[0]
  console.log(ideaTag)
  resultsQuery(ideaTag)
  .then(ideas => {
    var ideasArr = [];
    ideas.forEach(function(idea){
      ideasArr.push(idea.idea_name);
    })
    res.render('result', {ideasArr, ideaTag})
  })
  .catch(err => next(err));
})
.catch(err => next(err));
}
