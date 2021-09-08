$(document).ready(function() {
	$.get({
		url : "rest/users/allUsers",
		contentType : "application/json",
		success: function(user){
			console.log("Usao je u success");
			for(let u in user){
				let tr = $('<tr></tr>');
				let tdId = $('<td>' + user[u].id + '</td>');
				let tdUsername = $('<td>' + user[u].username + '</td>');
				let tdPassword = $('<td>' + user[u].password + '</td>');
				let tdFName = $('<td>' + user[u].firstName + '</td>');
				let tdLName = $('<td>' + user[u].lastName + '</td>');
				let tdGender = $('<td>' + user[u].gender + '</td>');
				let tdDate = $('<td>' + user[u].dateOfBirth + '</td>');
				let tdRole = $('<td>' + user[u].role + '</td>');
				//let tdIzmeni = $('<td>' + '<input type="submit" id="btn_izmeni" value="Izmeni" class="btn btn-primary">' + '</td>');
				tr.append(tdId).append(tdUsername).append(tdPassword).append(tdFName).
				append(tdLName).append(tdGender).append(tdDate).append(tdRole);
				$('#tabela tbody').append(tr);
			}
		}
	})
})