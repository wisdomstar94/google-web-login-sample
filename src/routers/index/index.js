const express = require('express');
const router = express.Router();

const indexRouter = require('./child_routes/index');
const callbackRouter = require('./child_routes/callback');

router.get('/', indexRouter);
router.get('/callback', callbackRouter);

module.exports = router;
