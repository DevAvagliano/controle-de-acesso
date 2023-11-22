// função para validação de e-mail
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// constantes indicadores dos formulários
const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLenghtError: () => document.getElementById('password-min-lenght-error'),
    recoverPassword: () => document.getElementById('recover-password-button'),
    loginButton: () => document.getElementById('login-button'),
    registerButton: () => document.getElementById('register-button')
}

//função para mostrar e esconder loading...
function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");

    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }

}

