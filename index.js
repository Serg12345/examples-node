// Подключим библиотеку express
var express = require('express');

var app = express(); // через переменную app подключаемся к функциям express

// отслеживаем ссылки url
app.get('/', function(req, res) {
	res.send('Hello');
});

app.get('/news', function(req, res) {
	res.send('news');
});

app.get('/news/:id', function(req, res) {
	res.send('id равно ' + req.params.id); // получение id
});

app.get('/news/:name/:id', function(req, res) {
	res.send('name равно ' + req.params.name + ' id равно ' + req.params.id); // получение name, id
});

app.listen(3000); // отслеживаем порт 3000