const db = require('../config/db');

const getSegurosRETA = async (req, res) => {
  try {
    const segurosRETA = await db('SeguroRETA');
    res.json(segurosRETA);
  } catch (error) {
    console.error('Erro ao buscar seguros RETA:', error);
    res.status(500).json({ message: 'Erro ao buscar seguros RETA', error: error.message });
  }
};

const getSeguroRETAById = async (req, res) => {
  const { id } = req.params;
  try {
    const seguroRETA = await db('SeguroRETA').where('id', id).first();
    if (!seguroRETA) {
      return res.status(404).json({ message: 'Seguro RETA não encontrado' });
    }
    res.json(seguroRETA);
  } catch (error) {
    console.error('Erro ao buscar seguro RETA:', error);
    res.status(500).json({ message: 'Erro ao buscar seguro RETA', error: error.message });
  }
};

const createSeguroRETA = async (req, res) => {
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;
  try {
    const [newSeguroRETA] = await db('SeguroRETA')
      .insert({
        cliente_id,
        numero_apolice,
        valor_cobertura,
      })
      .returning('*');

    res.status(201).json(newSeguroRETA);
  } catch (error) {
    console.error('Erro ao criar seguro RETA:', error);
    res.status(500).json({ message: 'Erro ao criar seguro RETA', error: error.message });
  }
};

const updateSeguroRETA = async (req, res) => {
  const { id } = req.params;
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;

  try {
    const seguroRETAExistente = await db('SeguroRETA').where('id', id).first();
    if (!seguroRETAExistente) {
      return res.status(404).json({ message: 'Seguro RETA não encontrado' });
    }

    await db('SeguroRETA').where('id', id).update({
      cliente_id,
      numero_apolice,
      valor_cobertura,
    });

    const updatedSeguroRETA = await db('SeguroRETA').where('id', id).first();
    res.json(updatedSeguroRETA);
  } catch (error) {
    console.error('Erro ao atualizar seguro RETA:', error);
    res.status(500).json({ message: 'Erro ao atualizar seguro RETA', error: error.message });
  }
};

const deleteSeguroRETA = async (req, res) => {
  const { id } = req.params;

  try {
    const seguroRETAExistente = await db('SeguroRETA').where('id', id).first();
    if (!seguroRETAExistente) {
      return res.status(404).json({ message: 'Seguro RETA não encontrado' });
    }

    await db('SeguroRETA').where('id', id).del();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir seguro RETA:', error);
    res.status(500).json({ message: 'Erro ao excluir seguro RETA', error: error.message });
  }
};

module.exports = { getSegurosRETA, getSeguroRETAById, createSeguroRETA, updateSeguroRETA, deleteSeguroRETA };