'use strict';

$('.expand-filter-dropdown-menu').on('click', function () {
	$('.filter-dropdown').toggle();
	$(this).toggleClass('listed');
});

$('.display-block').on('click', function () {
	if (!$(this).hasClass('checked')) {
		$('.developer-list-item').toggleClass('list-view');
		$('.display-block').toggleClass('checked');
		$('.display-list').toggleClass('checked');
	}
});
$('.display-list').on('click', function () {
	if (!$(this).hasClass('checked')) {
		$('.developer-list-item').toggleClass('list-view');
		$('.display-block').toggleClass('checked');
		$('.display-list').toggleClass('checked');
	}
});

$('.experience-sort').on('click', function () {
	if (!$(this).hasClass('checked')) {
		$('.experience-sort').toggleClass('checked');
		$('.surname-sort').toggleClass('checked');
	}
});

$('.surname-sort').on('click', function () {
	if (!$(this).hasClass('checked')) {
		$('.experience-sort').toggleClass('checked');
		$('.surname-sort').toggleClass('checked');
	}
});

$('.show-everybody').on('click', function () {
	$(".developer-list-item").each(function (i, item) {
		$(item).show(200);
	});
	$('.filter-dropdown-list-item').removeClass('checked');
	$('.show-everybody').addClass('checked');
	$('.filter-dropdown').toggle();
	$('.expand-filter-dropdown-menu').toggleClass('listed');
	$('.expand-filter-dropdown-menu').find('span').text('Показывать всех');
});