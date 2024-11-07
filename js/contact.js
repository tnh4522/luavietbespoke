$(document).ready(function() {

	// $('#form-contact').on('change', function (e) {
	// 	var contact_select = $('#form-contact select[name="topic"]').val();

	// 	if(contact_select == 'product'){
	// 		$('#form-contact [name="message"]').attr('placeholder', 'Quý Khách vui lòng cho biết nhu cầu cần tư vấn...');
	// 		$('#form-contact [name="is_customer"]').prop('checked', false).closest('.form-group-aaa').hide();
	// 		$('#form-contact [name$="_policy"]').closest('.form-group-aaa').hide();
	// 		$('#form-contact [name$="_policy"]').prop('disabled', true);
	// 	}else if(contact_select == 'complain'){
	// 		$('#form-contact [name="message"]').attr('placeholder', 'Nội dung khiếu nạì...');
	// 		$('#form-contact [name="is_customer"]').closest('.form-group-aaa').show();
	// 		$('#form-contact [name$="_policy"]').closest('.form-group-aaa').show();
	// 		$('#form-contact [name$="_policy"]').prop('disabled', false);

	// 		if ($('#check_is_customer').is(":checked")) {
	// 			$('#form-contact [name$="_policy"]').closest('.form-group-aaa').hide();
	// 			$('#form-contact [name$="_policy"]').prop('disabled', true);
	// 			$('#check_is_customer').val(0).attr('value', 0);
	// 		} else {
	// 			$('#form-contact [name$="_policy"]').closest('.form-group-aaa').show();
	// 			$('#form-contact [name$="_policy"]').prop('disabled', false);
	// 			$('#check_is_customer').val(1).attr('value', 1);
	// 		}
	// 	}else {
	// 		$('#form-contact [name="message"]').attr('placeholder', 'Nội dung...');
	// 		$('#form-contact [name="is_customer"]').prop('checked', false).closest('.form-group-aaa').hide();
	// 		$('#form-contact [name$="_policy"]').closest('.form-group-aaa').hide();
	// 		$('#form-contact [name$="_policy"]').prop('disabled', true);
	// 	}
	// });

    $("#form-contact").validate({
		rules: {
			// topic: { required: true },
			name: { required: true },
			// name_policy: { required: true },
			// number_policy: { required: true },
			email: { required: true, email: true },
			// email_policy: { required: true, email: true },
			// phone: { required: true, phonenu: true },
			// phone_policy: { required: true, phonenu: true },
            message: { required: true }
		},
		messages: {

			name: {
				required: "Hãy nhập tên của bạn"
			},



			email: {
				required: "Hãy nhập email của bạn",
				email: "Email không hợp lệ"
			},
			// phone: {
			// 	required: "Hãy nhập số điện thoại của bạn",
			// 	phonenu: "Số điện thoại phải gồm 10"
			// },

            message: {
				required: "Hãy nhập nội dung của bạn"
			}
		},
		submitHandler: function(form) {
			var form_data = $(form).serialize();
			$.ajax({
				url: "index.php?route=common/home/lienhe/saveContact",
				method: "POST",
				data: form_data,
				dataType: "json",
				success: function(data) {
					if (data["result"] == "success"){
						showCommonPopup("Cảm ơn bạn đã liên hệ với chúng tôi", 1);
						$(form).find("input, textarea").each(function() {
							$(this).val('');
						});
					}
					// $("#loading-view").hide();
				},
				error: function(xhr, ajaxOptions, thrownError) {
					console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
				}				
			});
			// return false;
		}
	});
});