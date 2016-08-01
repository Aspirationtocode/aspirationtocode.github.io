$(function() {

	var ulOfDates = $('.lent-ul-first');
	var arrOfDateLi = [];
	var list = $(".lent");
	function buildCalendar(arr) {
		var week = ['вс','пн','вт','ср','чт','пт','сб'];
		var d = new Date();
		d.setDate(d.getDate() - 3);
		for (var i = 0; i < 7; i++) {
			d.setDate(d.getDate() + 1);
			if (i === 2) {
				arr[i] = 'Сегодня';
			} else {
				arr[i] = d.getDate() + ', ' + week[d.getDay()];
			}
		}
		return arr;
	}

	buildCalendar(arrOfDateLi);
	list.append(ulOfDates);

	ulOfDates.append($(`<li><a href="2_day_before.html"> ${arrOfDateLi[0]}</a></li>`));
	ulOfDates.append($(`<li><a href="1_day_before.html"> ${arrOfDateLi[1]}</a></li>`));
	ulOfDates.append($(`<li><a href="index.html"> ${arrOfDateLi[2]}</a></li>`));
	ulOfDates.append($(`<li><a href="1_day_after.html"> ${arrOfDateLi[3]}</a></li>`));
	ulOfDates.append($(`<li><a href="2_day_after.html"> ${arrOfDateLi[4]}</a></li>`));
	ulOfDates.append($(`<li><a href="3_day_after.html"> ${arrOfDateLi[5]}</a></li>`));
	ulOfDates.append($(`<li><a href="4_day_after.html"> ${arrOfDateLi[6]}</a></li>`));

	function activateDay(string) {
		if ($('body').attr('name') === string) {
			$('.lent-ul-first').find(`[href="${string}.html"]`).parent().addClass('active');
		}
	}
	activateDay('1_day_after')
	activateDay('2_day_after')
	activateDay('3_day_after')
	activateDay('4_day_after')
	activateDay('1_day_before')
	activateDay('2_day_before')
	activateDay('index');
	
	
	$('.check-box').on('click', function(e) {
		$(this).toggleClass('highlighted');
		if ($(this).hasClass('serial')) {
			$('.serial-pr').parent().toggleClass('h-light-serial');
		}
		else if ($(this).hasClass('film')) {
			$('.film-pr').parent().toggleClass('h-light-film');
		}
		
		else if ($(this).hasClass('sport')) {
			$('.sport-pr').parent().toggleClass('h-light-sport');
		}
	})
	
	


	// var program = $('.program-dscr');
	// for (var i = 0; i < program.length; i++) {
	// 	var el = program[i];
	// 	if (el.className.indexOf('film') !== -1) {
	// 		el.innerHTML += '<i class="fa fa-film"></i>';
	// 	} else if (el.className.indexOf('sport') !== -1) {
	// 		el.innerHTML += '<i class="fa fa-futbol-o"></i>';
	// 	}
	// 	else if (el.className.indexOf('serial') !== -1) {
	// 		el.innerHTML += '<i class="fa fa-television"></i>';
	// 	}
	// }
	for (var i = 0; i < $('.program-dscr').length; i++) {
		var el = $('.program-dscr').eq(i);
		if (el.hasClass('film-pr')) {
			el.append(`<i class="fa fa-film"></i>`)
		}
		else if (el.hasClass('sport-pr')) {
			el.append(`<i class="fa fa-futbol-o"></i>`)
		} else if (el.hasClass('serial-pr')) {
			el.append(`<i class="fa fa-television"></i>`)
		}
	}

	$('.channel-list').children('li').on('mouseover', function() {
		var popupDscr = {
			imgPath: 'img/channel-dscr/dscr-popup.jpg',
			header: '"Пусть говорят" с Андреем Малаховым',
			dscr: '"Словом делу не поможешь", но программа "Пусть говорят" эту поговорку опровергает. Настоящие, невыдуманные истории людей задевают больше, чем пафосные рассуждения на общие темы, потому что , вынося на обсуждение частную проблему отдельного человека, отдельной семьи, мы говорим о том, что волнует всех без исключения... '
		};
		var popup = $(`<div class="popup">
			<img src=${popupDscr.imgPath} alt="">
			<div class="dscr-wrapper">
			<h3>${popupDscr.header}</h3>
			<p>${popupDscr.dscr}</p></div></div>`);
		var li = $(this);
		if (li.find('.popup').length === 0) {
			li.append(popup);	
			console.log($(window).height() - popup.offset().top)
			console.log(popup.offset().top)
			if ($(window).height() - popup.offset().top < popup.outerHeight(true)) {
				popup.css({
					top: `-=${popup.offset().top / 2}`
				});
				console.log('top')
			}
			setTimeout((function () {
				popup.fadeTo('fast', 1)
			}), 900);
		}		
	})

	$('.channel-list').children('li').on('mouseleave', function() {
		var li = $(this);
		var popup = li.find('.popup');
		setTimeout(function () {
			popup.remove();
		}, 700)
		

		

		
	})
	// for (var i = 0; i < $('.program-dscr').length; i++) {
	// 	var program = $('.program-dscr')[i];
	// 	var popup = document.createElement('div');
	// 	popup.classList.add('popup');
		// var popupDscr = {
		// 	imgPath: 'img/channel-dscr/dscr-popup.jpg',
		// 	header: '"Пусть говорят" с Андреем Малаховым',
		// 	dscr: '"Словом делу не поможешь", но программа "Пусть говорят" эту поговорку опровергает. Настоящие, невыдуманные истории людей задевают больше, чем пафосные рассуждения на общие темы, потому что , вынося на обсуждение частную проблему отдельного человека, отдельной семьи, мы говорим о том, что волнует всех без исключения... '
		// };
	// 	popup.innerHTML = '<img src="'+ popupDscr.imgPath + '"' + 'alt="">' + '<div class="dscr-wrapper">'+'<h3>' + popupDscr.header + 
	// 	'</h3>' + '<p>' + popupDscr.dscr + '</p>' + '</div>';
	// 	program.onmouseover = function () {
	// 		var li = this;
	// 		setTimeout((function () {
	// 			li.parentElement.appendChild(popup);
	// 		}), 1000);
	// 	}
		
	// }
	

	

});
