const db = require('../databases/db_connection');

const feelingLuckyQuery = () => db.query(`SELECT * FROM ideas ORDER BY RANDOM() LIMIT 1`);

module.exports = feelingLuckyQuery;
