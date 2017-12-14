const path = require('path');
const resultsQuery = require('../model/queries/resultsByTag');
const idQuery=require('../model/queries/idSearch');

exports.get = (req, res) => {
  const tag = 'Romantic'
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
