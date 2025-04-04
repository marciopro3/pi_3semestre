const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await db('Usuarios');
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
};

const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await db('Usuarios').where('id', id).first();
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
};

const createUsuario = async (req, res) => {
    const { nome, email, senha, tipo_usuario } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(senha, 10); // 10 é o número de rounds de salt
        const [newUsuario] = await db('Usuarios')
            .insert({
                nome,
                email,
                senha,
                tipo_usuario,
            })
            .returning('*');

        res.status(201).json(newUsuario);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
};

const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, tipo_usuario } = req.body;

    try {
        const usuarioExistente = await db('Usuarios').where('id', id).first();
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        await db('Usuarios').where('id', id).update({
            nome,
            email,
            senha,
            tipo_usuario,
        });

        const updatedUsuario = await db('Usuarios').where('id', id).first();
        res.json(updatedUsuario);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
};

const deleteUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioExistente = await db('Usuarios').where('id', id).first();
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        await db('Usuarios').where('id', id).del();
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).json({ message: 'Erro ao excluir usuário', error: error.message });
    }
};

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await db('Usuarios').where({ email }).first();

        if (usuario && await bcrypt.compare(senha, usuario.senha)) {
            const token = jwt.sign(
                { id: usuario.id, tipo_usuario: usuario.tipo_usuario },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            res.json({
                token,
                message: 'Login bem-sucedido',
                nome: usuario.nome, // Adiciona o nome do usuário à resposta
            });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
};

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    loginUsuario, // Adicione a função loginUsuario aqui
};