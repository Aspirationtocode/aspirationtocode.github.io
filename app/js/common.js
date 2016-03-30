$(function() {

	var ulOfDates = $('.lent-ul-first')[0];
	var arrOfDateLi = [];
	var list = $(".lent")[0];
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
	
	list.appendChild(ulOfDates);
	for (var i = 0; i < 7; i++) {
		var li = arrOfDateLi[i];
		if (li.indexOf('Сегодня') !== -1) {
			ulOfDates.innerHTML += '<li class="active"><a href="#">' + li + '</a></li>';

		} else {
			ulOfDates.innerHTML += '<li><a href="#">' + li + '</a></li>';
		}
	}
	
	var selectParams = $('.select-params')[0];
	selectParams.onclick = function(e) {
		if (e.target.classList.contains('fa')) {
			e.target.classList.toggle('opacitied')
			if (e.target.classList.contains('film-check')) {
				for (var i = 0; i < $('.film-pr').length; i++) {
					var el = $('.film-pr')[i];
					el.parentElement.classList.toggle('h-light-film');
				}
			}
			if (e.target.classList.contains('serial-check')) {
				for (var i = 0; i < $('.serial-pr').length; i++) {
					var el = $('.serial-pr')[i];
					el.parentElement.classList.toggle('h-light-serial');
				}
			}
			if (e.target.classList.contains('sport-check')) {
				for (var i = 0; i < $('.sport-pr').length; i++) {
					var el = $('.sport-pr')[i];
					el.parentElement.classList.toggle('h-light-sport');
				}
			}
		}
	}
	

	// date moment.js

	// var films = $('.film-pr');
	// for (var i = 0; i < films.length; i++) {
	// 	var el = films[i];
	// 	el.innerHTML += '<i class="fa fa-film"></i>';
	// }
	var program = $('.program-dscr');
	for (var i = 0; i < program.length; i++) {
		var el = program[i];
		if (el.className.indexOf('film') !== -1) {
			el.innerHTML += '<i class="fa fa-film"></i>';
		} else if (el.className.indexOf('sport') !== -1) {
			el.innerHTML += '<i class="fa fa-futbol-o"></i>';
		}
		else if (el.className.indexOf('serial') !== -1) {
			el.innerHTML += '<i class="fa fa-television"></i>';
		}
	}

	for (var i = 0; i < $('.program-dscr').length; i++) {
		var program = $('.program-dscr')[i];
		var popup = document.createElement('div');
		popup.classList.add('popup');
		var popupDscr = {
			imgPath: 'img/channel-dscr/dscr-popup.jpg',
			header: '"Пусть говорят" с Андреем Малаховым',
			dscr: '"Словом делу не поможешь", но программа "Пусть говорят" эту поговорку опровергает. Настоящие, невыдуманные истории людей задевают больше, чем пафосные рассуждения на общие темы, потому что , вынося на обсуждение частную проблему отдельного человека, отдельной семьи, мы говорим о том, что волнует всех без исключения... '
		};
		popup.innerHTML = '<img src="'+ popupDscr.imgPath + '"' + 'alt="">' + '<div class="dscr-wrapper">'+'<h3>' + popupDscr.header + 
		'</h3>' + '<p>' + popupDscr.dscr + '</p>' + '</div>';
		program.onmouseover = function () {
			var li = this;
			setTimeout((function () {
				li.parentElement.appendChild(popup);
			}), 1000);
		}
		
	}
	
	
	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
