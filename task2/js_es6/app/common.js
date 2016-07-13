	var out = $('.output')
	var pg = $('.playground');
	var box = $('.playbox');

	var rotate = {
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
		startVector: [0, 0]
	}

	function vectorCoords(xstart, ystart, xend, yend) {
		return [xend - xstart, yend - ystart]
	}
	// Функция для вычисления угла между 2 векторами
	var angleBetweenTwoVectors = function(vector1, vector2) {
	    // скалярное произведение векторов
	    var scalMultVectors = vector1.reduce(function(sum, current, i) {
	        return sum + (current * vector2[i])
	    }, 0);
	    // модуль вектора равен квадратному корню из суммы квадратов его координат
	    var moduleVector = function(v) {
	        // Находим квадраты слагаемых
	        var step1 = v.map(function(currentValue) {
	            return Math.pow(currentValue, 2)
	        });
	        // Складываем их
	        var step2 = step1.reduce(function(sum, current) {
	            return sum + current
	        });
	        // Вычисляем квадратный корень
	        return Math.sqrt(step2, 2)
	    };
	    // Вычисляем косинус угла между векторами
	    var cosA = scalMultVectors / (moduleVector(vector1) * moduleVector(vector2));
	    // out.text(`Угол: ${angle}, скалярное произведение: ${scalMultVectors}, Угол в радианах: ${Math.acos(cosA)}`)
	    // out.text(`скалярное произведение: ${scalMultVectors}, Cos: ${cosA}, синус:${ Math.sin(Math.acos(cosA))}`)
	    return Math.acos(cosA);
	    
	}


	

	var calculateDistance = (x1, y1, x2, y2) => {
		return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
	}
	

	box.bind('pointerup', function(e) {
		rotate = {
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
			startVector: [0, 0]
		}
	})

	box.bind('pointerdown', function(e) {
		if (rotate.point1.touched === false || rotate.point2.touched === false) {
			if (!rotate.point1.touched) {
				rotate.point1.x = e.clientX;
				rotate.point1.y = e.clientY;
				rotate.point1.touched = true;
			} else {
				rotate.point2.x = e.clientX;
				rotate.point2.y = e.clientY;
				rotate.point2.touched = true;
				rotate.startVector = vectorCoords(rotate.point1.x, rotate.point1.y, rotate.point2.x, rotate.point2.y) 
			}
		}
	})

	$('body').bind('pointermove', function(e) {
		box[0].setPointerCapture(e.originalEvent.pointerId);
		var point = checkDistances(e.clientX, e.clientY);
		var vector_1 = rotate.startVector;
		var vector_2 = vectorCoords(rotate.point1.x, rotate.point1.y, e.clientX, e.clientY);
		
		
		var angle = angleBetweenTwoVectors(vector_1, vector_2) * 180 / Math.PI;
		if ((vector_1[0] * vector_2[1] - vector_1[1] * vector_2[0]) <= 0) {
			angle = angle * (-1);
		}
		box.data('angle', angle)
		box.css({
			transform: `rotate(${angle}deg)`
		})
		function checkDistances(x, y) {
			var distanceToPoint1 = calculateDistance(rotate.point1.x, rotate.point1.y, x, y);
			var distanceToPoint2 = calculateDistance(rotate.point2.x, rotate.point2.y, x, y);
			if (distanceToPoint1 < distanceToPoint2) {
				rotate.point1.x = x;
				rotate.point1.y = y;
			} else {
				rotate.point2.x = x;
				rotate.point2.y = y;
			}
		}
	
		
	})

	