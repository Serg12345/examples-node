var fs = require('fs');

// для удаления файлов используются методы unlink(), unlinkSinc()
// fs.unlink('some.txt', function() {});

// метод mkdirSync() создаёт новую директорию (папку)
// fs.mkdirSync('new-one');

// метод rmdirSync() удаляет директорию (папку)
// fs.rmdirSync('new-one');

// Создадим папку и файл.
// fs.mkdir('new-one', function() {
// 	fs.writeFile('./new-one/some.txt', 'Создали файл.', function() {
// 		console.log("Создали папку и файл.");
// 	});
// });

// Удаляем файл и папку.
fs.unlink('./new-one/some.txt', function() {
	fs.rmdir('new-one', function() {});
});