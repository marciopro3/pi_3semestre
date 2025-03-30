function contarLinhas() {
    var tabela = document.getElementById("table-orcamentos");
    var linhas = tabela.getElementsByTagName("tr").length;
    document.getElementById("qtde-orcamentos").innerText = "Número de orçamentos salvos: " + (linhas - 1);
}

window.onload = contarLinhas;

document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '../index.html'; // Redireciona para login se não houver token
        return;
    }

    // Verifica o token no servidor
    fetch('http://191.254.170.172:4040/api/usuarios/verify', {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Token inválido');
            }
        })
        .catch(error => {
            console.error(error);
            localStorage.removeItem('token'); // Remove o token inválido
            localStorage.removeItem('nomeUsuario');
            window.location.href = '../index.html'; // Redireciona para login
            return;
        });

    const nomeUsuario = localStorage.getItem('nomeUsuario');
    document.querySelector('.p-user').textContent = nomeUsuario ? `Bem-vindo, ${nomeUsuario}!` : 'Bem-vindo!';
});

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nomeUsuario');
    window.location.href = '../index.html';
}

document.querySelector('a[href="#"]').addEventListener('click', logout);