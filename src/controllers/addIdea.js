const bodyParser = require('body-parser');
const addQuery = require('../model/queries/add');
const resultsQuery = require('../model/queries/resultsByTag');
const idQuery = require('../model/queries/idSearch');

exports.post = (req, res, next) => {
  const addResult = {
    idea_name: req.body.addText,
    tags: Object.keys(req.body).slice(1)
  }
  addQuery(addResult)
    .then(x => {
      let tag = addResult.tags[0]
      return resultsQuery(tag)
        .then(ideas => {
          var ideasArr = []
          ideas.forEach(function (idea, index) {
            return idQuery(idea.idea_id)
              .then(ideaTags => {
                let resultObj = {
                  resName: ideaTags[0].idea_name,
                  resTags: ideaTags[0].string_agg
                }
                ideasArr.push(resultObj)
                if (ideasArr.length === ideas.length) {
                  res.render('result', {
                    ideasArr,
                    tag
                  })
                }
              })
              .catch(err => next(err));
          })
        })
    })
}