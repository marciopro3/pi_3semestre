const db = require('./config/db'); // Ajuste o caminho para o seu arquivo de configuração do banco de dados
const bcrypt = require('bcrypt');

async function updatePasswords() {
    try {
        const usuarios = await db('Usuarios');

        for (const usuario of usuarios) {
            const hashedPassword = await bcrypt.hash('senha123', 10); // Substitua 'senha123' pela nova senha
            await db('Usuarios').where('id', usuario.id).update({ senha: hashedPassword });
            console.log(`Senha do usuário ${usuario.id} atualizada.`);
        }

        console.log('Todas as senhas foram atualizadas.');
        process.exit();
    } catch (error) {
        console.error('Erro ao atualizar senhas:', error);
        process.exit(1);
    }
}

updatePasswords();