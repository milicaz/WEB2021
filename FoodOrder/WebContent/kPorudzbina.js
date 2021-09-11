$(document).ready(function () {
    $.get({
        url: "rest/users/getLogged",
        contentType: "application/json",
        success: function (user) {
            //alert("Role je " + user.role)
            if (user.role == "menadzer") {
                $.get({
                    url: "rest/orders/allOrders",
                    contentType: "application/json",
                    success: function (order) {

                        for (let or in order) {
                            const item = []
                            if (user.restaurant.id == order[or].restaurantId) {
                                if (order[or].zatrazeno == "zatrazeno") {

                                    $("#div_menadzer").attr("hidden", false)
                                    for (let it in order[or].items) {
                                        item.push(order[or].items[it].name)
                                    }
                                    //alert("Usao je u if")
                                    let tr = $('<tr></tr>');
                                    let tdId = $('<td>' + order[or].id + '</td>');
                                    let tdArtikli = $('<td>' + item + '</td>');
                                    let tdRestoran = $('<td>' + order[or].restaurantId + '</td>');
                                    let tdDatum = $('<td>' + order[or].datum + '</td>');
                                    let tdCena = $('<td>' + order[or].price + '</td>');
                                    let tdKupac = $('<td>' + order[or].kupac.firstName + " " + order[or].kupac.firstName + '</td>');
                                    let tdStatus = $('<td>' + order[or].status + '</td>');
                                    let tdOdobri = $('<td>' + '<input type="button" value = "odobri" class="btn btn-primary" onclick="odobri(' + order[or].id + ')">' + '</td>')
                                    let tdOdbij = $('<td>' + '<input type="button" value = "otkazi" class="btn btn-primary" onclick="otkazi(' + order[or].id + ')">' + '</td>')



                                    tr.append(tdId).append(tdArtikli).append(tdRestoran).
                                        append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus)
                                        .append(tdOdobri).append(tdOdbij);
                                    $('#tabela_zatrazene tbody').append(tr);


                                }
                            }
                        }
                    }
                })
            }

            if (user.role == "kupac") {
                $("#div_kupac").attr("hidden", false)
                $.get({
                    url: "rest/orders/allOrders",
                    contentType: "application/json",
                    success: function (orders) {
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
            }

            if (user.role == "dostavljac") {


                $("#div_porudzbina").attr("hidden", false)
                $("#div_preuzete").attr("hidden", false)
				$.get({
					url : "rest/orders/allOrders",
					contentType : "application/json",
					success : function(porudzbine){
						for(let por in porudzbine) {
							//alert("Usao je u for")
							const i = []
							if(porudzbine[por].status == "dostavljena"){
							if(user.id == porudzbine[por].dostavljacId){
								for(let it in porudzbine[por].items){
									i.push(porudzbine[por].items[it].name)
									//alert("I je : " + i)
								}
								let tr = $('<tr></tr>');
                    			let tdId = $('<td>' + porudzbine[por].id + '</td>');
                    			let tdArtikli = $('<td>' + i + '</td>');
                    			let tdRestoran = $('<td>' + porudzbine[por].restaurantId + '</td>');
                    			let tdDatum = $('<td>' + porudzbine[por].datum + '</td>');
                    			let tdCena = $('<td>' + porudzbine[por].price + '</td>');
                    			let tdKupac = $('<td>' + porudzbine[por].kupac.firstName + " " + porudzbine[por].kupac.lastName + '</td>');
                    			let tdStatus = $('<td>' + porudzbine[por].status + '</td>');

                    			tr.append(tdId).append(tdArtikli).append(tdRestoran).
                        		append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus);
                    			$('#tabela_preuzete tbody').append(tr);
							}
							} else if(porudzbine[por].status == "u transportu"){
							if(user.id == porudzbine[por].dostavljacId){
								for(let it in porudzbine[por].items){
									i.push(porudzbine[por].items[it].name)
									//alert("I je : " + i)
								}
								let tr = $('<tr></tr>');
                    			let tdId = $('<td>' + porudzbine[por].id + '</td>');
                    			let tdArtikli = $('<td>' + i + '</td>');
                    			let tdRestoran = $('<td>' + porudzbine[por].restaurantId + '</td>');
                    			let tdDatum = $('<td>' + porudzbine[por].datum + '</td>');
                    			let tdCena = $('<td>' + porudzbine[por].price + '</td>');
                    			let tdKupac = $('<td>' + porudzbine[por].kupac.firstName + " " + porudzbine[por].kupac.lastName + '</td>');
                    			let tdStatus = $('<td>' + porudzbine[por].status + '</td>');
								let tdDugme = $('<td>' + '<input type="button" value = "dostavljeno" class="btn btn-primary" onclick="dostavljeno(' + porudzbine[por].id + "," + user.id + ')">' + '</td>')

                    			tr.append(tdId).append(tdArtikli).append(tdRestoran).
                        		append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus).append(tdDugme);
                    			$('#tabela_preuzete tbody').append(tr);
							}
							}else if(porudzbine[por].status == "otkazana"){
							if(user.id == porudzbine[por].dostavljacId){
								for(let it in porudzbine[por].items){
									i.push(porudzbine[por].items[it].name)
									//alert("I je : " + i)
								}
								let tr = $('<tr></tr>');
                    			let tdId = $('<td>' + porudzbine[por].id + '</td>');
                    			let tdArtikli = $('<td>' + i + '</td>');
                    			let tdRestoran = $('<td>' + porudzbine[por].restaurantId + '</td>');
                    			let tdDatum = $('<td>' + porudzbine[por].datum + '</td>');
                    			let tdCena = $('<td>' + porudzbine[por].price + '</td>');
                    			let tdKupac = $('<td>' + porudzbine[por].kupac.firstName + " " + porudzbine[por].kupac.lastName + '</td>');
                    			let tdStatus = $('<td>' + porudzbine[por].status + '</td>');
								

                    			tr.append(tdId).append(tdArtikli).append(tdRestoran).
                        		append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus);
                    			$('#tabela_preuzete tbody').append(tr);
							}
							}
							
						}
					}
				})
                /*for (let uo in user.orders) {
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

                }*/

				/*for(let por in order) {
					alert("Usao je u for")
					const i = []
					if(user.id == order[o].dostavljacId){
						for(let it in order[por].items){
							i.push(order[por].items[it].name)
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
				}*/


                $.get({
                    url: "rest/orders/allOrders",
                    contentType: "application/json",
                    success: function (orders) {
                        let i = 0;
                        for (let o in orders) {
                            //const art = []
                            if (orders[o].status == "ceka dostavljaca") {
                                if (orders[o].zatrazeno != "zatrazeno") {
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
                                    let tdDugme = $('<td>' + '<input type="button" value = "zatrazi" class="btn btn-primary" onclick="upisati(' + orders[o].id + "," + user.id + ')">' + '</td>')

                                    tr.append(tdId).append(tdArtikli).append(tdRestoran).
                                        append(tdDatum).append(tdCena).append(tdKupac).append(tdStatus).append(tdDugme);
                                    $('#tabela tbody').append(tr);

                                }
                            }

							
                        }

                    }


                })
            }
        }
    })
});


function odobri(id) {

    $.get({
        url: "rest/orders/newOrder/" + id,
        contentType: "application/json",
        success: function (order) {
            alert("Order id je " + order.id)

            let id = order.id
            let items = order.items
            let restaurantId = order.restaurantId
            let datum = order.datum
            let price = order.price
            let kupac = order.kupac
            let status = "u transportu"
            let zatrazeno = order.zatrazeno
            let dostavljacId = order.dostavljacId
            let statusMenadzer = "odobreno"

			alert("DostavljacId je " + dostavljacId)
			alert("Odobreno je " + statusMenadzer)

            $.ajax({
                url: "rest/orders/updateOrder",
                type: "PUT",
                data: JSON.stringify({ id, items, restaurantId, datum, price, kupac, status, zatrazeno, dostavljacId, statusMenadzer }),
                contentType: "application/json",
				dataType : "application/json",
                success: function (data) {
                    alert("Usao je u success")
                }
            })

        }
    })

}

function upisati(id, username) {
    //$("button").hide()
    //window.location = 'http://localhost:8080/FoodOrder/kPorudzbina.html'
    $(this).hide()
    //alert("Id je " + id)
    //alert("user.id je " + username)
    $.get({
        url: "rest/orders/newOrder/" + id,
        contentType: "application/json",
        success: function(order) {
            alert("Order id je " + order.id)

            let id = order.id
            let items = order.items
            let restaurantId = order.restaurantId
            let datum = order.datum
            let price = order.price
            let kupac = order.kupac
            let status = order.status
            let zatrazeno = "zatrazeno"
            let dostavljacId = username

            $.ajax({
                url: "rest/orders/updateOrder",
                type : "PUT",
                data: JSON.stringify({id, items, restaurantId, datum, price, kupac, status, zatrazeno, dostavljacId }),
                contentType: "application/json",
                success: function(data) {
                    alert("Usao je u success")
                }
            })
        }
    })
}

function dostavljeno(porId, userId) {
	alert("usao je u f-ju")
	    $.get({
        url: "rest/orders/newOrder/" + porId,
        contentType: "application/json",
        success: function(order) {
            alert("Order id je " + order.id)

            let id = order.id
            let items = order.items
            let restaurantId = order.restaurantId
            let datum = order.datum
            let price = order.price
            let kupac = order.kupac
            let status = "dostavljena"
            let zatrazeno = order.zatrazeno
            let dostavljacId = order.dostavljacId

            $.ajax({
                url: "rest/orders/updateOrder",
                type : "PUT",
                data: JSON.stringify({id, items, restaurantId, datum, price, kupac, status, zatrazeno, dostavljacId }),
                contentType: "application/json",
                success: function(data) {
                    alert("Usao je u success")
                }
            })
        }
    })
}

function otkazi(id) {
	$.get({
        url: "rest/orders/newOrder/" + id,
        contentType: "application/json",
        success: function (order) {
            alert("Order id je " + order.id)

            let id = order.id
            let items = order.items
            let restaurantId = order.restaurantId
            let datum = order.datum
            let price = order.price
            let kupac = order.kupac
            let status = "otkazana"
            let zatrazeno = order.zatrazeno
            let dostavljacId = order.dostavljacId
            let statusMenadzer = "otkazana"

			alert("DostavljacId je " + dostavljacId)
			alert("Odobreno je " + statusMenadzer)

            $.ajax({
                url: "rest/orders/updateOrder",
                type: "PUT",
                data: JSON.stringify({ id, items, restaurantId, datum, price, kupac, status, zatrazeno, dostavljacId, statusMenadzer }),
                contentType: "application/json",
				dataType : "application/json",
                success: function (data) {
                    alert("Usao je u success")
                }
            })

        }
    })
}