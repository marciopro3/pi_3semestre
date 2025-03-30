const db = require('../config/db');

const getSegurosFrota = async (req, res) => {
  try {
    const segurosFrota = await db('SeguroFrota');
    res.json(segurosFrota);
  } catch (error) {
    console.error('Erro ao buscar seguros frota:', error);
    res.status(500).json({ message: 'Erro ao buscar seguros frota', error: error.message });
  }
};

const getSeguroFrotaById = async (req, res) => {
  const { id } = req.params;
  try {
    const seguroFrota = await db('SeguroFrota').where('id', id).first();
    if (!seguroFrota) {
      return res.status(404).json({ message: 'Seguro frota não encontrado' });
    }
    res.json(seguroFrota);
  } catch (error) {
    console.error('Erro ao buscar seguro frota:', error);
    res.status(500).json({ message: 'Erro ao buscar seguro frota', error: error.message });
  }
};

const createSeguroFrota = async (req, res) => {
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;
  try {
    const [newSeguroFrota] = await db('SeguroFrota')
      .insert({
        cliente_id,
        numero_apolice,
        valor_cobertura,
      })
      .returning('*');

    res.status(201).json(newSeguroFrota);
  } catch (error) {
    console.error('Erro ao criar seguro frota:', error);
    res.status(500).json({ message: 'Erro ao criar seguro frota', error: error.message });
  }
};

const updateSeguroFrota = async (req, res) => {
  const { id } = req.params;
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;

  try {
    const seguroFrotaExistente = await db('SeguroFrota').where('id', id).first();
    if (!seguroFrotaExistente) {
      return res.status(404).json({ message: 'Seguro frota não encontrado' });
    }

    await db('SeguroFrota').where('id', id).update({
      cliente_id,
      numero_apolice,
      valor_cobertura,
    });

    const updatedSeguroFrota = await db('SeguroFrota').where('id', id).first();
    res.json(updatedSeguroFrota);
  } catch (error) {
    console.error('Erro ao atualizar seguro frota:', error);
    res.status(500).json({ message: 'Erro ao atualizar seguro frota', error: error.message });
  }
};

const deleteSeguroFrota = async (req, res) => {
  const { id } = req.params;

  try {
    const seguroFrotaExistente = await db('SeguroFrota').where('id', id).first();
    if (!seguroFrotaExistente) {
      return res.status(404).json({ message: 'Seguro frota não encontrado' });
    }

    await db('SeguroFrota').where('id', id).del();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir seguro frota:', error);
    res.status(500).json({ message: 'Erro ao excluir seguro frota', error: error.message });
  }
};

module.exports = { getSegurosFrota, getSeguroFrotaById, createSeguroFrota, updateSeguroFrota, deleteSeguroFrota };