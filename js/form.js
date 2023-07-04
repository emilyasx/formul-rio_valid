const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();


    //verifica se o nome está vazio 
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }
 // se o email está preenchido e se é valido

 if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu email");
    return;
 }

 //verificar se a situação foi selecionada 

    if(jobSelect.value === "") {
    alert("Por favor, selecione uma opção");
    return;
 }


// verififcar se a mensagem foi preenchida
if(messageTextarea.value === "") {
    alert("Escreva uma mensagem");
    return;
}

// verificar se a senha está preechida
if(!validatePassword(passwordInput.value, 8)) {
    alert("a senha precisa de no mínimo 8 digitos");
    return;

}

 // se todos os campos estiverem preenchido, envia o form 
    form.submit();
});


// função que valida email 
 function isEmailValid(email){
    // cria um regex para validar o e-mail
    const emailRegex = new RegEx(
        //usuário 123@gmail.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true
    }

    return false;
}


// funcção que valida a senha

function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true
    }
    return false
}
