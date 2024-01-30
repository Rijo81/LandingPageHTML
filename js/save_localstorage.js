

document.addEventListener('DOMContentLoaded', function() {
    var form_register = document.getElementById('form_landing');

    form_register.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        var firstname = document.getElementById('first_name').value;
        var lastname = document.getElementById('last_name').value;
        var email_business = document.getElementById('form_email').value;
        var phone_business = document.getElementById('phone').value;
        var companys = document.getElementById('company').value;
        var title_business = document.getElementById('title').value;
        var departament = document.getElementById('select_departament').value;

        // Crear un objeto con los datos del formulario
        var dataFormLanding = {
            fname: firstname,
            lname: lastname,
            email: email_business,
            phone: phone_business,
            company: companys,
            title: title_business,
            depart: departament
        };

        // Convertir el objeto a formato JSON
        var dataJSON = JSON.stringify(dataFormLanding);
        // Guardar en el localStorage
        localStorage.setItem('dataFormLanding', dataJSON);
        // Limpiar el formulario
        form_register.reset();

        alert('Datos guardados en el LocalStorage exitosamente.');
    });
});