var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页-乡货圈-家乡的味道' });
});

router.get('/rule-share', function(req, res, next) {
  res.render('rule-share', { title: '分享家规则-乡货圈-家乡的味道' });
});

router.get('/flow-share', function(req, res, next) {
  res.render('flow-share', { title: '使用流程-乡货圈-家乡的味道' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: '关于乡货-乡货圈-家乡的味道' });
});

router.get('/rule-promise', function(req, res, next) {
  res.render('rule-promise', { title: '服务承诺-乡货圈-家乡的味道' });
});

router.get('/flow-booking', function(req, res, next) {
  res.render('flow-booking', { title: '订单管理-乡货圈-家乡的味道' });
});

router.get('/flow-cash', function(req, res, next) {
  res.render('flow-cash', { title: '钱包提现-乡货圈-家乡的味道' });
});

router.get('/flow-publish', function(req, res, next) {
  res.render('flow-publish', { title: '商品发布-乡货圈-家乡的味道' });
});

router.get('/join-share', function(req, res, next) {
  res.render('join-share', { title: '分享家招募 - 乡货圈- 分享家乡的味道' });
});

router.get('/join-service', function(req, res, next) {
  res.render('join-service', { title: '服务商入驻 - 乡货圈- 分享家乡的味道' });
});

module.exports = router;
