const db = require('../databases/db_connection');

var resultsQuery = (tag) => {
  return db.query(`
          SELECT idea_name FROM ideas, connections, tags
          WHERE ideas.id = connections.idea_id
          AND connections.tag_id = tags.id
          AND tag_name = $1`, [tag])
  }

module.exports = resultsQuery;
