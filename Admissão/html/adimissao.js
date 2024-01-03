(function () {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
.forEach(function (form) {
form.addEventListener('submit', function (event) {
if (!form.checkValidity()) {
event.preventDefault()
event.stopPropagation()
}

form.classList.add('was-validated')
}, false)
})
})()


// Aqui vem a validação da data de nascimento com javascrip
function validateDate() {
    var inputDate = document.getElementById('dob').value;
    var selectedDate = new Date(inputDate);

    // Validar se o ano é menor ou igual a 2009
    if (selectedDate.getFullYear() > 2009) {
        alert('Por favor, selecione uma data com ano menor ou igual a 2009.');
        return false; // Impede o envio do formulário
    }

    // Se a data for válida, permita o envio do formulário
    return true;
}
function validarFormulario() {
    var inputDate = document.getElementById('dataNascimento').value;
    var currentDate = new Date();
    var selectedDate = new Date(inputDate);

    // Verificar se a data selecionada é anterior à data atual
    if (selectedDate > currentDate) {
        alert('Por favor, selecione uma data de nascimento válida.');
        return false; // Impede o envio do formulário
    }

    // Outras verificações de validação, se necessário

    return true; // Permite o envio do formulário se todas as validações passarem
}

