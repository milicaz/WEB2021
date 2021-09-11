$(document).ready(function() {
	$.get({
		url: "rest/users/getLogged",
		contentType: "application/json",
		success: function(user) {
			//alert("Role je " + user.role)
			if(user.role == "menadzer") {
				$.get({
					
				})
			}
			
			if (user.role == "kupac") {
				$("#div_kupac").attr("hidden", false)
				$.get({
					url: "rest/orders/allOrders",
					contentType: "application/json",
					success: function(orders) {
						for (let o in orders) {
							const a = []
							if (orders[o].kupac.id == user.id) {
								for (let it in orders[o].items) {
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
						let i = 0;
						for (let o in orders) {
							//const art = []
							if (orders[o].status == "ceka dostavljaca") {
								if(orders[o].zatrazeno != "zatrazeno"){
								const art = []
								let id = ""
								for (let it in orders[o].items) {
									art.push(orders[o].items[it].name)
									//alert("Artikli su : " + user.orders[uo].items[it].name)
								}
								i++
								//alert("I je " + i)
								let tr = $('<tr></tr>');
								let tdId = $('<td>' + orders[o].id + '</td>');
								let tdArtikli = $('<td>' + art + '</td>');
								let tdRestoran = $('<td>' + orders[o].restaurantId + '</td>');
								let tdDatum = $('<td>' + orders[o].datum + '</td>');
								let tdCena = $('<td>' + orders[o].price + '</td>');
								let tdKupac = $('<td>' + orders[o].kupac.firstName + " " + orders[o].kupac.lastName + '</td>');
								let tdStatus = $('<td>' + orders[o].status + '</td>');
								let tdDugme = $('<td>' + '<input type="button" value = "zatrazi" class="btn btn-primary" onclick="upisati(' + orders[o].id + ')">' + '</td>')

								tr.append(tdId).append(tdArtikli).append(tdRestoran).
									append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus).append(tdDugme);
								$('#tabela tbody').append(tr);

							}
							}
						}

						/*$("input").click(function(e) {
							//e.preventDefault()
							var idClicked = e.target.id;
							//alert("idClicked je " + idClicked)
							$("#idClicked").submit(function(){
								alert("Usao je u submit")
								window.location = '/.proba.html'
							})
							
						});*/



						$('input[type="button"]').click(function() {
							//alert('You clicked button with ID:' + this.id);
							$(this).hide()
							//window.location = 'http://localhost:8080/FoodOrder/proba.html'
						});

					}


				})
			}
		}
	})

})

	function upisati(id) {
		//$("button").hide()
		$(this).hide()
		alert("Id je " + id)
		$.get({
			url : "rest/orders/newOrder/" + id,
			contentType : "application/json",
			success : function(order) {
				alert("Order id je " + order.id)
				
				let items = order.items
				let restaurantId = order.restaurantId
				let datum = order.datum
				let price = order.price
				let kupac = order.kupac
				let status = order.status
				let zatrazeno = "zatrazeno"
				
				$.post({
					url : "rest/orders/saveOrder",
					data : JSON.stringify({items, restaurantId, datum, price, kupac, status, zatrazeno}),
					contentType : "application/json",
					success : function(data) {
						alert("Usao je u success")
					}
				})
			}
		})
	}