$(document).ready(function () {

    $('#registration').submit(function (event) {

        let username = $('input[name = "korisnicko_ime"]').val()
		let password = $('input[name = "lozinka"]').val()
		let firstName = $('input[name = "ime"]').val()
		let lastName = $('input[name = "prezime"]').val()
		let gender = $('input[name = "pol"]').val()
		let dateOfBirth = $('input[name = "datum_rodjenja"]').val()

        alert("Korisnicko ime je : " + username)
		alert("Loznka je je : " + password)
		alert("Ime je : " + firstName)
		alert("Prezime je : " + lastName)
		alert("Pol je : " + gender)
		alert("Datum je : " + dateOfBirth)
		
		$.post({
			url : "rest/users/saveUser",
			data : JSON.stringify({username, password, firstName, lastName, gender, dateOfBirth}),
			contentType : "application/json",
			success : function(data) {
				alert("Usao je u success");
				alert("Data je: " + data);
				if(data == null) {
					alert("Postoji korisnik sa korisnickim imenom")
				} else {
					alert("Korisnik je uspesno registrovan")
				}
			}
		})



    })
});