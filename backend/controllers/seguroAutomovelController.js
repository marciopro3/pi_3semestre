const db = require('../config/db');

// Função para listar todos os seguros de automóvel
const getSegurosAutomovel = async (req, res) => {
  try {
    const segurosAutomovel = await db('SeguroAutomovel');
    res.json(segurosAutomovel);
  } catch (error) {
    console.error('Erro ao buscar seguros de automóvel:', error);
    res.status(500).json({ message: 'Erro ao buscar seguros de automóvel', error: error.message });
  }
};

// Função para buscar um seguro de automóvel por ID
const getSeguroAutomovelById = async (req, res) => {
  const { id } = req.params;
  try {
    const seguroAutomovel = await db('SeguroAutomovel').where('id', id).first();
    if (!seguroAutomovel) {
      return res.status(404).json({ message: 'Seguro de automóvel não encontrado' });
    }
    res.json(seguroAutomovel);
  } catch (error) {
    console.error('Erro ao buscar seguro de automóvel:', error);
    res.status(500).json({ message: 'Erro ao buscar seguro de automóvel', error: error.message });
  }
};

// Função para criar um novo seguro de automóvel
const createSeguroAutomovel = async (req, res) => {
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;
  try {
    const [newSeguroAutomovel] = await db('SeguroAutomovel')
      .insert({
        cliente_id,
        numero_apolice,
        valor_cobertura,
      })
      .returning('*');

    res.status(201).json(newSeguroAutomovel);
  } catch (error) {
    console.error('Erro ao criar seguro de automóvel:', error);
    res.status(500).json({ message: 'Erro ao criar seguro de automóvel', error: error.message });
  }
};

// Função para atualizar um seguro de automóvel
const updateSeguroAutomovel = async (req, res) => {
  const { id } = req.params;
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;

  try {
    const seguroAutomovelExistente = await db('SeguroAutomovel').where('id', id).first();
    if (!seguroAutomovelExistente) {
      return res.status(404).json({ message: 'Seguro de automóvel não encontrado' });
    }

    await db('SeguroAutomovel').where('id', id).update({
      cliente_id,
      numero_apolice,
      valor_cobertura,
    });

    const updatedSeguroAutomovel = await db('SeguroAutomovel').where('id', id).first();
    res.json(updatedSeguroAutomovel);
  } catch (error) {
    console.error('Erro ao atualizar seguro de automóvel:', error);
    res.status(500).json({ message: 'Erro ao atualizar seguro de automóvel', error: error.message });
  }
};

// Função para excluir um seguro de automóvel
const deleteSeguroAutomovel = async (req, res) => {
  const { id } = req.params;

  try {
    const seguroAutomovelExistente = await db('SeguroAutomovel').where('id', id).first();
    if (!seguroAutomovelExistente) {
      return res.status(404).json({ message: 'Seguro de automóvel não encontrado' });
    }

    await db('SeguroAutomovel').where('id', id).del();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir seguro de automóvel:', error);
    res.status(500).json({ message: 'Erro ao excluir seguro de automóvel', error: error.message });
  }
};

module.exports = {
  getSegurosAutomovel,
  getSeguroAutomovelById,
  createSeguroAutomovel,
  updateSeguroAutomovel,
  deleteSeguroAutomovel,
};