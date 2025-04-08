document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    const userDisplay = document.querySelector('.p-user');
    const conteudo = document.getElementById('conteudo');

    if (!token) {
        redirecionarParaLogin();
        return;
    }

    fetch('http://bvseguros.ddns.net:3000/api/usuarios/verify', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Token inválido');
        }

        const nomeUsuario = localStorage.getItem('nomeUsuario');
        userDisplay.textContent = nomeUsuario ? `Bem-vindo, ${nomeUsuario}!` : 'Bem-vindo!';

        // Mostra o conteúdo direto
        if (conteudo) conteudo.style.display = 'block';
    })
    .catch(error => {
        console.error('Erro ao verificar token:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('nomeUsuario');
        redirecionarParaLogin();
    });

    function redirecionarParaLogin() {
        document.body.innerHTML = '';
        window.location.href = '../index.html';
    }
});