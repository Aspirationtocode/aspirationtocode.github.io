class Door1 extends DoorBase {
	constructor(number, onUnlock) {
		super(number, onUnlock);
		// возможность генерировать очередность
		var abilityToGenerate = true;
		var swipe;
		// проверка условия
		var checkCondition = (i) => {
			if (i === arrOfPoints.length - 1) {
				this.unlock()
			}
		}
		// массив очередности
		var arrOfPointsPriority = [0, 5, 6, 1, 3, 2, 4, 8, 7];
		var arrOfPoints = [];
		for (var i = 0; i < this.popup.find('.door-riddle__button').length; i++) {
			var point = this.popup.find(`.door-riddle__button_${i}`).hammer();
			arrOfPoints.push(point);
		}
		// генерирование событий 
		var generateEvent = (arr, i) => {
			arrOfPoints[arrOfPointsPriority[i]].bind('tap', function() {
				$(this).css({
					backgroundColor: '#fff',
					color: 'orangered'
				})
				// проверка условия
				checkCondition(i);

				if (i === 2) {
					abilityToGenerate = false;
					swipe = $('.popup_level_1 .door-riddle__swipe_0').hammer();
					swipe.addClass('animated infinite flash');
					swipe.bind('swipe', function(e) {
						if (e.gesture.direction === 4) {
							swipe.removeClass('animated infinite flash');
							abilityToGenerate = true;
							generateEvent(arrOfPointsPriority, 3)
						}
					})
				}

				if (i === 5) {
					abilityToGenerate = false;
					swipe = $('.popup_level_1 .door-riddle__swipe_1').hammer();
					swipe.addClass('animated infinite flash');
					swipe.bind('swipe', function(e) {
						if (e.gesture.direction === 2) {
							swipe.removeClass('animated infinite flash');
							abilityToGenerate = true;
							generateEvent(arrOfPointsPriority, 6)
						}
					})
				}
				// #################################################
				// Надо сократить код.
				// #################################################
				if (i < arrOfPoints.length - 1 && abilityToGenerate) {
					generateEvent(arrOfPointsPriority, i + 1)
				}
			})
		}
		generateEvent(arrOfPointsPriority, 0)
	}
}