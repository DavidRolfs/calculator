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

		var addResult = add(number1, number2);
		$("#show").text(addResult);
	});

	$("form#sub").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("input#sub1").val());
		var number2 = parseInt($("input#sub2").val());

		var subResult = subtraction(number1, number2);
			$("#show").text(subResult);
	});

	$("form#mult").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("input#mult1").val());
		var number2 = parseInt($("input#mult2").val());

		var multResult = multiply(number1, number2);
			$("#show").text(multResult);
	});

	$("form#divide").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("input#divide1").val());
		var number2 = parseInt($("input#divide2").val());

		var divideResult = divide(number1, number2);
			$("#show").text(divideResult);

		});
});

// var number1 = parseInt(prompt("Give me a number: "));
// var number2 = parseInt(prompt("Give me another number: "));
//
// var result = add(number1, number2);
// alert(result);
