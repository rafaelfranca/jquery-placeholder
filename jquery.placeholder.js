jQuery.fn.extend({
	placeholder: function (text) {
		if ($(this).val() == '') {
			$(this).val(text).css('color', '#aaa')
			.focus(function () {
				if($(this).val() == text){
					$(this).css('color','').val('');
				}
			})
			.blur(function () {
				if ($(this).val() == ''){
					$(this).val(text).css('color','#aaa');
				}
			});

			return this;
		}
	}
});

