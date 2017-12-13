const express = require('express');
const router = express.Router();
const path = require('path');

const home = require('./home');
const add = require('./add')
const lucky = require('./lucky');
const result = require('./result');
const error = require('./error');

router.get('/', home.get);
router.get('/add', add.get);
router.get('/lucky', lucky.get);
router.get('/result', result.get);
// router.use(error.client);
// router.use(error.server);

module.exports = router;
