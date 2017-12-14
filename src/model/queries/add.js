const db = require('../databases/db_connection');

var addQuery = (addResult) => {
   return db.query(`INSERT INTO ideas (idea_name) VALUES ($1) RETURNING id`, [addResult.idea_name] )
   .then((x) => {
     addResult.tags.forEach((value,index,array)=>{
       db.query(`INSERT INTO connections (idea_id, tag_id) VALUES($1, (SELECT id FROM tags WHERE tag_name = $2)) `, [x[0].id, value]);
    } )
   }
   )
  }

module.exports = addQuery;
