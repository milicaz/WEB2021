$(document).ready(function(){
	$.post({
		url : "rest/users/logout",
		contentType : "application/json",
		success : function(data){
			window.location = 'http://localhost:8080/FoodOrder/'
		}
	})
})