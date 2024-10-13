import conectar from './conexao.js';

export default class InscricaoDAO {
    async gravar(inscricao) {
        const conexao = await conectar();
        const sql = 'INSERT INTO inscricao (cand_cpf, vaga_codigo, data_inscricao) VALUES (?, ?, ?)';
        const valores = [inscricao.candidatoCpf, inscricao.vagaCodigo, inscricao.dataInscricao];
        await conexao.query(sql, valores);
        conexao.release();  // Correção
    }

    async consultar(termo) {
        const conexao = await conectar();
        const sql = `
            SELECT c.cand_nome, v.vaga_cargo, i.data_inscricao 
            FROM inscricao i
            JOIN candidato c ON c.cand_cpf = i.cand_cpf
            JOIN vaga v ON v.vaga_codigo = i.vaga_codigo
            WHERE c.cand_nome LIKE ? OR v.vaga_cargo LIKE ?
        `;
        const [rows] = await conexao.query(sql, [`%${termo}%`, `%${termo}%`]);
        conexao.release();  // Correção
        return rows;
    }
}
