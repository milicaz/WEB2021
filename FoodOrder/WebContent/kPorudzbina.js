$(document).ready(function() {
	$.get({
		url: "rest/users/getLogged",
		contentType: "application/json",
		success: function(user) {
			alert("Role je " + user.role)

			if (user.role == "kupac") {
				$.get({
					url: "rest/orders/allOrders",
					contentType: "application/json",
					success: function(orders) {
						for (let o in orders) {

							if (orders[o].kupacId == user.id) {
								alert("Usao je u if")
								let tr = $('<tr></tr>');
								let tdId = $('<td>' + orders[o].id + '</td>');
								let tdArtikli = $('<td>' + orders[o].orderItemId + '</td>');
								let tdRestoran = $('<td>' + orders[o].restaurantId + '</td>');
								let tdDatum = $('<td>' + orders[o].datum + '</td>');
								let tdCena = $('<td>' + orders[o].price + '</td>');
								let tdKupac = $('<td>' + orders[o].kupacId + '</td>');
								let tdStatus = $('<td>' + orders[o].status + '</td>');

								tr.append(tdId).append(tdArtikli).append(tdRestoran).
									append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus);
								$('#tabela tbody').append(tr);
							}
						}
					}
				})
			} else if (user.role == "dostavljac") {

				for (let uo in user.orders) {
					alert("Id porudzbine je: " + user.orders[uo].id)
					let tr = $('<tr></tr>');
					let tdId = $('<td>' + user.orders[uo].id + '</td>');
					let tdArtikli = $('<td>' + user.orders[uo].orderItemId + '</td>');
					let tdRestoran = $('<td>' + user.orders[uo].restaurantId + '</td>');
					let tdDatum = $('<td>' + user.orders[uo].datum + '</td>');
					let tdCena = $('<td>' + user.orders[uo].price + '</td>');
					let tdKupac = $('<td>' + user.orders[uo].kupacId + '</td>');
					let tdStatus = $('<td>' + user.orders[uo].status + '</td>');

					tr.append(tdId).append(tdArtikli).append(tdRestoran).
						append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus);
					$('#tabela_preuzete tbody').append(tr);
				}


				$.get({
					url: "rest/orders/allOrders",
					contentType: "application/json",
					success: function(orders) {
						for (let o in orders) {

							if (orders[o].status == "ceka dostavljaca") {
								alert("Usao je u if")
								let tr = $('<tr></tr>');
								let tdId = $('<td>' + orders[o].id + '</td>');
								let tdArtikli = $('<td>' + orders[o].orderItemId + '</td>');
								let tdRestoran = $('<td>' + orders[o].restaurantId + '</td>');
								let tdDatum = $('<td>' + orders[o].datum + '</td>');
								let tdCena = $('<td>' + orders[o].price + '</td>');
								let tdKupac = $('<td>' + orders[o].kupacId + '</td>');
								let tdStatus = $('<td>' + orders[o].status + '</td>');

								tr.append(tdId).append(tdArtikli).append(tdRestoran).
									append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus);
								$('#tabela tbody').append(tr);
							}
						}
					}
				})
			}
		}
	})
})