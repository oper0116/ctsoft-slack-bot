var express = require('express');
var router = express.Router();


//curl -s -d "payload={'username': 'testBot', \"text\":\"내용\"}" "https://hooks.slack.com/services/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"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SLACK-BOT' });
});

module.exports = router;
