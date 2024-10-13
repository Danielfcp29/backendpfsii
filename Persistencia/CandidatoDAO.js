import conectar from './conexao.js'; // Certifique-se de que sua função de conexão ao banco de dados está correta

export default class CandidatoDAO {
    async gravar(candidato) {
        const conexao = await conectar();
        const sql = 'INSERT INTO candidato (cand_cpf, cand_nome, cand_endereco, cand_telefone) VALUES (?, ?, ?, ?)';
        const valores = [candidato.cpf, candidato.nome, candidato.endereco, candidato.telefone];
        await conexao.query(sql, valores);
        conexao.release();  // Correção: substitua conexao.end() por conexao.release()
    }

    async consultar(termo) {
        const conexao = await conectar();
        const sql = 'SELECT cand_cpf AS cpf, cand_nome AS nome, cand_endereco AS endereco, cand_telefone AS telefone FROM candidato WHERE cand_nome LIKE ?';
        const [rows] = await conexao.query(sql, [`%${termo}%`]);
        conexao.release();
        return rows;
      }

    async consultarPorCpf(cpf) {
        const conexao = await conectar();
        const sql = 'SELECT * FROM candidato WHERE cand_cpf = ?';
        const [rows] = await conexao.query(sql, [cpf]);
        conexao.release();  // Correção
        return rows[0];
    }
}
