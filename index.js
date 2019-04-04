// методы createReadStream и createWriteStream позволяют передавать данные постепенно
var fs = require('fs');

// var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
// var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

// функция pipe() записывает данные по частями (потоками)
// myReadShort.pipe(myWriteShort);

// Для создания сервера подключаем модуль http
var http = require('http');

// Функция createServer создаёт сервер
var server = http.createServer(function(req, res) {
	console.log("URL страницы: " + req.url); // Отслеживаем url запросы
	if (req.url === '/index' || req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/about') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/about.html').pipe(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000, '127.0.0.1'); // Указываем порт и IP адрес
console.log("Проверка работы порта 3000");