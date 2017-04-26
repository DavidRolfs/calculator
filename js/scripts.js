//back-end

var add = function(number1, number2) {
	return number1 + number2;
};

var subtraction = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

// front-end
$(document).ready(function(){
	$("form#add").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("input#add1").val());
		var number2 = parseInt($("input#add2").val());

		var result = add(number1, number2);
		$("#show").text(result);
	});
});

// var number1 = parseInt(prompt("Give me a number: "));
// var number2 = parseInt(prompt("Give me another number: "));
//
// var result = add(number1, number2);
// alert(result);
