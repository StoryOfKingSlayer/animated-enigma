$(document).ready(function (e) {
    e.preventDefault();
    $('#d').click(function () {
        $.ajax({
            url: 'http://localhost:3000/auth/registration',
            method: 'post',
            dataType: 'json',
            data: { 'login': $('#l').val() },
            success: function (data) {
                alert(data);
            }
        });
    })

})