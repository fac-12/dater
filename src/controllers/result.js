const path = require('path');
const resultsQuery = require('../model/queries/resultsByTag');
const idQuery=require('../model/queries/idSearch');
const querystring = require('query-string');

exports.get = (req, res) => {
  console.log(req.params)
 const tag = req.params.tag;

  resultsQuery(tag)
  .then(ideas => {
    var ideasArr = []
    ideas.forEach(function(idea, index){
      idQuery(idea.idea_id)
        .then(ideaTags => {
          let resultObj = {
            resName : ideaTags[0].idea_name,
            resTags : ideaTags[0].string_agg
          }
          ideasArr.push(resultObj)
          if (ideasArr.length === ideas.length){
            res.render('result', {ideasArr, tag})
        }
      })

    })
  .catch(err => next(err));
 })
}
