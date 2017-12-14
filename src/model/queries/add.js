const db = require('../databases/db_connection');

var addQuery = (addResult) => {
   db.query(`INSERT INTO ideas (idea_name) VALUES ($1)`, [addResult.idea_name] )
   .then(() => {
  //  addResult.tags.forEach((value,index,array)=>{
       db.query(`INSERT INTO connections (idea_id) VALUES($1) `,[x])
    // } )

   }
   )
  }

module.exports = addQuery;
