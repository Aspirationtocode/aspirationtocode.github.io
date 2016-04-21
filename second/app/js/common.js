$(function() {
	
	
		// открытие дополнительной информации о студенте
		$('.column-student').on('click', '.list-item-student', function(e) {
			if ($('.fa-check-circle').length === 0 && $(e.target).hasClass('small-dscr-student')) {
				$(this).find('.extra-information-student').slideToggle(150)	
			}	
		})
		// открытие дополнительной информации о команде
		$('.column-team').on('click', '.list-item-team', function(e) {
			if (!$(e.target).hasClass('button')) {
				$(this).find('.extra-information-team').slideToggle(150)
			}	
		})

		// кнопка открытия формы студента
		$('.header-information-button-student').on('click', function() {
			if ($('.section-form-team').is(':visible')) {
				$('.section-form-team').slideToggle();
				$('.header-information-button-team').children().toggleClass('fa-plus');
				$('.header-information-button-team').children().toggleClass('fa-minus');
			}
			$('.section-form-student').slideToggle();
			$('.form-student').trigger('reset');
			$(this).children().toggleClass('fa-plus');
			$(this).children().toggleClass('fa-minus');
		})
		// кнопка открытия формы команды
		$('.header-information-button-team').on('click', function() {
			if ($('.section-form-student').is(':visible')) {
				$('.section-form-student').slideToggle();
				$('.header-information-button-student').children().toggleClass('fa-plus');
				$('.header-information-button-student').children().toggleClass('fa-minus');
			}
			$('.section-form-team').slideToggle();
			$('.form-team').trigger('reset');
			$(this).children().toggleClass('fa-plus');
			$(this).children().toggleClass('fa-minus');
		})

		// кнопка отправка формы студента
		$('.form-submit-student').on('click', function() {
			
			var studentInfo = $('.form-student').serializeArray();
			for (var i = 0; i < studentInfo.length; i++) {
				studentInfo[i] = studentInfo[i].value;
				if (studentInfo[i] === '') return;
			}
			var curStudent = new Student(...studentInfo);

			var li = $(`<li class='list-item-student list-item'>
								<div class='main-list-content-student main-list-content'>
									<span class='small-dscr small-dscr-student'>${curStudent.name}, ${curStudent.age} лет <img src="${curStudent.photoURL}" alt=""></span>

									<div class='extra-information extra-information-student'>
										<span class='skills-student'><b>Умения:</b> ${curStudent.skills}</span>
										<span class='status-student status'><b>Статус:</b> Не в команде</span>
										<button class='button give-task-student'>Дать задание</button>
									</div>
								</div>
							</li>`)
			li.data('id', yandexSchool.allStudents.length - 1);			
			li.css({
				opacity: 0
			})
			$('.main-list-student').append(li)
			li.animate({
				opacity: 1
			},{
				duration: 200,
			})
		})
		// кнопка отправка формы команды
		$('.form-submit-team').on('click', function() {
			var teamInfo = $('.form-team').serializeArray();
			for (var i = 0; i < teamInfo.length; i++) {
				teamInfo[i] = teamInfo[i].value;
				if (teamInfo[i] === '') return;
			}
			var currentTeam = new Team(null,...teamInfo);
			var li = $(`<li class='list-item-team list-item'>
								<div class='main-list-content-team main-list-content'>
									<span class='small-dscr small-dscr-team'>${currentTeam.name}<img src="${currentTeam.logoURL}" alt=""></span>
									<div class='extra-information extra-information-team'>
										<span class="slogan"><b>Наш девиз:</b> ${currentTeam.slogan}</span>
										<span class="number-of-students-in-team"><b>Состав команды:</b> <span>${0}</span></span>
										<ul class="line-up-list"></ul>
										<button class='add-student-button button'>Добавить студента в команду</button>
									</div>
								</div>
							</li>`)
			li.data('id', yandexSchool.allTeams.length - 1);
			li.css({
				opacity: 0
			})
			$('.main-list-team').append(li);
			li.animate({
				opacity: 1
			},{
				duration: 200,
			})
		})
		
		// Кнопка добавить студента
		$('.column-team').on('click', '.add-student-button', function(e) {
			if ($('.column-team').find('.fa-check-circle').length <= yandexSchool.allStudents.length && yandexSchool.allStudents.length > 0 && $('.list-item-student').find('.fa-check-circle').length === 0) {
				for (var i = 0; i < $('.list-item-student').length; i++) {
					var currLi = $('.list-item-student').eq(i);
					if (currLi.data('inTeam') !== true) {
						currLi.find('img').before('<i class="fa fa-check-circle"></i>')
					} else if (currLi.find('.in-team').length === 0) {
						currLi.find('img').before('<span class="in-team">Уже в команде</span>')
					}
				}	
				var formButtonStudent = $('.form-submit-student')[0];
				formButtonStudent.disabled = true;
				var headerInformationButtonTeam = $('.header-information-button-team')[0];
				headerInformationButtonTeam.disabled = true;
				$(e.target).after($(`<button class='add-student-complete button'>Ок!</button>`))
				e.target.disabled = true;
				var opacity = {
					opacity: .3
				}
				$('.header-information-button-team').css(opacity)
				$('.form-submit-student').css(opacity)
				$('.column-team').find('.add-student-button').css(opacity)	
			}	
		})

		// Выставление отметок
		$('.column-student').on('click', '.list-item-student', function(e) {
			var icon = $(this).find('.fa');
			if (icon.hasClass('fa-check-circle')) {
				icon.toggleClass('checked')
			} else {
				return;
			}			
		})


		// Кнопка ОК для сформированной команды
		$('.column-team').on('click', '.add-student-complete',  function (e) {
			var checkedLi = $('.list-item-student').find('.checked').closest('.list-item-student');
			var arrOfCheckedLi = [];
			var currentTeam = yandexSchool.allTeams[$(e.target).closest('.list-item-team').data('id')];
			var ul = $(e.target).prev().prev();
			for (var i = 0; i < checkedLi.length; i++) {
				var checkedEl = yandexSchool.allStudents[checkedLi.eq(i).data('id')];
				checkedLi.eq(i).data('inTeam', true)
				checkedLi.eq(i).find('.status-student').text(`Статус: В команде ${currentTeam.name}`)
				arrOfCheckedLi.push(checkedEl)
				var teamListLi = $(`<li class='line-up-list-element'>
												<span class='student-number'>${ul.find('li').length+1}. </span><span class='dscr-student'>${checkedEl.name}, ${checkedEl.age} лет</span>
											</li>`) 
				teamListLi.css({
					opacity: 0
				})
				ul.append(teamListLi);
				teamListLi.animate({
						opacity: 1
					},{
						duration: 200,
				})
			}
			currentTeam.addStudents(...arrOfCheckedLi)
			ul.prev('.number-of-students-in-team').find('span').text(`${currentTeam.lineUp.length}`)
			var formButtonStudent = $('.form-submit-student')[0];
			formButtonStudent.disabled = false;
			var headerInformationButtonTeam = $('.header-information-button-team')[0];
			headerInformationButtonTeam.disabled = false;
			$('.add-student-button').removeAttr('disabled');
			var opacity = {
				opacity: 1
			}
			$('.header-information-button-team').css(opacity)
			$('.form-submit-student').css(opacity)			
			$('.column-team').find('.add-student-button').css(opacity)
			$('.fa-check-circle').fadeOut(400, function() {
				$('.fa-check-circle').remove();
			})
			$('.in-team').remove()
			$(this).remove();
		})

		//кнопка выдачи задания студенту
		$('.column-student').on('click', '.give-task-student', function() {
			var taskForm = $(`<div class='form-wrapper'><form class="task-form-student">						
							<span class='input-dscr'><b>Текст задания:</b></span>
							<textarea rows="7" cols="45" name="text-task-student" required></textarea>
							<input type="submit" value='Ок!' class='form-submit form-submit-student button'>
						</form></div>`)
			if ($(this).parent().find('.form-wrapper').length === 0) {
				$(this).after(taskForm)
			}
		})


		// $('.column-student').on('click', '.form-submit-student', function() {
		// 	var currentTaskText = $(this).parent();
		// 	console.log(currentTaskText)
		// })
		// var teamInfo = $('.form-team').serializeArray();



	



	









































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
