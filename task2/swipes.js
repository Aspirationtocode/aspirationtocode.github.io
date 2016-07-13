var vector = {
	start: {x: 0, y: 0},
	end: {x: 0, y: 0}
}

window.addEventListener('pointerdown', e => {
	vector.start.x = e.x;
	vector.start.y = e.y;
});

window.addEventListener('pointerup', e => {
	vector.end.x = e.x;
	vector.end.y = e.y;
	swipesHandler();
});

const swipesHandler = () => {
	var direction = calculateDirection();
	switch (direction) {
		case 'top': 
			break;
		case 'bottom':
			break;
		case 'left':
			break;
		case 'right':
			break;
	}
};

const calculateDirection = () => {
	var diffY = vector.end.y - vector.start.y;
	var diffX = vector.end.x - vector.start.x;
	var dir = '';

	if (Math.abs(diffY) > Math.abs(diffX)) {
		if (diffY < 0) {
			dir =  'top'; // swipe to the top
		} else { 			
			dir = 'bottom'; // swipe to the bottom
		}
	} else {
		if (diffX < 0) {
			dir = 'left'; // swipe to the left
		} else {
			dir = 'right'; // swipe to the right
		}
	}

	return dir;
};