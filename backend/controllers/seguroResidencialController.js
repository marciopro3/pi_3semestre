const db = require('../config/db');

const getSegurosResidencial = async (req, res) => {
  try {
    const segurosResidencial = await db('SeguroResidencial');
    res.json(segurosResidencial);
  } catch (error) {
    console.error('Erro ao buscar seguros residencial:', error);
    res.status(500).json({ message: 'Erro ao buscar seguros residencial', error: error.message });
  }
};

const getSeguroResidencialById = async (req, res) => {
  const { id } = req.params;
  try {
    const seguroResidencial = await db('SeguroResidencial').where('id', id).first();
    if (!seguroResidencial) {
      return res.status(404).json({ message: 'Seguro residencial não encontrado' });
    }
    res.json(seguroResidencial);
  } catch (error) {
    console.error('Erro ao buscar seguro residencial:', error);
    res.status(500).json({ message: 'Erro ao buscar seguro residencial', error: error.message });
  }
};

const createSeguroResidencial = async (req, res) => {
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;
  try {
    const [newSeguroResidencial] = await db('SeguroResidencial')
      .insert({
        cliente_id,
        numero_apolice,
        valor_cobertura,
      })
      .returning('*');

    res.status(201).json(newSeguroResidencial);
  } catch (error) {
    console.error('Erro ao criar seguro residencial:', error);
    res.status(500).json({ message: 'Erro ao criar seguro residencial', error: error.message });
  }
};

const updateSeguroResidencial = async (req, res) => {
  const { id } = req.params;
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;

  try {
    const seguroResidencialExistente = await db('SeguroResidencial').where('id', id).first();
    if (!seguroResidencialExistente) {
      return res.status(404).json({ message: 'Seguro residencial não encontrado' });
    }

    await db('SeguroResidencial').where('id', id).update({
      cliente_id,
      numero_apolice,
      valor_cobertura,
    });

    const updatedSeguroResidencial = await db('SeguroResidencial').where('id', id).first();
    res.json(updatedSeguroResidencial);
  } catch (error) {
    console.error('Erro ao atualizar seguro residencial:', error);
    res.status(500).json({ message: 'Erro ao atualizar seguro residencial', error: error.message });
  }
};

const deleteSeguroResidencial = async (req, res) => {
  const { id } = req.params;

  try {
    const seguroResidencialExistente = await db('SeguroResidencial').where('id', id).first();
    if (!seguroResidencialExistente) {
      return res.status(404).json({ message: 'Seguro residencial não encontrado' });
    }

    await db('SeguroResidencial').where('id', id).del();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir seguro residencial:', error);
    res.status(500).json({ message: 'Erro ao excluir seguro residencial', error: error.message });
  }
};

module.exports = { 
  getSegurosResidencial, 
  getSeguroResidencialById, 
  createSeguroResidencial, 
  updateSeguroResidencial, 
  deleteSeguroResidencial 
};