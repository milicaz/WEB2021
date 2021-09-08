$(document).ready(function(){
	
	$("#pretraga").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tabela tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
	
	$.get({
		url: "rest/restaurants/allRest",
		contentType : "application/json",
		success : function(rest) {
			for(let r in rest){
				if(rest[r].status == true){
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
				}
			}
			for(let r in rest){
				if(rest[r].status == false){
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
				}
			}
		}
	})
})