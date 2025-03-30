const db = require('../config/db');

// Função para listar todos os orçamentos
const getOrcamentos = async (req, res) => {
    try {
        const orcamentos = await db('Orcamentos');
        res.json(orcamentos);
    } catch (error) {
        console.error('Erro ao buscar orçamentos:', error);
        res.status(500).json({ message: 'Erro ao buscar orçamentos', error: error.message });
    }
};

// Função para buscar um orçamento por ID
const getOrcamentoById = async (req, res) => {
    const { id } = req.params;
    try {
        const orcamento = await db('Orcamentos').where('id', id).first();
        if (!orcamento) {
            return res.status(404).json({ message: 'Orçamento não encontrado' });
        }
        res.json(orcamento);
    } catch (error) {
        console.error('Erro ao buscar orçamento:', error);
        res.status(500).json({ message: 'Erro ao buscar orçamento', error: error.message });
    }
};

// Função para criar um novo orçamento
const createOrcamento = async (req, res) => {
    const { cliente_id, tipo_seguro, valor_estimado, data_orcamento } = req.body;
    try {
        const [newOrcamento] = await db('Orcamentos')
            .insert({
                cliente_id,
                tipo_seguro,
                valor_estimado,
                data_orcamento,
            })
            .returning('*');

        res.status(201).json(newOrcamento);
    } catch (error) {
        console.error('Erro ao criar orçamento:', error);
        res.status(500).json({ message: 'Erro ao criar orçamento', error: error.message });
    }
};

// Função para atualizar um orçamento
const updateOrcamento = async (req, res) => {
    const { id } = req.params;
    const { cliente_id, tipo_seguro, valor_estimado, data_orcamento } = req.body;

    try {
        const orcamentoExistente = await db('Orcamentos').where('id', id).first();
        if (!orcamentoExistente) {
            return res.status(404).json({ message: 'Orçamento não encontrado' });
        }

        await db('Orcamentos').where('id', id).update({
            cliente_id,
            tipo_seguro,
            valor_estimado,
            data_orcamento,
        });

        const updatedOrcamento = await db('Orcamentos').where('id', id).first();
        res.json(updatedOrcamento);
    } catch (error) {
        console.error('Erro ao atualizar orçamento:', error);
        res.status(500).json({ message: 'Erro ao atualizar orçamento', error: error.message });
    }
};

// Função para excluir um orçamento
const deleteOrcamento = async (req, res) => {
    const { id } = req.params;

    try {
        const orcamentoExistente = await db('Orcamentos').where('id', id).first();
        if (!orcamentoExistente) {
            return res.status(404).json({ message: 'Orçamento não encontrado' });
        }

        await db('Orcamentos').where('id', id).del();
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao excluir orçamento:', error);
        res.status(500).json({ message: 'Erro ao excluir orçamento', error: error.message });
    }
};

module.exports = {
    getOrcamentos,
    getOrcamentoById,
    createOrcamento,
    updateOrcamento,
    deleteOrcamento,
};