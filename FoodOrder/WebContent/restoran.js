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
								url : "rest/orders/allOrders/",
								contentType : "application/json",
								success : function(order) {
									
									let orderKupac;
									
									for(let o in order) {

									
										if(rest[r].id == order[o].restaurantId){
											
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
											
											/*$.get({
												url : "rest/users/allUsers",
												contentType : "application/json",
												success : function(kupac) {

													for(let k in kupac) {
														
														if(kupac[k].id == order[o].kupacId){
															
															let tr = $('<tr></tr>');
															let tdId = $('<td>' + kupac[k].id + '</td>');
															let tdUsername = $('<td>' + kupac[k].username + '</td>');
															let tdPassword = $('<td>' + kupac[k].password + '</td>');
															let tdFName = $('<td>' + kupac[k].firstName + '</td>');
															let tdLName = $('<td>' + kupac[k].lastName + '</td>');
															let tdGender = $('<td>' + kupac[k].gender + '</td>');
															let tdDate = $('<td>' + kupac[k].dateOfBirth + '</td>');
															let tdRole = $('<td>' + kupac[k].role + '</td>');
															tr.append(tdId).append(tdUsername).append(tdPassword).append(tdFName).
															append(tdLName).append(tdGender).append(tdDate).append(tdRole);
															$('#tabela_kupac tbody').append(tr);
															
														}
													}
												}
											})*/
											
											/*$.get({
												url : "rest/users/oneUser/" + order[o].kupacId,
												contentType : "application/json",
												success : function(kupac) {
													alert("Usao je u kupac")
													
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
											})*/
									}
									}
									$.get({
												url : "rest/users/oneUser/" + orderKupac,
												contentType : "application/json",
												success : function(kupac) {
													
													
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