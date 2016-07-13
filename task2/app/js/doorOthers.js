'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ===================== Пример кода первой двери =======================
/**
 * @class Door0
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */

var Door0 = function (_DoorBase) {
	_inherits(Door0, _DoorBase);

	function Door0(number, onUnlock) {
		_classCallCheck(this, Door0);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Door0).call(this, number, onUnlock));

		var buttons = [_this.popup.find('.door-riddle__button_0'), _this.popup.find('.door-riddle__button_1'), _this.popup.find('.door-riddle__button_2')];

		var _onButtonPointerDown = function _onButtonPointerDown(e) {
			$(e.target).addClass('door-riddle__button_pressed');
			checkCondition();
		};

		var _onButtonPointerUp = function _onButtonPointerUp(e) {
			$(e.target).removeClass('door-riddle__button_pressed');
		};

		buttons.forEach(function (b) {
			b.on('pointerdown', _onButtonPointerDown);
			b.on('pointerup', _onButtonPointerUp);
			b.on('pointercancel', _onButtonPointerUp);
			b.on('pointerleave', _onButtonPointerUp);
		});

		/**
   * Проверяем, можно ли теперь открыть дверь
   */
		var checkCondition = function checkCondition() {
			var isOpened = true;
			buttons.forEach(function (b) {
				if (!b.hasClass('door-riddle__button_pressed')) {
					isOpened = false;
				}
			});

			// Если все три кнопки зажаты одновременно, то откроем эту дверь
			if (isOpened) {
				_this.unlock();
			}
		};
		return _this;
	}

	return Door0;
}(DoorBase);

/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */

var Door1 = function (_DoorBase2) {
	_inherits(Door1, _DoorBase2);

	function Door1(number, onUnlock) {
		_classCallCheck(this, Door1);

		// возможность генерировать очередность

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Door1).call(this, number, onUnlock));

		var abilityToGenerate = true;
		var swipe;
		// проверка условия
		var checkCondition = function checkCondition(i) {
			if (i === arrOfPoints.length - 1) {
				_this2.unlock();
			}
		};
		// массив очередности
		var arrOfPointsPriority = [0, 5, 6, 1, 3, 2, 4, 8, 7];
		var arrOfPoints = [];
		for (var i = 0; i < _this2.popup.find('.door-riddle__button').length; i++) {
			var point = _this2.popup.find('.door-riddle__button_' + i).hammer();
			arrOfPoints.push(point);
		}
		// генерирование событий
		var generateEvent = function generateEvent(arr, i) {
			arrOfPoints[arrOfPointsPriority[i]].bind('tap', function () {
				$(this).css({
					backgroundColor: '#fff',
					color: 'orangered'
				});
				// проверка условия
				checkCondition(i);

				if (i === 2) {
					abilityToGenerate = false;
					swipe = $('.popup_level_1 .door-riddle__swipe_0').hammer();
					swipe.addClass('animated infinite flash');
					swipe.bind('swipe', function (e) {
						if (e.gesture.direction === 4) {
							swipe.removeClass('animated infinite flash');
							abilityToGenerate = true;
							generateEvent(arrOfPointsPriority, 3);
						}
					});
				}

				if (i === 5) {
					abilityToGenerate = false;
					swipe = $('.popup_level_1 .door-riddle__swipe_1').hammer();
					swipe.addClass('animated infinite flash');
					swipe.bind('swipe', function (e) {
						if (e.gesture.direction === 2) {
							swipe.removeClass('animated infinite flash');
							abilityToGenerate = true;
							generateEvent(arrOfPointsPriority, 6);
						}
					});
				}
				if (i < arrOfPoints.length - 1 && abilityToGenerate) {
					generateEvent(arrOfPointsPriority, i + 1);
				}
			});
		};
		generateEvent(arrOfPointsPriority, 0);
		return _this2;
	}

	return Door1;
}(DoorBase);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// *
//  * @class Door2
//  * @arguments DoorBase
//  * @param {Number} number
//  * @param {Function} onUnlock

var Door2 = function (_DoorBase3) {
	_inherits(Door2, _DoorBase3);

	function Door2(number, onUnlock) {
		_classCallCheck(this, Door2);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Door2).call(this, number, onUnlock));

		var cogwheelRotationCheck = [false, false, false];
		var arrOfAngles = [-90, 90, -90];
		var arrOfCogwheels = [];

		for (var i = 0; i < 3; i++) {
			var cogwheel = $('.door-riddle__cogwheel_' + i).hammer();
			var cogwheelInstance = cogwheel.data('hammer');
			cogwheelInstance.get('rotate').set({ enable: true });

			cogwheel.bind('rotate', function (e) {
				var angle = Math.round(e.gesture.angle);
				$(this).css({
					transform: 'rotate(' + e.gesture.angle + 'deg)'
				});

				if ($(this).hasClass('door-riddle__cogwheel_0')) {
					checkIndex(0, $(this));
				}
				if ($(this).hasClass('door-riddle__cogwheel_1')) {
					checkIndex(1, $(this));
				}
				if ($(this).hasClass('door-riddle__cogwheel_2')) {
					checkIndex(2, $(this));
				}

				function checkIndex(i, element) {
					if (angle === arrOfAngles[i]) {
						cogwheelRotationCheck[i] = true;
						element.parent().addClass('lighten');
						checkCondition();
					}
				}
			});
			arrOfCogwheels.push(cogwheel);
		}
		var checkCondition = function checkCondition() {
			if (cogwheelRotationCheck[0] === true && cogwheelRotationCheck[1] === true && cogwheelRotationCheck[2] === true) {
				_this3.unlock();
			}
		};
		return _this3;
	}

	return Door2;
}(DoorBase);

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */

var Box = function (_DoorBase4) {
	_inherits(Box, _DoorBase4);

	function Box(number, onUnlock) {
		_classCallCheck(this, Box);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Box).call(this, number, onUnlock));

		_this4.popup.on('click', function () {
			this.unlock();
		}.bind(_this4));
		_this4.showCongratulations = function () {
			alert('Поздравляю! Игра пройдена!');
		};
		return _this4;
	}

	return Box;
}(DoorBase);