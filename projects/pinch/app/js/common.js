'use strict';

$(function () {

	var out = $('.output');
	var pg = $('.playground');
	var box = $('.playbox');

	var calculateDistance = function calculateDistance(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	};

	var pinch = {
		point1: {
			x: 0,
			y: 0,
			touched: false
		},
		point2: {
			x: 0,
			y: 0,
			touched: false
		},
		startDistance: 0,
		startAngle: 0
	};

	box.bind('pointerdown', function (e) {
		out.text('x: ' + e.clientX + ', y: ' + e.clientY);
		if (pinch.point1.touched === false || pinch.point2.touched === false) {
			if (!pinch.point1.touched) {
				pinch.point1.x = e.clientX;
				pinch.point1.y = e.clientY;
				pinch.point1.touched = true;
			} else {
				pinch.point2.x = e.clientX;
				pinch.point2.y = e.clientY;
				pinch.point2.touched = true;
				pinch.startDistance = calculateDistance(pinch.point1.x, pinch.point1.y, pinch.point2.x, pinch.point2.y);
			}
		}
	});

	box.bind('pointerup', function (e) {
		pinch = {
			point1: {
				x: 0,
				y: 0,
				touched: false
			},
			point2: {
				x: 0,
				y: 0,
				touched: false
			},
			startDistance: 0,
			startAngle: 0
		};
	});

	pg.bind('pointermove', function (e) {
		box[0].setPointerCapture(e.originalEvent.pointerId);
		checkDistances(e.clientX, e.clientY);
		var distance = calculateDistance(pinch.point1.x, pinch.point1.y, pinch.point2.x, pinch.point2.y);
		box.css({
			transform: 'scale(' + distance / pinch.startDistance + ')'
		});
	});

	function checkDistances(x, y) {
		var distanceToPoint1 = calculateDistance(pinch.point1.x, pinch.point1.y, x, y);
		var distanceToPoint2 = calculateDistance(pinch.point2.x, pinch.point2.y, x, y);
		if (distanceToPoint1 < distanceToPoint2) {
			pinch.point1.x = x;
			pinch.point1.y = y;
		} else {
			pinch.point2.x = x;
			pinch.point2.y = y;
		}
	}

	// Функция для вычисления угла между 2 векторами
	var angleBetweenTwoVectors = function angleBetweenTwoVectors(vector1, vector2) {
		// скалярное произведение векторов
		var scalMultVectors = vector1.reduce(function (sum, current, i) {
			return sum + current * vector2[i];
		}, 0);
		// модуль вектора равен квадратному корню из суммы квадратов его координат
		var moduleVector = function moduleVector(v) {
			// Находим квадраты слагаемых
			var step1 = v.map(function (currentValue) {
				return Math.pow(currentValue, 2);
			});
			// Складываем их
			var step2 = step1.reduce(function (sum, current) {
				return sum + current;
			});
			// Вычисляем квадратный корень
			return Math.sqrt(step2, 2);
		};
		// Вычисляем косинус угла между векторами
		var cosA = scalMultVectors / (moduleVector(vector1) * moduleVector(vector2));
		console.log("cos(" + cosA + ")");
		return Math.acos(cosA);
	};

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function () {
		//Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {};

	$("img, a").on("dragstart", function (event) {
		event.preventDefault();
	});
});