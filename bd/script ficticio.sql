-- Inserindo dados fictícios na tabela Usuarios
INSERT INTO `Usuarios` (`nome`, `email`, `senha`, `tipo_usuario`) VALUES
('João Silva', 'joao@boavistaseguros.com', 'senha123', 'admin'),
('Maria Oliveira', 'maria@boavistaseguros.com', 'senha123', 'colaborador'),
('Carlos Souza', 'carlos@boavistaseguros.com', 'senha123', 'colaborador'),
('Ana Santos', 'ana@boavistaseguros.com', 'senha123', 'colaborador'),
('Pedro Almeida', 'pedro@boavistaseguros.com', 'senha123', 'admin');

-- Inserindo dados fictícios na tabela Clientes
INSERT INTO `Clientes` (`nome`, `cpf_cnpj`, `telefone`, `email`, `endereco`) VALUES
('Carlos Oliveira', '12345678901', '1234-5678', 'carlos@cliente.com', 'Rua A, 123'),
('Fernanda Costa', '98765432109', '2345-6789', 'fernanda@cliente.com', 'Rua B, 456'),
('Juliana Pereira', '11223344556', '3456-7890', 'juliana@cliente.com', 'Rua C, 789'),
('Eduardo Lima', '99887766544', '4567-8901', 'eduardo@cliente.com', 'Rua D, 101'),
('Patrícia Martins', '22334455667', '5678-9012', 'patricia@cliente.com', 'Rua E, 202');

-- Inserindo dados fictícios na tabela Orcamentos
INSERT INTO `Orcamentos` (`cliente_id`, `tipo_seguro`, `valor_estimado`, `data_orcamento`) VALUES
(1, 'residencial', 150000.00, '2025-01-10'),
(2, 'automovel', 50000.00, '2025-01-11'),
(3, 'frota', 200000.00, '2025-01-12'),
(4, 'empresarial', 300000.00, '2025-01-13'),
(5, 'reta', 100000.00, '2025-01-14');

-- Inserindo dados fictícios na tabela SeguroResidencial
INSERT INTO `SeguroResidencial` (`cliente_id`, `numero_apolice`, `valor_cobertura`) VALUES
(1, 'SR12345', 200000.00),
(2, 'SR67890', 180000.00),
(3, 'SR11223', 220000.00),
(4, 'SR44556', 250000.00),
(5, 'SR78901', 210000.00);

-- Inserindo dados fictícios na tabela SeguroAutomovel
INSERT INTO `SeguroAutomovel` (`cliente_id`, `numero_apolice`, `valor_cobertura`) VALUES
(1, 'SA12345', 50000.00),
(2, 'SA67890', 60000.00),
(3, 'SA11223', 55000.00),
(4, 'SA44556', 45000.00),
(5, 'SA78901', 65000.00);

-- Inserindo dados fictícios na tabela SeguroFrota
INSERT INTO `SeguroFrota` (`cliente_id`, `numero_apolice`, `valor_cobertura`) VALUES
(1, 'SF12345', 500000.00),
(2, 'SF67890', 450000.00),
(3, 'SF11223', 600000.00),
(4, 'SF44556', 700000.00),
(5, 'SF78901', 550000.00);

-- Inserindo dados fictícios na tabela SeguroEmpresarial
INSERT INTO `SeguroEmpresarial` (`cliente_id`, `numero_apolice`, `valor_cobertura`) VALUES
(1, 'SE12345', 300000.00),
(2, 'SE67890', 350000.00),
(3, 'SE11223', 400000.00),
(4, 'SE44556', 450000.00),
(5, 'SE78901', 500000.00);

-- Inserindo dados fictícios na tabela SeguroRETA
INSERT INTO `SeguroRETA` (`cliente_id`, `numero_apolice`, `valor_cobertura`) VALUES
(1, 'SR12345', 100000.00),
(2, 'SR67890', 120000.00),
(3, 'SR11223', 130000.00),
(4, 'SR44556', 140000.00),
(5, 'SR78901', 150000.00);
