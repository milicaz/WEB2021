$(document).ready(function(){
	$.get({
		url : "rest/users/getLogged",
		contentType : "application/json",
		success : function(user) {
			console.log("Usao je u success")
			let tr = $('<tr></tr>');
			let tdId = $('<td>' + user.id + '</td>');
			let tdUsername = $('<td>' + user.username + '</td>');
			let tdPassword = $('<td>' + user.password + '</td>');
			let tdFName = $('<td>' + user.firstName + '</td>');
			let tdLName = $('<td>' + user.lastName + '</td>');
			let tdGender = $('<td>' + user.gender + '</td>');
			let tdDate = $('<td>' + user.dateOfBirth + '</td>');
			let tdRole = $('<td>' + user.role + '</td>');
			let tdIzmeni = $('<td>' + '<input type="submit" id="btn_izmeni" value="Izmeni" class="btn btn-primary">' + '</td>');
			tr.append(tdId).append(tdUsername).append(tdPassword).append(tdFName).
			append(tdLName).append(tdGender).append(tdDate).append(tdRole).append(tdIzmeni);
			$('#tabela tbody').append(tr);
			
			$("#profil").submit(function(event){
				event.preventDefault();
				$("#izmena").attr("hidden",false);
				$("#id").val(user.id)
				$("#korisnicko_ime").val(user.username)
				$("#lozinka").val(user.password)
				$("#ime").val(user.firstName)
				$("#prezime").val(user.lastName)
				$("#pol").val(user.gender)
				$("#datum").val(user.dateOfBirth)
				$("#uloga").val(user.role)
			})
		}
	})
})