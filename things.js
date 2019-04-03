// Считаем количество элементов в массиве
// Создание и экспорт именнованных функций

module.exports.array_counter = function(array) {
	return "В массиве находится " + array.length + " элементов.";
}

module.exports.multiply = function(x, y) {
	return `${x} умножить ${y} равно ${x * y}`; // запись в обратных одинарных кавычках
}

module.exports.some_value = 451;