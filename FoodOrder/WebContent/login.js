$(document).ready(function() {
	$('#form_login').submit(function(event) {
		event.preventDefault()
		
		let username = $('input[name="username"]').val();
		let password = $('input[name="password"]').val();
		
		console.log("Username je: " + username);
		console.log("Password je: " + password);
		
		if(username == ''){
			alert("Morate uneti korisnicko ime");
			return;
		}else if(password == ''){
			alert("Morate uneti lozinku");
			return;
		}
		
		$.post({
			url : "rest/users/login",
			data : JSON.stringify({username, password}),
			contentType : "application/json",
			success : function(data) {
				console.log("Usao je u success");
				
				if(data == null) {
					alert("Korisnik nije registrovan!")
					window.location = './login.html'
				} else if(data != null){
					alert("Korisnik je registrovan")
				} 
			}
		})
		
	})
})