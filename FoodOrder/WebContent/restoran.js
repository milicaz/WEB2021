$(document).ready(function(){
	$.get({
		url : "rest/users/getLogged",
		contentType : "application/json",
		success : function(user) {
			
			$.get({
				url : "rest/restaurants/allRest",
				contentType : "application/json",
				success : function(rest) {
					for(let r in rest){
						
						if(rest[r].manager == user.username){
							
							let tr = $('<tr></tr>');
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
							$('#tabela tbody').append(tr);
							
							$.get({
								url : "rest/orders/allOrders",
								contentType : "application/json",
								success : function(order) {
									alert("usao je u success order")
									
									for(let o in order) {
										
										alert("FOR  restaurantId je " + order[o].restaurantId)
										alert("FOR rest id je " + rest[r].id)
									
										if(rest[r].id == order[o].restaurantId){
											
											alert("Usao je u if")
										
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
								}
							})
						}
					}
				}
			})
		}
	})
})