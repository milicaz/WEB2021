$(document).ready(function(){
	
	
	$('#noviRestoran').submit(function(event){
		
		let name = $("#name").val()
	alert("Name je " + name)
	let type = $("#type").val()
	let longitude = $("#duzina").val()
	let latitude = $("#sirina").val()
	let street = $("#ulica").val()
	let streetNumber = $("#broj").val()
	let city = $("#grad").val()
	let zipCode = $("#pbroj").val()
	let logo = $("#logo").val()
	let manager = $("#menadzer").val()
		
		event.preventDefault()
		$.post({
		url : "rest/restaurants/save",
		data : JSON.stringify({name, type, location : {longitude, latitude, street, streetNumber
		, city, zipCode}, logo, manager}),
		contentType : "application/json",
		success : function(){
			alert("Usao je u success")
		}
		
	})
	})
	
	
})