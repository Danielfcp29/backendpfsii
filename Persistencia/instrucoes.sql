-- Tabela de Candidatos
CREATE TABLE candidato (
    cand_cpf VARCHAR(11) PRIMARY KEY,
    cand_nome VARCHAR(100) NOT NULL,
    cand_endereco VARCHAR(200) NOT NULL,
    cand_telefone VARCHAR(15) NOT NULL
);

-- Tabela de Vagas
CREATE TABLE vaga (
    vaga_codigo INT AUTO_INCREMENT PRIMARY KEY,
    vaga_cargo VARCHAR(100) NOT NULL,
    vaga_salario DECIMAL(10, 2) NOT NULL,
    vaga_cidade VARCHAR(100) NOT NULL
);

-- Tabela de Inscrições (Muitos para Muitos entre Candidato e Vaga)
CREATE TABLE inscricao (
    cand_cpf VARCHAR(11),
    vaga_codigo INT,
    data_inscricao DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (cand_cpf, vaga_codigo),
    FOREIGN KEY (cand_cpf) REFERENCES candidato(cand_cpf) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (vaga_codigo) REFERENCES vaga(vaga_codigo) ON DELETE CASCADE ON UPDATE CASCADE
);