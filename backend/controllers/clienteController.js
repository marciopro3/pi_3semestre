const db = require('../config/db');

// Função para listar todos os clientes
const getClientes = async (req, res) => {
    try {
        const clientes = await db('Clientes');
        res.json(clientes);
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        res.status(500).json({ message: 'Erro ao buscar clientes', error: error.message });
    }
};

// Função para buscar um cliente por ID
const getClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await db('Clientes').where('id', id).first();
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        console.error('Erro ao buscar cliente:', error);
        res.status(500).json({ message: 'Erro ao buscar cliente', error: error.message });
    }
};

// Função para criar um novo cliente
const createCliente = async (req, res) => {
    const { nome, email, telefone, endereco, data_nascimento } = req.body;
    try {
        const [newCliente] = await db('Clientes')
            .insert({
                nome,
                email,
                telefone,
                endereco,
                data_nascimento,
            })
            .returning('*');

        res.status(201).json(newCliente);
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).json({ message: 'Erro ao criar cliente', error: error.message });
    }
};

// Função para atualizar um cliente
const updateCliente = async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, endereco, data_nascimento } = req.body;

    try {
        const clienteExistente = await db('Clientes').where('id', id).first();
        if (!clienteExistente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        await db('Clientes').where('id', id).update({
            nome,
            email,
            telefone,
            endereco,
            data_nascimento,
        });

        const updatedCliente = await db('Clientes').where('id', id).first();
        res.json(updatedCliente);
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        res.status(500).json({ message: 'Erro ao atualizar cliente', error: error.message });
    }
};

// Função para excluir um cliente
const deleteCliente = async (req, res) => {
    const { id } = req.params;

    try {
        const clienteExistente = await db('Clientes').where('id', id).first();
        if (!clienteExistente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        await db('Clientes').where('id', id).del();
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        res.status(500).json({ message: 'Erro ao excluir cliente', error: error.message });
    }
};

module.exports = {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente,
};