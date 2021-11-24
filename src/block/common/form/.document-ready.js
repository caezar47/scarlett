// подключение плагина validationEngine
var form_panel = $("[data-form-validation]");
var search = $(".faq__search-input");
var search_reset = $('.faq__search-btn.is--reset');
form_panel.validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
}); 
// маска для поля ввода телефона
var phone = $("input[type='tel']");
phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});

//Все формы 
var file = $('.form__file-input');
file.on('change', function(e) {
    $(this).siblings('.form__file-name').html('<p><span class="is--name">'+$(this).val().replace(/.*(\/|\\)/, '')+'</span><span class="form__file-remove">Заменить</span></p>');
});

search.keyup(function(){
	var $this = $(this),
	val = $this.val();	  
	if(val.length >= 1){
		search_reset.addClass('is--visible');
	}else {
		search_reset.removeClass('is--visible');
	}
});
search_reset.on("click",function(){
  $(this).removeClass('is--visible')
});
/*
var form_input = $(".form__control");
var form_submit = $("[data-form-submit]");

form_input.on('focus', function(e) {
	$(this).addClass('is--focus');
});
form_submit.on('click', function(e) {
	//e.preventDefault();
	var wrap = $(this).closest(".form__wrap"),
		controls = wrap.find("input,select"),
		isValid = true;

	$(".form__item").removeClass("is--error");
	for(var i=0; i<controls.length; i++){
		if (!controls[i].validity.valid){
			isValid = false;
			$(controls[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if (isValid){
		$(this).closest('.form__panel').find('.form__result').addClass('is--visible');
		$(this).closest('.form__panel').find('.form__wrap').addClass('is--hidden');
	}
	//return false;
});
*/