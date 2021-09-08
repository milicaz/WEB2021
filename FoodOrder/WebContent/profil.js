$(document).ready(function(){
	$.get({
		url : "rest/users/getLogged",
		contentType : "application/json",
		success : function(user) {
			if(user.role == "admin"){
				$("#admin").attr("hidden", false)
			} else if(user.role == "menadzer") {
				$("#menadzer").attr("hidden", false)
			}
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
				
				
				
				$("#izmena").submit(function(event){
					event.preventDefault()
					
					let id = $("#id").val()
					console.log("Id je: " + id)
					let username = $("#korisnicko_ime").val()
					let password = $("#lozinka").val()
					let firstName = $("#ime").val()
					let lastName = $("#prezime").val()
					let gender = $("#pol").val()
					let dateOfBirth = $("#datum").val()
					let role = $("#uloga").val()
					
					$("#izmena").attr("hidden",true);
					$.ajax({
						url : "rest/users/updateProfil",
						type : "PUT",
						data : JSON.stringify({id, username, password,
						firstName, lastName, gender, dateOfBirth, role
						}),
						contentType : "application/json",
						success : function(data) {
							alert("Usao je u success")
							window.location = './profil.html'
						}
					})
				})
			})
		}
	})
})