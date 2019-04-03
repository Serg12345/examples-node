var fs = require('fs');

// для асинхронного чтения файла используем метод .readFile(), пока файл не будет прочитан, дальнейший код не будет работать
fs.readFile('text.txt', 'utf8', function(err, data) {
	console.log(data);
});


// для асинхронной записи данных в существующий файл или в новый файл используем метод .writeFile()
fs.writeFile('some.txt', 'Name', function(err, data) {});

console.log("Test");