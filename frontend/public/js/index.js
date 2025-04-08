const passwordInput = document.getElementById('passwd');
const togglePasswordButton = document.getElementById('togglePassword');
const togglePasswordCloseButton = document.getElementById('togglePasswordClose');

togglePasswordButton.addEventListener('click', function () {
    passwordInput.type = 'text';

    togglePasswordButton.style.display = 'none';
    togglePasswordCloseButton.style.display = 'inline';
});

togglePasswordCloseButton.addEventListener('click', function () {
    passwordInput.type = 'password';

    togglePasswordCloseButton.style.display = 'none';
    togglePasswordButton.style.display = 'inline';
});

// login

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('passwd').value;

    fetch('http://bvseguros.ddns.net:3000/api/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            senha: senha,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao autenticar usuário');
        }
        return response.json();
    })
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('nomeUsuario', data.nome); // Armazena o nome do usuário
            window.location.href = 'pages/dash.html';
        } else {
            alert('Login falhou. Verifique as credenciais.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Erro ao autenticar. Verifique as credenciais.');
    });
});