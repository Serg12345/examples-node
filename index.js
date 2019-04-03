// методы createReadStream и createWriteStream позволяют передавать данные постепенно
var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function(chunk) {
	console.log("новые данные получены:");
	myWriteShort.write(chunk);
});