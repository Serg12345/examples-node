// подключаем встроенный модуль events, позволяет отслеживать события
var events = require('events');
// подключим модуль, который позволяет наследовать события от конкретного объекта
var util = require('util');

// создадим переменную (или объект), которая отвечает за обработку событий
var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text) {
	console.log(text);
});

myEmit.emit('some_event', 'Обработчик событий сработал.');

// Создадим конструктор объектов.
var Cars = function(model) {
	this.model = model;
};

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('audi');
var volvo = new Cars('volvo');

var cars = [bmw, audi, volvo];
cars.forEach(function(car) {
	car.on('speed', function(text) {
		console.log(car.model + " speed is - " +text);
	});
});

bmw.emit('speed', '254.5 km');
bmw.emit('speed', '180 km');