const db = require('../databases/db_connection');

var idQuery = (id) => {
  return db.query(`
    SELECT idea_name, string_agg(tag_name, ', ') FROM tags INNER JOIN connections ON tags.id = connections.tag_id
INNER JOIN ideas ON connections.idea_id = ideas.id WHERE ideas.id = $1 GROUP BY idea_name`, [id])
  }

module.exports = idQuery;
