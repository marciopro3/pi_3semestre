const db = require('../config/db');

const getSegurosEmpresarial = async (req, res) => {
  try {
    const segurosEmpresarial = await db('SeguroEmpresarial');
    res.json(segurosEmpresarial);
  } catch (error) {
    console.error('Erro ao buscar seguros empresarial:', error);
    res.status(500).json({ message: 'Erro ao buscar seguros empresarial', error: error.message });
  }
};

const getSeguroEmpresarialById = async (req, res) => {
  const { id } = req.params;
  try {
    const seguroEmpresarial = await db('SeguroEmpresarial').where('id', id).first();
    if (!seguroEmpresarial) {
      return res.status(404).json({ message: 'Seguro empresarial não encontrado' });
    }
    res.json(seguroEmpresarial);
  } catch (error) {
    console.error('Erro ao buscar seguro empresarial:', error);
    res.status(500).json({ message: 'Erro ao buscar seguro empresarial', error: error.message });
  }
};

const createSeguroEmpresarial = async (req, res) => {
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;
  try {
    const [newSeguroEmpresarial] = await db('SeguroEmpresarial')
      .insert({
        cliente_id,
        numero_apolice,
        valor_cobertura,
      })
      .returning('*');

    res.status(201).json(newSeguroEmpresarial);
  } catch (error) {
    console.error('Erro ao criar seguro empresarial:', error);
    res.status(500).json({ message: 'Erro ao criar seguro empresarial', error: error.message });
  }
};

const updateSeguroEmpresarial = async (req, res) => {
  const { id } = req.params;
  const { cliente_id, numero_apolice, valor_cobertura } = req.body;

  try {
    const seguroEmpresarialExistente = await db('SeguroEmpresarial').where('id', id).first();
    if (!seguroEmpresarialExistente) {
      return res.status(404).json({ message: 'Seguro empresarial não encontrado' });
    }

    await db('SeguroEmpresarial').where('id', id).update({
      cliente_id,
      numero_apolice,
      valor_cobertura,
    });

    const updatedSeguroEmpresarial = await db('SeguroEmpresarial').where('id', id).first();
    res.json(updatedSeguroEmpresarial);
  } catch (error) {
    console.error('Erro ao atualizar seguro empresarial:', error);
    res.status(500).json({ message: 'Erro ao atualizar seguro empresarial', error: error.message });
  }
};

const deleteSeguroEmpresarial = async (req, res) => {
  const { id } = req.params;

  try {
    const seguroEmpresarialExistente = await db('SeguroEmpresarial').where('id', id).first();
    if (!seguroEmpresarialExistente) {
      return res.status(404).json({ message: 'Seguro empresarial não encontrado' });
    }

    await db('SeguroEmpresarial').where('id', id).del();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir seguro empresarial:', error);
    res.status(500).json({ message: 'Erro ao excluir seguro empresarial', error: error.message });
  }
};

module.exports = { 
  getSegurosEmpresarial, 
  getSeguroEmpresarialById, 
  createSeguroEmpresarial, 
  updateSeguroEmpresarial, 
  deleteSeguroEmpresarial 
};