$(document).ready(function() {
	$.get({
		url: "rest/users/getLogged",
		contentType: "application/json",
		success: function(user) {

			if (user.role == "menadzer") {
				let tr = $('<tr></tr>');
				let tdId = $('<td>' + user.restaurant.id + '</td>');
				let tdName = $('<td>' + user.restaurant.name + '</td>');
				let tdTip = $('<td>' + user.restaurant.type + '</td>');
				let tdStatus = $('<td>' + user.restaurant.status + '</td>');
				let tdArtikli = $('<td>' + user.restaurant.items + '</td>');
				let tdDuzina = $('<td>' + user.restaurant.location.longitude + '</td>');
				let tdSirina = $('<td>' + user.restaurant.location.latitude + '</td>');
				let tdAdresa = $('<td>' + user.restaurant.location.street + " " + user.restaurant.location.streetNumber + '</td>');
				let tdGrad = $('<td>' + user.restaurant.location.city + '</td>');
				let tdZipCode = $('<td>' + user.restaurant.location.zipCode + '</td>');
				let tdLogo = $('<td>' + user.restaurant.logo + '</td>');
				let tdMenadzer = $('<td>' + user.restaurant.manager + '</td>');
				tr.append(tdId).append(tdName).append(tdTip).append(tdStatus)
					.append(tdArtikli).append(tdDuzina).append(tdSirina).append(tdAdresa).
					append(tdGrad).append(tdZipCode).append(tdLogo).append(tdMenadzer);
				$('#tabela tbody').append(tr);
			}

			$.get({
				url: "rest/restaurants/allRest",
				contentType: "application/json",
				success: function(rest) {
					for (let r in rest) {

						if (rest[r].manager == user.username) {


							/*let tr = $('<tr></tr>');
							let tdId = $('<td>' + rest[r].id + '</td>');
							let tdName = $('<td>' + rest[r].name + '</td>');
							let tdTip = $('<td>' + rest[r].type + '</td>');
							let tdStatus = $('<td>' + rest[r].status + '</td>');
							let tdArtikli = $('<td>' + rest[r].items + '</td>');
							let tdDuzina = $('<td>' + rest[r].location.longitude + '</td>');
							let tdSirina = $('<td>' + rest[r].location.latitude + '</td>');
							let tdAdresa = $('<td>' + rest[r].location.street + " " + rest[r].location.streetNumber + '</td>');
							let tdGrad = $('<td>' + rest[r].location.city + '</td>');
							let tdZipCode = $('<td>' + rest[r].location.zipCode + '</td>');
							let tdLogo = $('<td>' + rest[r].logo + '</td>');
							let tdMenadzer = $('<td>' + rest[r].manager + '</td>');
							tr.append(tdId).append(tdName).append(tdTip).append(tdStatus)
								.append(tdArtikli).append(tdDuzina).append(tdSirina).append(tdAdresa).
								append(tdGrad).append(tdZipCode).append(tdLogo).append(tdMenadzer);
							$('#tabela tbody').append(tr);*/

							$.get({
								url: "rest/orders/allOrders/",
								contentType: "application/json",
								success: function(order) {
									let orderKupac;
									let itemName;
									for (let o in order) {


										if (rest[r].id == order[o].restaurantId) {

											orderKupac = order[o].kupacId
											let tr = $('<tr></tr>');
											let tdId = $('<td>' + order[o].id + '</td>');
											let tdArtikli = $('<td>' + order[o].orderItemId + '</td>');
											let tdRestoran = $('<td>' + order[o].restaurantId + '</td>');
											let tdDatum = $('<td>' + order[o].datum + '</td>');
											let tdCena = $('<td>' + order[o].price + '</td>');
											let tdKupac = $('<td>' + order[o].kupacId + '</td>');
											let tdStatus = $('<td>' + order[o].status + '</td>');

											tr.append(tdId).append(tdArtikli).append(tdRestoran).
												append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus);
											$('#tabela_porudzbina tbody').append(tr);




										}
									}
									$.get({
										url: "rest/users/oneUser/" + orderKupac,
										contentType: "application/json",
										success: function(kupac) {


											let tr = $('<tr></tr>');
											let tdId = $('<td>' + kupac.id + '</td>');
											let tdUsername = $('<td>' + kupac.username + '</td>');
											let tdPassword = $('<td>' + kupac.password + '</td>');
											let tdFName = $('<td>' + kupac.firstName + '</td>');
											let tdLName = $('<td>' + kupac.lastName + '</td>');
											let tdGender = $('<td>' + kupac.gender + '</td>');
											let tdDate = $('<td>' + kupac.dateOfBirth + '</td>');
											let tdRole = $('<td>' + kupac.role + '</td>');
											tr.append(tdId).append(tdUsername).append(tdPassword).append(tdFName).
												append(tdLName).append(tdGender).append(tdDate).append(tdRole);
											$('#tabela_kupac tbody').append(tr);
										}
									})
								}
							})
						}
					}
				}
			})
		}
	})
})