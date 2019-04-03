// Для создания сервера подключаем модуль http
var http = require('http');

// Функция createServer создаёт сервер
var server = http.createServer(function(req, res) {
	console.log("URL страницы: " + req.url); // Отслеживаем url запросы
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	res.end('Привет');
});

server.listen(3000, '127.0.0.1'); // Указываем порт и IP адрес
console.log("Проверка работы порта 3000");

// Для завершения работы сервера нажать ctrl + C