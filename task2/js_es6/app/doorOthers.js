// ===================== Пример кода первой двери =======================
/**
 * @class Door0
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
class Door0 extends DoorBase {
	constructor(number, onUnlock) {
		super(number, onUnlock);
		var buttons = [
			this.popup.find('.door-riddle__button_0'),
			this.popup.find('.door-riddle__button_1'),
			this.popup.find('.door-riddle__button_2')
		];

		var _onButtonPointerDown = (e) => {
			$(e.target).addClass('door-riddle__button_pressed');
			checkCondition();
		}

		var _onButtonPointerUp = (e) => {
			$(e.target).removeClass('door-riddle__button_pressed');
		}

		buttons.forEach(function(b) {
			b.on('pointerdown', _onButtonPointerDown);
			b.on('pointerup', _onButtonPointerUp);
			b.on('pointercancel', _onButtonPointerUp);
			b.on('pointerleave', _onButtonPointerUp);
		});

		/**
		 * Проверяем, можно ли теперь открыть дверь
		 */
		var checkCondition = () => {
			var isOpened = true;
			buttons.forEach(function(b) {
				if (!b.hasClass('door-riddle__button_pressed')) {
					isOpened = false;
				}
			});

			// Если все три кнопки зажаты одновременно, то откроем эту дверь
			if (isOpened) {
				this.unlock();
			}
		}
	}
}

/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */

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
				if (i < arrOfPoints.length - 1 && abilityToGenerate) {
					generateEvent(arrOfPointsPriority, i + 1)
				}
			})
		}
		generateEvent(arrOfPointsPriority, 0)
	}
}


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// *
//  * @class Door2
//  * @arguments DoorBase
//  * @param {Number} number
//  * @param {Function} onUnlock

class Door2 extends DoorBase {
	constructor(number, onUnlock) {
		super(number, onUnlock);
		var cogwheelRotationCheck = [false, false, false]
		var arrOfAngles = [-90, 90, -90];
		var arrOfCogwheels = [];
		

		for (var i = 0; i < 3; i++) {
			var cogwheel = $(`.door-riddle__cogwheel_${i}`).hammer();
			var cogwheelInstance = cogwheel.data('hammer');
			cogwheelInstance.get('rotate').set({ enable: true });

			cogwheel.bind('rotate', function(e) {
				var angle = Math.round(e.gesture.angle);
				$(this).css({
					transform: `rotate(${e.gesture.angle}deg)`
				});
			
				if ($(this).hasClass('door-riddle__cogwheel_0')) {
					checkIndex(0, $(this))
				}
				if ($(this).hasClass('door-riddle__cogwheel_1')) {
					checkIndex(1, $(this))
				}
				if ($(this).hasClass('door-riddle__cogwheel_2')) {
					checkIndex(2, $(this))
				}

				function checkIndex(i, element) {
					if (angle === arrOfAngles[i])  {
						cogwheelRotationCheck[i] = true;
						element.parent().addClass('lighten')
						checkCondition();
					}
				}
			})
			arrOfCogwheels.push(cogwheel)
		}
		var checkCondition = () => {
			if (cogwheelRotationCheck[0] === true && cogwheelRotationCheck[1] === true && cogwheelRotationCheck[2] === true) {
				this.unlock();		
			}
		}
	}
}

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */


class Box extends DoorBase {
	constructor(number, onUnlock) {
		super(number, onUnlock)
		this.popup.on('click', function() {
			this.unlock();
		}.bind(this));
		this.showCongratulations = function() {
			alert('Поздравляю! Игра пройдена!');
		};
	}
}



	



