'use strict';

var corsString = 'http://146.185.134.219/';
var roles = {
	frontend: {
		button: $('.show-frontend'),
		conditions: ['js-разработчик', 'разработчик интерфейсов', 'html-верстальщик'],
		text: 'Фронтенд'
	},
	backend: {
		button: $('.show-backend'),
		conditions: ['php-разработчик'],
		text: 'Бэкенд'
	},
	designers: {
		button: $('.show-designers'),
		conditions: ['дизайнер'],
		text: 'Дизайнеры'
	},
	developers: {
		button: $('.show-only-developers'),
		conditions: ['разработчик'],
		text: 'Только разработчики'
	},
	android: {
		button: $('.show-android'),
		conditions: ['android'],
		text: 'Android'
	},
	ios: {
		button: $('.show-ios'),
		conditions: ['ios'],
		text: 'Ios'
	}
};

function filter(developerRole) {
	function stringInArray(string, arr) {
		for (var i = 0; i < arr.length; i++) {
			if (string.includes(arr[i])) {
				return false;
			}
		}
		return true;
	}

	developerRole.button.on('click', function () {
		$(".developer-list-item").each(function (i, item) {
			var role = $(item).find('.developer-role').text().toLowerCase();
			var condition = stringInArray(role, developerRole.conditions);
			if (condition) {
				$(item).hide(200);
			} else {
				$(item).show(200);
			}
		});
		$('.filter-dropdown-list-item').removeClass('checked');
		developerRole.button.addClass('checked');
		$('.filter-dropdown').toggle();
		$('.expand-filter-dropdown-menu').toggleClass('listed');
		$('.expand-filter-dropdown-menu').find('span').text(developerRole.text);
	});
}

function getData() {
	var url = 'http://www.obed.ru/static/users.json';
	$.getJSON(corsString + 'http://www.obed.ru/static/users.json', function (data) {
		setData(data);
	});
}

function monthsToYearsAndMonths(months) {
	var numberOfYears = 0,
	    numberOfMonth = 0;
	if (months < 12) {
		return months + ' месяца';
	} else {
		numberOfYears = Math.floor(months / 12);
		numberOfMonth = months % 12;
		if (numberOfMonth === 0) {
			return numberOfYears + ' год';
		} else {
			return numberOfYears + ' год и ' + numberOfMonth + ' месяца';
		}
	}
}

function setData(data) {
	for (var i = 0, length = data.users.length; i < length; i++) {
		var user = data.users[i],
		    fname = user.fname,
		    lname = user.lname,
		    age = user.age,
		    role = user.role,
		    experience = monthsToYearsAndMonths(user.experience),
		    experienceHidden = user.experience;
		var listItem = $('<li class="developer-list-item"> <div class="developer-first-descr"> <div class="developer-name-and-position"> <div class="developer-name">' + fname + ' ' + lname + '</div> <div class="developer-role">' + role + '</div> </div> <div class="developer-photo"></div> </div> <div class="developer-second-descr"> <span class="developer-age">' + age + ' года</span> <i aria-hidden="true" class="fa fa-circle"></i> <span class="developer-experience-hidden">' + experienceHidden + '</span> <span class="developer-experience">' + experience + '</span></div> </li>');
		$('.developer-list').append(listItem);
	}
	$('.developers-quantity').text(data.users.length + ' человек');
	$('.top-line-header').text('' + data.label);
	$('.developer-first-descr').equalHeights();

	var options = {
		valueNames: ['developer-name', 'developer-experience-hidden']
	};

	var userList = new List('developers', options);
}