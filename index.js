// функция
function test() {   
	console.log("Привет");
}
test();

// именнованная функция
var printSomething = function() {   
	console.log("Привет_2");
} 
printSomething();

// одна функция в другой
var printText = function() {   
	console.log("Текст");
} 
function call(func) {   
	func();
}
call(printText);
