-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema boa_vista_seguros
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema boa_vista_seguros
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `boa_vista_seguros` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `boa_vista_seguros` ;

-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`Clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `cpf_cnpj` VARCHAR(20) NOT NULL,
  `telefone` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `endereco` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cpf_cnpj` (`cpf_cnpj` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`Orcamentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`Orcamentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NOT NULL,
  `tipo_seguro` ENUM('residencial', 'automovel', 'frota', 'empresarial', 'reta') NOT NULL,
  `valor_estimado` DECIMAL(15,2) NOT NULL,
  `data_orcamento` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cliente_id` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `Orcamentos_ibfk_1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `boa_vista_seguros`.`Clientes` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`SeguroAutomovel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`SeguroAutomovel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NOT NULL,
  `numero_apolice` VARCHAR(50) NOT NULL,
  `valor_cobertura` DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cliente_id` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `SeguroAutomovel_ibfk_1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `boa_vista_seguros`.`Clientes` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`SeguroEmpresarial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`SeguroEmpresarial` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NOT NULL,
  `numero_apolice` VARCHAR(50) NOT NULL,
  `valor_cobertura` DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cliente_id` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `SeguroEmpresarial_ibfk_1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `boa_vista_seguros`.`Clientes` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`SeguroFrota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`SeguroFrota` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NOT NULL,
  `numero_apolice` VARCHAR(50) NOT NULL,
  `valor_cobertura` DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cliente_id` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `SeguroFrota_ibfk_1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `boa_vista_seguros`.`Clientes` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`SeguroRETA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`SeguroRETA` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NOT NULL,
  `numero_apolice` VARCHAR(50) NOT NULL,
  `valor_cobertura` DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cliente_id` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `SeguroRETA_ibfk_1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `boa_vista_seguros`.`Clientes` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`SeguroResidencial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`SeguroResidencial` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NOT NULL,
  `numero_apolice` VARCHAR(50) NOT NULL,
  `valor_cobertura` DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cliente_id` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `SeguroResidencial_ibfk_1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `boa_vista_seguros`.`Clientes` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `boa_vista_seguros`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`Usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `tipo_usuario` ENUM('admin', 'colaborador') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `boa_vista_seguros` ;

-- -----------------------------------------------------
-- Placeholder table for view `boa_vista_seguros`.`vw_clientes_com_seguros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`vw_clientes_com_seguros` (`cliente_id` INT, `cliente_nome` INT, `cliente_cpf_cnpj` INT, `cliente_telefone` INT, `cliente_email` INT, `cliente_endereco` INT, `seguro_residencial_apolice` INT, `seguro_automovel_apolice` INT, `seguro_frota_apolice` INT, `seguro_empresarial_apolice` INT, `seguro_reta_apolice` INT);

-- -----------------------------------------------------
-- Placeholder table for view `boa_vista_seguros`.`vw_clientes_orcamentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`vw_clientes_orcamentos` (`cliente_id` INT, `cliente_nome` INT, `cliente_cpf_cnpj` INT, `orcamento_tipo_seguro` INT, `orcamento_valor_estimado` INT, `orcamento_data` INT);

-- -----------------------------------------------------
-- Placeholder table for view `boa_vista_seguros`.`vw_detalhes_seguros_com_clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`vw_detalhes_seguros_com_clientes` (`cliente_id` INT, `cliente_nome` INT, `cliente_cpf_cnpj` INT, `cliente_telefone` INT, `cliente_email` INT, `seguro_residencial_apolice` INT, `seguro_residencial_valor_cobertura` INT, `seguro_automovel_apolice` INT, `seguro_automovel_valor_cobertura` INT, `seguro_frota_apolice` INT, `seguro_frota_valor_cobertura` INT, `seguro_empresarial_apolice` INT, `seguro_empresarial_valor_cobertura` INT, `seguro_reta_apolice` INT, `seguro_reta_valor_cobertura` INT);

-- -----------------------------------------------------
-- Placeholder table for view `boa_vista_seguros`.`vw_geral_boavista_seguros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`vw_geral_boavista_seguros` (`usuario_id` INT, `usuario_nome` INT, `usuario_email` INT, `usuario_senha` INT, `usuario_tipo` INT, `cliente_id` INT, `cliente_nome` INT, `cliente_cpf_cnpj` INT, `cliente_telefone` INT, `cliente_email` INT, `cliente_endereco` INT, `orcamento_id` INT, `orcamento_tipo_seguro` INT, `orcamento_valor_estimado` INT, `orcamento_data` INT, `seguro_residencial_id` INT, `seguro_residencial_numero_apolice` INT, `seguro_residencial_valor_cobertura` INT, `seguro_automovel_id` INT, `seguro_automovel_numero_apolice` INT, `seguro_automovel_valor_cobertura` INT, `seguro_frota_id` INT, `seguro_frota_numero_apolice` INT, `seguro_frota_valor_cobertura` INT, `seguro_empresarial_id` INT, `seguro_empresarial_numero_apolice` INT, `seguro_empresarial_valor_cobertura` INT, `seguro_reta_id` INT, `seguro_reta_numero_apolice` INT, `seguro_reta_valor_cobertura` INT);

-- -----------------------------------------------------
-- Placeholder table for view `boa_vista_seguros`.`vw_seguros_por_tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`vw_seguros_por_tipo` (`tipo_seguro` INT, `quantidade_apolices` INT, `total_cobertura` INT);

-- -----------------------------------------------------
-- Placeholder table for view `boa_vista_seguros`.`vw_usuarios_intranet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `boa_vista_seguros`.`vw_usuarios_intranet` (`usuario_id` INT, `usuario_nome` INT, `usuario_email` INT, `usuario_tipo` INT);

-- -----------------------------------------------------
-- View `boa_vista_seguros`.`vw_clientes_com_seguros`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `boa_vista_seguros`.`vw_clientes_com_seguros`;
USE `boa_vista_seguros`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`feob`@`%` SQL SECURITY DEFINER VIEW `boa_vista_seguros`.`vw_clientes_com_seguros` AS select `c`.`id` AS `cliente_id`,`c`.`nome` AS `cliente_nome`,`c`.`cpf_cnpj` AS `cliente_cpf_cnpj`,`c`.`telefone` AS `cliente_telefone`,`c`.`email` AS `cliente_email`,`c`.`endereco` AS `cliente_endereco`,`sr`.`numero_apolice` AS `seguro_residencial_apolice`,`sa`.`numero_apolice` AS `seguro_automovel_apolice`,`sf`.`numero_apolice` AS `seguro_frota_apolice`,`se`.`numero_apolice` AS `seguro_empresarial_apolice`,`sreta`.`numero_apolice` AS `seguro_reta_apolice` from (((((`boa_vista_seguros`.`Clientes` `c` left join `boa_vista_seguros`.`SeguroResidencial` `sr` on((`sr`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroAutomovel` `sa` on((`sa`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroFrota` `sf` on((`sf`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroEmpresarial` `se` on((`se`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroRETA` `sreta` on((`sreta`.`cliente_id` = `c`.`id`)));

-- -----------------------------------------------------
-- View `boa_vista_seguros`.`vw_clientes_orcamentos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `boa_vista_seguros`.`vw_clientes_orcamentos`;
USE `boa_vista_seguros`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`feob`@`%` SQL SECURITY DEFINER VIEW `boa_vista_seguros`.`vw_clientes_orcamentos` AS select `c`.`id` AS `cliente_id`,`c`.`nome` AS `cliente_nome`,`c`.`cpf_cnpj` AS `cliente_cpf_cnpj`,`o`.`tipo_seguro` AS `orcamento_tipo_seguro`,`o`.`valor_estimado` AS `orcamento_valor_estimado`,`o`.`data_orcamento` AS `orcamento_data` from (`boa_vista_seguros`.`Clientes` `c` join `boa_vista_seguros`.`Orcamentos` `o` on((`o`.`cliente_id` = `c`.`id`)));

-- -----------------------------------------------------
-- View `boa_vista_seguros`.`vw_detalhes_seguros_com_clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `boa_vista_seguros`.`vw_detalhes_seguros_com_clientes`;
USE `boa_vista_seguros`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`feob`@`%` SQL SECURITY DEFINER VIEW `boa_vista_seguros`.`vw_detalhes_seguros_com_clientes` AS select `c`.`id` AS `cliente_id`,`c`.`nome` AS `cliente_nome`,`c`.`cpf_cnpj` AS `cliente_cpf_cnpj`,`c`.`telefone` AS `cliente_telefone`,`c`.`email` AS `cliente_email`,`sr`.`numero_apolice` AS `seguro_residencial_apolice`,`sr`.`valor_cobertura` AS `seguro_residencial_valor_cobertura`,`sa`.`numero_apolice` AS `seguro_automovel_apolice`,`sa`.`valor_cobertura` AS `seguro_automovel_valor_cobertura`,`sf`.`numero_apolice` AS `seguro_frota_apolice`,`sf`.`valor_cobertura` AS `seguro_frota_valor_cobertura`,`se`.`numero_apolice` AS `seguro_empresarial_apolice`,`se`.`valor_cobertura` AS `seguro_empresarial_valor_cobertura`,`sreta`.`numero_apolice` AS `seguro_reta_apolice`,`sreta`.`valor_cobertura` AS `seguro_reta_valor_cobertura` from (((((`boa_vista_seguros`.`Clientes` `c` left join `boa_vista_seguros`.`SeguroResidencial` `sr` on((`sr`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroAutomovel` `sa` on((`sa`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroFrota` `sf` on((`sf`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroEmpresarial` `se` on((`se`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroRETA` `sreta` on((`sreta`.`cliente_id` = `c`.`id`)));

-- -----------------------------------------------------
-- View `boa_vista_seguros`.`vw_geral_boavista_seguros`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `boa_vista_seguros`.`vw_geral_boavista_seguros`;
USE `boa_vista_seguros`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`feob`@`%` SQL SECURITY DEFINER VIEW `boa_vista_seguros`.`vw_geral_boavista_seguros` AS select `u`.`id` AS `usuario_id`,`u`.`nome` AS `usuario_nome`,`u`.`email` AS `usuario_email`,`u`.`senha` AS `usuario_senha`,`u`.`tipo_usuario` AS `usuario_tipo`,`c`.`id` AS `cliente_id`,`c`.`nome` AS `cliente_nome`,`c`.`cpf_cnpj` AS `cliente_cpf_cnpj`,`c`.`telefone` AS `cliente_telefone`,`c`.`email` AS `cliente_email`,`c`.`endereco` AS `cliente_endereco`,`o`.`id` AS `orcamento_id`,`o`.`tipo_seguro` AS `orcamento_tipo_seguro`,`o`.`valor_estimado` AS `orcamento_valor_estimado`,`o`.`data_orcamento` AS `orcamento_data`,`sr`.`id` AS `seguro_residencial_id`,`sr`.`numero_apolice` AS `seguro_residencial_numero_apolice`,`sr`.`valor_cobertura` AS `seguro_residencial_valor_cobertura`,`sa`.`id` AS `seguro_automovel_id`,`sa`.`numero_apolice` AS `seguro_automovel_numero_apolice`,`sa`.`valor_cobertura` AS `seguro_automovel_valor_cobertura`,`sf`.`id` AS `seguro_frota_id`,`sf`.`numero_apolice` AS `seguro_frota_numero_apolice`,`sf`.`valor_cobertura` AS `seguro_frota_valor_cobertura`,`se`.`id` AS `seguro_empresarial_id`,`se`.`numero_apolice` AS `seguro_empresarial_numero_apolice`,`se`.`valor_cobertura` AS `seguro_empresarial_valor_cobertura`,`sreta`.`id` AS `seguro_reta_id`,`sreta`.`numero_apolice` AS `seguro_reta_numero_apolice`,`sreta`.`valor_cobertura` AS `seguro_reta_valor_cobertura` from (((((((`boa_vista_seguros`.`Usuarios` `u` join `boa_vista_seguros`.`Clientes` `c` on((`c`.`id` = `u`.`id`))) join `boa_vista_seguros`.`Orcamentos` `o` on((`o`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroResidencial` `sr` on((`sr`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroAutomovel` `sa` on((`sa`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroFrota` `sf` on((`sf`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroEmpresarial` `se` on((`se`.`cliente_id` = `c`.`id`))) left join `boa_vista_seguros`.`SeguroRETA` `sreta` on((`sreta`.`cliente_id` = `c`.`id`)));

-- -----------------------------------------------------
-- View `boa_vista_seguros`.`vw_seguros_por_tipo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `boa_vista_seguros`.`vw_seguros_por_tipo`;
USE `boa_vista_seguros`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`feob`@`%` SQL SECURITY DEFINER VIEW `boa_vista_seguros`.`vw_seguros_por_tipo` AS select 'Residencial' AS `tipo_seguro`,count(`sr`.`id`) AS `quantidade_apolices`,sum(`sr`.`valor_cobertura`) AS `total_cobertura` from `boa_vista_seguros`.`SeguroResidencial` `sr` union all select 'Automóvel' AS `tipo_seguro`,count(`sa`.`id`) AS `quantidade_apolices`,sum(`sa`.`valor_cobertura`) AS `total_cobertura` from `boa_vista_seguros`.`SeguroAutomovel` `sa` union all select 'Frota' AS `tipo_seguro`,count(`sf`.`id`) AS `quantidade_apolices`,sum(`sf`.`valor_cobertura`) AS `total_cobertura` from `boa_vista_seguros`.`SeguroFrota` `sf` union all select 'Empresarial' AS `tipo_seguro`,count(`se`.`id`) AS `quantidade_apolices`,sum(`se`.`valor_cobertura`) AS `total_cobertura` from `boa_vista_seguros`.`SeguroEmpresarial` `se` union all select 'RETA' AS `tipo_seguro`,count(`sreta`.`id`) AS `quantidade_apolices`,sum(`sreta`.`valor_cobertura`) AS `total_cobertura` from `boa_vista_seguros`.`SeguroRETA` `sreta`;

-- -----------------------------------------------------
-- View `boa_vista_seguros`.`vw_usuarios_intranet`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `boa_vista_seguros`.`vw_usuarios_intranet`;
USE `boa_vista_seguros`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`feob`@`%` SQL SECURITY DEFINER VIEW `boa_vista_seguros`.`vw_usuarios_intranet` AS select `u`.`id` AS `usuario_id`,`u`.`nome` AS `usuario_nome`,`u`.`email` AS `usuario_email`,`u`.`tipo_usuario` AS `usuario_tipo` from `boa_vista_seguros`.`Usuarios` `u`;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
