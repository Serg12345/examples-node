// Считаем количество элементов в массиве

var array_counter = function(array) {
	return "В массиве находится " + array.length + " элементов.";
}

var multiply = function(x, y) {
	return `${x} умножить ${y} равно ${x * y}`; // запись в обратных одинарных кавычках
}

var some_value = 451;

// Экспорт именованных функций
module.exports = {
	array_counter: array_counter,
	multiply: multiply,
	some_value: some_value
}