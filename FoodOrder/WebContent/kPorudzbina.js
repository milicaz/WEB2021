$(document).ready(function() {
	$.get({
		url: "rest/users/getLogged",
		contentType: "application/json",
		success: function(user) {
			//alert("Role je " + user.role)
			if (user.role == "kupac") {
				$("#div_kupac").attr("hidden", false)
				$.get({
					url: "rest/orders/allOrders",
					contentType: "application/json",
					success: function(orders) {
						for (let o in orders) {
							const a = []
							if (orders[o].kupac.id == user.id) {
								for(let it in orders[o].items){
									a.push(orders[o].items[it].name)
								}
								//alert("Usao je u if")
								let tr = $('<tr></tr>');
								let tdId = $('<td>' + orders[o].id + '</td>');
								let tdArtikli = $('<td>' + a + '</td>');
								let tdRestoran = $('<td>' + orders[o].restaurantId + '</td>');
								let tdDatum = $('<td>' + orders[o].datum + '</td>');
								let tdCena = $('<td>' + orders[o].price + '</td>');
								let tdKupac = $('<td>' + orders[o].kupac.firstName + " " + orders[o].kupac.firstName + '</td>');
								let tdStatus = $('<td>' + orders[o].status + '</td>');

								tr.append(tdId).append(tdArtikli).append(tdRestoran).
									append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus);
								$('#tabela_kupac tbody').append(tr);
								
							}
						}
					}
				})
			} if (user.role == "dostavljac") {

				$("#div_porudzbina").attr("hidden", false)
				$("#div_preuzete").attr("hidden", false)
				for (let uo in user.orders) {
					const artikli = []
					for (let it in user.orders[uo].items) {
						artikli.push(user.orders[uo].items[it].name)

						//alert("Artikli su : " + user.orders[uo].items[it].name)
					}

					let tr = $('<tr></tr>');
					let tdId = $('<td>' + user.orders[uo].id + '</td>');
					let tdArtikli = $('<td>' + artikli + '</td>');
					let tdRestoran = $('<td>' + user.orders[uo].restaurantId + '</td>');
					let tdDatum = $('<td>' + user.orders[uo].datum + '</td>');
					let tdCena = $('<td>' + user.orders[uo].price + '</td>');
					let tdKupac = $('<td>' + user.orders[uo].kupac.firstName + " " + user.orders[uo].kupac.lastName + '</td>');
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
							//const art = []
							if (orders[o].status == "ceka dostavljaca") {
								const art = []
								for (let it in orders[o].items) {
									art.push(orders[o].items[it].name)

									//alert("Artikli su : " + user.orders[uo].items[it].name)
								}
								//alert("Usao je u if")
								let tr = $('<tr></tr>');
								let tdId = $('<td>' + orders[o].id + '</td>');
								let tdArtikli = $('<td>' + art + '</td>');
								let tdRestoran = $('<td>' + orders[o].restaurantId + '</td>');
								let tdDatum = $('<td>' + orders[o].datum + '</td>');
								let tdCena = $('<td>' + orders[o].price + '</td>');
								let tdKupac = $('<td>' + orders[o].kupac.firstName + " " + orders[o].kupac.lastName + '</td>');
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