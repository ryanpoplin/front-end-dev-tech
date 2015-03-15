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
		
		// cheap cache, just remember what the idea is, and session && local storing is...
		// possible...
		// 1.
		var cache = [];

		$.get(url, function (data) {

				console.log(data);

				var i;
				for (i = 0; i < data.length; i += 1) {

					// 2.
					cache[i] = {
						name: data[i].name,
						email: data[i].email
					};

					contactsListing += "<div>" 
									   		+ data[i].name 
									   		+ ' ' 
									   		+ data[i].email
									  	+ "</div>";

				}

				console.log('Here\'s some cached shit: ' + cache);
				console.log('Cache is below...');
				console.log(cache);
				$('#contacts-listing-display').html(contactsListing);

		});	

		$('#contact-info-btn').click(function () {

			// add form validation...

			// check if these forms are empty!

			var name = $('#name-field').val(),
				email = $('#email-field').val();

			if (name === '' && email === '') {
				console.log('Forms are fucking empty...');
			} else {

			var	data = {name: name, email: email},
				json = JSON.stringify(data);

			// console.log(JSON.parse(json));

			// could be more complex with RegEx, more prim. checks, etc...
			if (cache.length > 0) {
  				console.log('cache it...');
  				cache[cache.length] = {
					name: name,
					email: email
				};
  			}

			$.ajax({

  				type: "POST",
  				url: url,
  				data: json,
  				contentType: "application/json; charset=utf-8",
  				dataType: "json",
  				success: function () {
		
					contactsListing = '';

					var i;
					for (i = 0; i < cache.length; i += 1) {
		
							contactsListing += "<div>" 
											   		+ cache[i].name 
											   		+ ' ' 
											   		+ cache[i].email
											  	+ "</div>";
		
					}
		
					$('#contacts-listing-display').html(contactsListing);

  				}

			});

		}

	});
		
	});

}());