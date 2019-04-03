var fs = require('fs');

// для чтение файла используем метод .readFileSync(), пока файл не будет прочитан, дальнейший код не будет работать
var file_readed = fs.readFileSync('text.txt', 'utf8');
console.log(file_readed);

// для записи данных в существующий файл или в новый файл используем метод .writeFileSync()
var message = "Привет.\n " + file_readed;
fs.writeFileSync('some_new_file.txt', message);