CREATE VIEW `vw_geral_boavista_seguros` AS
SELECT 
    -- Tabela Usuarios
    u.id AS usuario_id,
    u.nome AS usuario_nome,
    u.email AS usuario_email,
    u.senha AS usuario_senha,
    u.tipo_usuario AS usuario_tipo,

    -- Tabela Clientes
    c.id AS cliente_id,
    c.nome AS cliente_nome,
    c.cpf_cnpj AS cliente_cpf_cnpj,
    c.telefone AS cliente_telefone,
    c.email AS cliente_email,
    c.endereco AS cliente_endereco,

    -- Tabela Orcamentos
    o.id AS orcamento_id,
    o.tipo_seguro AS orcamento_tipo_seguro,
    o.valor_estimado AS orcamento_valor_estimado,
    o.data_orcamento AS orcamento_data,

    -- Tabela SeguroResidencial
    sr.id AS seguro_residencial_id,
    sr.numero_apolice AS seguro_residencial_numero_apolice,
    sr.valor_cobertura AS seguro_residencial_valor_cobertura,

    -- Tabela SeguroAutomovel
    sa.id AS seguro_automovel_id,
    sa.numero_apolice AS seguro_automovel_numero_apolice,
    sa.valor_cobertura AS seguro_automovel_valor_cobertura,

    -- Tabela SeguroFrota
    sf.id AS seguro_frota_id,
    sf.numero_apolice AS seguro_frota_numero_apolice,
    sf.valor_cobertura AS seguro_frota_valor_cobertura,

    -- Tabela SeguroEmpresarial
    se.id AS seguro_empresarial_id,
    se.numero_apolice AS seguro_empresarial_numero_apolice,
    se.valor_cobertura AS seguro_empresarial_valor_cobertura,

    -- Tabela SeguroRETA
    sreta.id AS seguro_reta_id,
    sreta.numero_apolice AS seguro_reta_numero_apolice,
    sreta.valor_cobertura AS seguro_reta_valor_cobertura

FROM 
    `Usuarios` u
JOIN 
    `Clientes` c ON c.id = u.id
JOIN 
    `Orcamentos` o ON o.cliente_id = c.id
LEFT JOIN 
    `SeguroResidencial` sr ON sr.cliente_id = c.id
LEFT JOIN 
    `SeguroAutomovel` sa ON sa.cliente_id = c.id
LEFT JOIN 
    `SeguroFrota` sf ON sf.cliente_id = c.id
LEFT JOIN 
    `SeguroEmpresarial` se ON se.cliente_id = c.id
LEFT JOIN 
    `SeguroRETA` sreta ON sreta.cliente_id = c.id;
