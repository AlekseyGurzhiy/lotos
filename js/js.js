/* Таймер */
function my_timer(){
	deadline_day = new Date( 2015, 04, 30 );            // Задаем конечную дату
	now_day = new Date();
	difference_ms = deadline_day - now_day;
	difference_s = Math.floor( difference_ms / 1000 );  // Разница во времени в секундах
	difference_m = Math.floor( difference_s / 60 );     // Разница во времени в минутах
	difference_h = Math.floor( difference_m / 60 );     // Разница во времени в часах
	difference_d = Math.floor( difference_h / 24 );     // Разница во времени в днях
	
	left_days = difference_d;                           // Осталось дней
	left_days_tens = Math.floor( left_days / 10 );      // Осталось дней (десятки)
	left_days_units = left_days % 10 ;                  // Осталось дней (единицы)
	
	left_hours = difference_h - (left_days * 24);       // Осталось часов
	left_hours_tens = Math.floor( left_hours / 10 );    // Осталось часов (десятки)
	left_hours_units = left_hours % 10;                 // Осталось часов (единицы)
	
	left_minutes = difference_m - ( (left_days * 24 * 60) + (left_hours * 60) );    // Осталось минут 
	left_minutes_tens = Math.floor( left_minutes / 10 );// Осталось минут (десятки)
	left_minutes_units = left_minutes % 10;             // Осталось минут (единицы)
	
	left_seconds = difference_s - ( (left_days * 24 * 60 * 60) + (left_hours * 60 * 60) + (left_minutes * 60) ) ;  // Осталось секунд 
	left_seconds_tens = Math.floor( left_seconds / 10 );// Осталось секунд (десятки)
	left_seconds_units = left_seconds % 10;             // Осталось секунд (единицы)
	
	$(".timer_day-tens").html( left_days_tens );
	$(".timer_day-units").html( left_days_units );
	$(".timer_hours-tens").html( left_hours_tens );
	$(".timer_hours-units").html( left_hours_units );
	$(".timer_minutes-tens").html( left_minutes_tens );
	$(".timer_minutes-units").html( left_minutes_units );
	$(".timer_seconds-tens").html( left_seconds_tens );
	$(".timer_seconds-units").html( left_seconds_units );
}

function animation(){
	scroll = $(window).scrollTop(); // Переменная - высота скролла страницы
		/* Визуализация шапки */
		if (scroll >= 0 && scroll < 200){
			/* Динамика блоков в шапке */
			$(".social-sites").animate({
				"opacity": "1",
				"margin-left": "0",
			}, speed, function(){
				$(".header-logo").animate({
					"opacity": "1",
					"margin-left": "0",
				}, speed, function(){
					$(".phone-number").animate({
						"opacity": "1",
						"margin-left": "0",
					}, speed);
				});
			});
			$(".under-header_title").fadeIn(speed);
		}
		/* Визуализация таймера и формы с обратной связью  */
		if (scroll >= 0 && scroll < 700){
			$(".timer-action").animate({
				"opacity": "1",
				"margin-left": "0",
			}, speed, function(){
				$(".entry-form").animate({
				"opacity": "1",
				"margin-left": "0",
			}, speed);
			});
			$(".romantic-history_title").fadeIn(speed);
		}
		/* Визуализация элементов при обновлении страницы на блоке "Романтическая история Вашей свадьбы" */
		if (scroll >= 300 && scroll <= 1300){
			$(".tour_sri-lanka").animate({"opacity":"1"},speed);
		}
		if (scroll >= 700 && scroll <= 1700){
			$(".tour_greece").animate({"opacity":"1"},speed);
		}
		if (scroll >= 1300 && scroll < 2400){
			$(".tour_czech").animate({"opacity":"1"},speed);
		}
		/* Визуализация элементов при обновлении страницы на блоке "Почему мы" */
		if (scroll >= 2200 && scroll < 3200){
			$(".why-we_number1").animate({"opacity": "1"},speed);
			$(".why-we_more25").animate({"opacity": "1"},speed);
			$(".why-we_persent").animate({"opacity": "1"},speed);
			$(".why-we_country").animate({"opacity": "1"},speed);
			$(".why-we_propose").animate({"opacity": "1"},speed);
			$(".why-we_ceremony").animate({"opacity": "1"},speed);
		}
		/* Визуализация элементов при обновлении страницы на блоке "Как происходит выездная регистрация" */
		if (scroll >= 4000 && scroll < 4700){
			$(".algorithm-step-one").animate({
				"opacity": "1",
				"margin-left": "0px",
			},speed);
		}
		if (scroll >= 4100 && scroll < 4900){
			$(".algorithm-step-two").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		if (scroll >= 4200 && scroll < 5100){
			$(".algorithm-step-three").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		if (scroll >= 4400 && scroll < 5300){
			$(".algorithm-step-four").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		if (scroll >= 4500 && scroll < 5400){
			$(".algorithm-step-five").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		/* Визуализация элементов при обновлении страницы на блоке "Наши молодожены" */
		if (scroll >= 4700 && scroll < 5500){
			$(".our-young_title").animate({"opacity": "1"},speed);
		}
		if (scroll >= 4850 && scroll < 5800){
			$(".our-young_one-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_one-img").animate({"opacity": "1"},speed);
		}
		if (scroll >= 5400 && scroll < 6300){
			$(".our-young_two-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_two-img").animate({"opacity": "1"},speed);
		}
		if (scroll >= 5900 && scroll < 6900){
			$(".our-young_three-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_three-img").animate({"opacity": "1"},speed);
		}
		if (scroll >= 6400 && scroll < 7400){
			$(".our-young_four-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_four-img").animate({"opacity": "1"},speed);
		}
		/* Визуализация элементов при обновлении страницы на блоке "Свадебная церемония на Мальдивах" */
		if (scroll >= 7400 && scroll < 8500){
			$(".about-ceremony").animate({"opacity":"1", "margin-left":"0px"},speed, function(){
				$(".form-ceremony").animate({"opacity":"1", "margin-left":"0px"},speed);
			});
		}
		/* Визуализация элементов при обновлении страницы на блоке "Подвал" */
		if (scroll >= 8200 && scroll < 8500){
			$(".footer_logo").animate({"opacity":"1", "margin-left":"0px"},speed, function(){
				$(".footer_social-sites").animate({"opacity":"1", "margin-left":"224px"},speed, function(){
					$(".footer_phone").animate({"opacity":"1", "margin-left":"205px"},speed);
				});
			});
		}
}


$(document).ready(function(){
	speed = 500; //Скорость отображения элементов
	margin_top_big = ($(window).height() - 354) / 2 ; // Рассчитываем отступ сверху для блока "Заказать звонок"
	margin_top_small = ($(window).height() - 196) / 2 ; // Рассчитываем отступ сверху для блока "Спасибо за заявку"

	/* Начальные значения для появляющихся блоков в шапке */
	$(".header-logo").css({"opacity":"0", "margin-left":"-200px"});
	$(".social-sites").css({"opacity":"0", "margin-left":"-200px"});
	$(".phone-number").css({"opacity":"0", "margin-left":"-200px"});
	$(".entry-form").css({"opacity":"0", "margin-left":"-200px"});
	$(".timer-action").css({"opacity":"0", "margin-left":"-200px"});
	$(".under-header_title").hide();
	$(".romantic-history_title").hide();
	$(".tour_sri-lanka").css({"opacity":"0"});
	$(".tour_greece").css({"opacity":"0"});
	$(".tour_czech").css({"opacity":"0"});
	/* Начальние значения для элементов в блоке "Почему мы" */
	$(".why-we_number1").css({"opacity":"0"});
	$(".why-we_more25").css({"opacity":"0"});
	$(".why-we_persent").css({"opacity":"0"});
	$(".why-we_country").css({"opacity":"0"});
	$(".why-we_propose").css({"opacity":"0"});
	$(".why-we_ceremony").css({"opacity":"0"});
	$(".we-can_more-info").css({"opacity":"0"});
	/* Начальние значения для элементов в блоке "Что мы можем" */
	$(".we-can_preparation").css({"opacity":"0", "margin-left":"-200px"});
	$(".we-can_good-hotels").css({"opacity":"0", "margin-left":"-200px"});
	$(".we-can_wedding").css({"opacity":"0", "margin-left":"-200px"});
	$(".we-can_coronation").css({"opacity":"0", "margin-left":"-200px"});
	$(".we-can_specialists").css({"opacity":"0", "margin-left":"-200px"});
	$(".we-can_convoy").css({"opacity":"0", "margin-left":"-200px"});
	$(".we-can_present").css({"opacity":"0", "margin-left":"-200px"});
	$(".we-can_script").css({"opacity":"0", "margin-left":"-200px"});
	/* Начальние значения для элементов в блоке "Как происходит регистрация" */
	$(".algorithm-step-one").css({"opacity":"0", "margin-left":"-200px"});
	$(".algorithm-step-two").css({"opacity":"0", "margin-left":"-200px"});
	$(".algorithm-step-three").css({"opacity":"0", "margin-left":"-200px"});
	$(".algorithm-step-four").css({"opacity":"0", "margin-left":"-200px"});
	$(".algorithm-step-five").css({"opacity":"0", "margin-left":"-200px"});
	/* Начальние значения для элементов в блоке "Наши молодожены" */
	$(".our-young_title").css({"opacity":"0"});
	$(".our-young_one-img").css({"opacity":"0"});
	$(".our-young_two-img").css({"opacity":"0"});
	$(".our-young_three-img").css({"opacity":"0"});
	$(".our-young_four-img").css({"opacity":"0"});
	$(".our-young_one-text").css({"opacity":"0", "margin-left":"-200px"});
	$(".our-young_two-text").css({"opacity":"0", "margin-left":"-200px"});
	$(".our-young_three-text").css({"opacity":"0", "margin-left":"-200px"});
	$(".our-young_four-text").css({"opacity":"0", "margin-left":"-200px"});
	/* Начальние значения для блока с информацией о скидках и таймером */
	$(".about-ceremony").css({"opacity":"0", "margin-left":"-200px"});
	$(".form-ceremony").css({"opacity":"0", "margin-left":"-200px"});
	/* Начальние значения для подвала */
	$(".footer_logo").css({"opacity":"0", "margin-left":"-200px"});
	$(".footer_social-sites").css({"opacity":"0", "margin-left":"24px"});
	$(".footer_phone").css({"opacity":"0", "margin-left":"0px"});
	
	setTimeout(animation,"1000");
	
	/* События при скроле */
	$(document).scroll(function(){
		scroll = $(window).scrollTop();
		speed = 500;
		
		/* Динамика блоков в шапке при скроле */
		if (scroll >= 0 && scroll < 200){
			$(".social-sites").animate({
				"opacity": "1",
				"margin-left": "0",
			}, speed, function(){
				$(".header-logo").animate({
					"opacity": "1",
					"margin-left": "0",
				}, speed, function(){
					$(".phone-number").animate({
						"opacity": "1",
						"margin-left": "0",
					}, speed);
				});
			});
			$(".under-header_title").fadeIn(900);
		}
		/* Визуализация блоков с таймером и формой обратной связи при скроле */
		if (scroll >= 0 && scroll < 700){
			$(".timer-action").animate({
				"opacity": "1",
				"margin-left": "0",
			}, speed, function(){
				$(".entry-form").animate({
				"opacity": "1",
				"margin-left": "0",
			}, speed);
			});
			$(".romantic-history_title").fadeIn(800);
		}
		/* Визуализация элементов при скроле страницы на блоке "Романтическая история Вашей свадьбы" */
		if (scroll >= 300 && scroll < 1300){
			$(".tour_sri-lanka").animate({"opacity":"1"},speed);
		}
		if (scroll >= 700 && scroll < 1600){
			$(".tour_greece").animate({"opacity":"1"},speed);
		}
		if (scroll >= 1300 && scroll < 2400){
			$(".tour_czech").animate({"opacity":"1"},speed);
		}
		/* Визуализация элементов при скроле страницы на блоке "Почему мы"*/
		if (scroll >= 2200 && scroll < 3200){
			$(".why-we_number1").animate({"opacity": "1"},speed);
			$(".why-we_more25").animate({"opacity": "1"},speed);
			$(".why-we_persent").animate({"opacity": "1"},speed);
			$(".why-we_country").animate({"opacity": "1"},speed);
			$(".why-we_propose").animate({"opacity": "1"},speed);
			$(".why-we_ceremony").animate({"opacity": "1"},speed);
		}
		/* Визуализация элементов при скроле страницы на блоке "Что мы можем"*/
		if (scroll >= 2800 && scroll < 4000){
			$(".we-can_preparation").animate({
				"opacity": "1",
				"margin-left": "0",
			}, speed, function(){
				$(".we-can_good-hotels").animate({
					"opacity": "1",
					"margin-left": "0",
				}, speed, function(){
					$(".we-can_wedding").animate({
						"opacity": "1",
						"margin-left": "0",
					},speed, function(){
						$(".we-can_coronation").animate({
						"opacity": "1",
						"margin-left": "0",
						},speed, function(){
							$(".we-can_specialists").animate({
								"opacity": "1",
								"margin-left": "0",
							},speed, function(){
								$(".we-can_convoy").animate({
									"opacity": "1",
									"margin-left": "0",
								},speed, function(){
									$(".we-can_present").animate({
										"opacity": "1",
										"margin-left": "0",
									},speed, function(){
										$(".we-can_script").animate({
											"opacity": "1",
											"margin-left": "0",
										},speed, function(){
											$(".we-can_more-info").animate({"opacity": "1"},speed);
										});
									});	
								});
							});
						});
					});
				});
			});
		}
		/* Визуализация элементов при скроле страницы на блоке "Как происходит выездная регитрация" */
		if (scroll >= 4000 && scroll < 4700){
			$(".algorithm-step-one").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		if (scroll >= 4100 && scroll < 4900){
			$(".algorithm-step-two").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		if (scroll >= 4200 && scroll < 5100){
			$(".algorithm-step-three").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		if (scroll >= 4400 && scroll < 5300){
			$(".algorithm-step-four").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		if (scroll >= 4500 && scroll < 5400){
			$(".algorithm-step-five").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
		}
		/* Визуализация элементов при скроле страницы на блоке "Наши молодожены" */
		if (scroll >= 4700 && scroll < 5500){
			$(".our-young_title").animate({"opacity": "1"},speed);
		}
		if (scroll >= 4850 && scroll < 5800){
			$(".our-young_one-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_one-img").animate({"opacity": "1"},speed);
		}
		if (scroll >= 5400 && scroll < 6300){
			$(".our-young_two-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_two-img").animate({"opacity": "1"},speed);
		}
		if (scroll >= 5900 && scroll < 6900){
			$(".our-young_three-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_three-img").animate({"opacity": "1"},speed);
		}
		if (scroll >= 6400 && scroll < 7400){
			$(".our-young_four-text").animate({
				"opacity": "1",
				"margin-left": "0",
			},speed);
			$(".our-young_four-img").animate({"opacity": "1"},speed);
		}
		
		/* Визуализация элементов при скроле страницы на блоке "Свадебная церемония на Мальдивах" */
		if (scroll >= 7400 && scroll < 8500){
			$(".about-ceremony").animate({"opacity":"1", "margin-left":"0px"},500, function(){
				$(".form-ceremony").animate({"opacity":"1", "margin-left":"0px"},500);
			});
		}
		
		/* Визуализация элементов при скроле страницы на блоке "Подвал" */
		if (scroll >= 8200 && scroll < 8500){
			$(".footer_logo").animate({"opacity":"1", "margin-left":"0px"},speed, function(){
				$(".footer_social-sites").animate({"opacity":"1", "margin-left":"224px"},speed, function(){
					$(".footer_phone").animate({"opacity":"1", "margin-left":"205px"},speed);
				});
			});
		}
	});
	
	/* Подключаем валидацию формы */
	$("#entry-form_form").validate();
	$("#form-ceremony_form").validate();
	$("#form-application").validate();
	/* Правило: поля обязательны */
	$.validator.addClassRules("entry-form_input",{
		required: true
	});
	/* Правило: валидация формы ввода почты. Вводим слово@слово.домен */
	$.validator.addClassRules("entry-form_input-mail",{
		email: true
	});
	/* Правило: валидация формы ввода телефона. Вводим только цифры */
	$.validator.addClassRules("entry-form_input-phone",{
		digits: true
	});
	$.validator.addClassRules("form-ceremony_input",{
		required: true
	});
	/* Правило: валидация формы ввода почты. Вводим слово@слово.домен */
	$.validator.addClassRules("form-ceremony_input-mail",{
		email: true
	});
	/* Правило: валидация формы ввода телефона. Вводим только цифры */
	$.validator.addClassRules("form-ceremony_input-phone",{
		digits: true
	});
	$.validator.addClassRules("form-ceremony_input",{
		required: true
	});
	/* Правила для формы обратный звонок */
	/* Правило: валидация формы ввода телефона. Вводим только цифры */
	$.validator.addClassRules("application_form-phone",{
		digits: true,
		required: true
	});
	$.validator.addClassRules("application_form-name",{
		required: true
	});
	/* Сообщения в случае ошибок пустые */
	$.validator.messages.required = "";
	$.validator.messages.email = "";
	$.validator.messages.digits = "";
	
	/* Подключаем плэйсхолдер для ие */
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	my_timer(); // Вызываем функцию таймера для первой секунды, для начальных расчетов
	setInterval( my_timer, 1000 ); // Ждем секунду, вызываем функцию таймера, и далее вызываем её через каждую секунду
		
		/* Настройка для карты */
		google.maps.event.addDomListener(window, 'load', init);
			var map;
			function init() {
				var mapOptions = {
					center: new google.maps.LatLng(50.599148,36.595572),
					zoom: 11,
					zoomControl: true,
					zoomControlOptions: {
						style: google.maps.ZoomControlStyle.DEFAULT,
					},
					disableDoubleClickZoom: false,
					mapTypeControl: false,
					scaleControl: true,
					scrollwheel: false,
					panControl: true,
					streetViewControl: true,
					draggable : true,
					overviewMapControl: true,
					overviewMapControlOptions: {
						opened: false,
					},
					mapTypeId: google.maps.MapTypeId.ROADMAP,
				}
				var mapElement = document.getElementById('map');
				var map = new google.maps.Map(mapElement, mapOptions);
				var locations = [

				];
				for (i = 0; i < locations.length; i++) {
					if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
					if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
					if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
				   if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
				   if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
					marker = new google.maps.Marker({
						icon: markericon,
						position: new google.maps.LatLng(locations[i][5], locations[i][6]),
						map: map,
						title: locations[i][0],
						desc: description,
						tel: telephone,
						email: email,
						web: web
					});
		link = '';     }
		}
		$(".entry-form_input-name").focus(function(){
			$(this).attr("placeholder","");
		});
		$(".entry-form_input-name").blur(function(){
			$(this).attr("placeholder","Имя:");
		});
		$(".entry-form_input-phone").focus(function(){
			$(this).attr("placeholder","");
		});
		$(".entry-form_input-phone").blur(function(){
			$(this).attr("placeholder","Телефон:");
		});
		$(".entry-form_input-mail").focus(function(){
			$(this).attr("placeholder","");
		});
		$(".entry-form_input-mail").blur(function(){
			$(this).attr("placeholder","E-mail:");
		});
		
		$(".phone-number_button").click(function(){
			scroll_popap = $(window).scrollTop()+margin_top_big;
			$(".darkness").show();
			$(".popap-application").css({"top":scroll_popap});
			$(".popap-application").show();
		});
		
		$(".footer_button-submit, .romantic-tour_more-info, .we-can_more-info, .ask-the-meneger").click(function(){
			scroll_popap = $(window).scrollTop()+margin_top_big;
			scroll_popap_thanks = $(window).scrollTop()+margin_top_small;
			$(".darkness").show();
			$(".popap-application").css({"top":scroll_popap});
			$(".popap-application").show();
			return false;
		});
		
		$(".popap-application_close, .darkness, .popap-thanks_close").click(function(){
			$(".darkness").hide();
			$(".popap-application").hide();
			$(".popap-thanks").hide();
		});
		/* Сабмит на форме "Заказать звонок" */
		$("#form-application").submit(function(){
			if( $("#popap-application_form-name").hasClass("error") || $("#popap-application_form-phone").hasClass("error") ){
				return false;
			} else {
				scroll_popap = $(window).scrollTop()+margin_top_small;
				$(".popap-thanks").css({"top":scroll_popap});
				$(".popap-application").hide();
				$(".popap-thanks").show();
				return false;
			}
		});
		/* Сабмит на форме "Оставьте заявку прямо сейчас" */
		$("#entry-form_form").submit(function(){
			if( $(".entry-form_input-name").hasClass("error") || $(".entry-form_input-phone").hasClass("error") || $(".entry-form_input-mail").hasClass("error") ){
				return false;
			} else {
				scroll_popap = $(window).scrollTop()+margin_top_small;
				$(".darkness").show();
				$(".popap-thanks").css({"top":scroll_popap});	
				$(".popap-thanks").show();
				return false;
			}
		});
		/* Сабмит по форме "Свадебная церемония на мальдивах" */
		$("#form-ceremony_form").submit(function(){
			if( $("#form-ceremony_name").hasClass("error") || $("#form-ceremony_phone").hasClass("error") || $("#form-ceremony_mail").hasClass("error") ){
				return false;
			} else {
				scroll_popap = $(window).scrollTop()+margin_top_small;
				$(".darkness").show();
				$(".popap-thanks").css({"top":scroll_popap});
				$(".popap-thanks").show();
				return false;
			}
		});
		/* Делаем валидный target="_blank" */
		$(".social-sites_element a").click(function(){
			window.open(this.href); return false;
		});
});