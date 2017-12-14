const bodyParser=require('body-parser');
const addQuery=require('../model/queries/add');

exports.post = (req, res) => {
const addResult={
  idea_name: req.body.addText,
  tags : Object.keys(req.body).slice(1)
}
console.log(addResult);
addQuery(addResult);
  res.render('result');
};
