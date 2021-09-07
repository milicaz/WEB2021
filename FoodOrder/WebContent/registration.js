$(document).ready(function () {
    let forma = $("form")


    forma.submit(function (event) {

        let username = $("input[name = korisnicko_ime]").val()

        alert("Korisnicko ime je : " + username)

        $.ajax({
            type: "get",
            url: "rest/users/allUsers",
            contentType: "application/json",
            success: function (user) {
                for (let u in user) {
                    if (username == user[u].username) {
                        alert("Ucitano korisnicko ime je: " + user[u].username)
                        alert("Postoji korisnik sa korisnickim imenom")
                        return
                    }

                }
                $.ajax({
                    type: "post",
                    url: "rest/users/saveUser",
                    data: JSON.stringify({
                        "username": $("input[name = korisnicko_ime]").val(),
                        "password": $("input[name = lozinka]").val(),
                        "firstName": $("input[name = ime]").val(),
                        "lastName": $("input[name = prezime]").val(),
                        "gender": $("input[name = pol]").val(),
                        "dateOfBirth": $("input[name = datum_rodjenja]").val()
                    }),
					contentType : "application/json",
					dataType: "application/json",
                    success: function (data) {
                        alert("Korisnik je uspesno registrovan")
                        alert("data je : " + data)
                    }
                })
            }
        })

    })
});