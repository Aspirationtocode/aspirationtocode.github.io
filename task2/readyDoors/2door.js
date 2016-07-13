class Door2 extends DoorBase {
	constructor(number, onUnlock) {
		super(number, onUnlock)
		// $('.door-riddle__drag-item').draggable();
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