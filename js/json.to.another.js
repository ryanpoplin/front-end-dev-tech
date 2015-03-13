(function () {

	'use strict';

	// XML...
	// <books>
 	//  <book author="Jimbo Jones" title="Bar Baz">
    //   <summary>Foo</summary>
    //  </book>
    //  <book title="Don't Care" author="Fake Person">
    //   <summary>Dummy Data</summary>
    //  </book>
	// </books>

	// JSON...
	// {
 	// 	 "books": [
 	//     { "author": "Jimbo Jones", "title": "Bar Baz", "summary": "Foo" },
 	//     { "author": "Fake Person", "title": "Don't Care", "summary": "Dummy Data" },
 	// 	 ]
	// }

	$(function () {
		
		'use strict';

		var url = 'http://localhost:3500/',
			contactsListing = '';
		
		$.get(url, function (data) {

				console.log(data);

				var i;
				for (i = 0; i < data.length; i += 1) {

					contactsListing += "<div>" 
									   		+ data[i].name 
									   		+ ' ' 
									   		+ data[i].email
									  	+ "</div>";

				}

				$('#contacts-listing-display').html(contactsListing);

		});	

		$('#contact-info-btn').click(function () {

			// add form validation...
			var name = $('#name-field').val(),
				email = $('#email-field').val(),
				data = {name: name, email: email},
				json = JSON.stringify(data);

			$.ajax({

  				type: "POST",
  				url: url,
  				data: json,
  				contentType: "application/json; charset=utf-8",
  				dataType: "json",
  				success: function () {

  					$.get(url, function (data) {

  						contactsListing = '';

						var i;
						for (i = 0; i < data.length; i += 1) {

							contactsListing += "<div>" 
									   			+ data[i].name 
									   			+ ' ' 
									   			+ data[i].email
									  	 	+ "</div>";

						}

						$('#contacts-listing-display').html(contactsListing);

					});
  				}

			});

		});

	});

}());