$(document).ready(function(){
	let forma = $("form")
	
	console.log("Nalazi se ispred forma.submit")
	
	forma.submit(function(event){
		console.log("Nalazi se ispred .ajax")
		
		$.ajax({
			url : "rest/users/saveUser",
			type : "POST",
			data : JSON.stringify({
				"username" : $("input[name = korisnicko_ime]").val(),
			"password" : $("input[name = lozinka]").val(),
			"firstName" : $("input[name = ime]").val(),
			"lastName" : $("input[name = prezime]").val(),
			"gender" : $("input[name = pol]").val(),
			"dateOfBirth" : $("input[name = datum_rodjenja]").val()
			}),
			contentType : "application/json",
			dataType:"json",
			success : function(data) {
				console.log("Korisnik je uspesno registrovan!")
				console.log("data je: " + data)
			}
		})
	})
});