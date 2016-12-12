var url = require('url');
var qs = require('querystring');

var po = url.parse('http://comic.naver.com/webtoon/detail.nhn?titleId=183559&no=310&weekday=mon');


console.log(qs.parse(po.query));