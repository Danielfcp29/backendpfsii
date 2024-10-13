import conectar from './conexao.js';

export default class VagaDAO {
    async gravar(vaga) {
        const conexao = await conectar();
        const sql = 'INSERT INTO vaga (vaga_codigo, vaga_cargo, vaga_salario, vaga_cidade) VALUES (?, ?, ?, ?)';
        const valores = [vaga.codigo, vaga.cargo, vaga.salario, vaga.cidade];
        await conexao.query(sql, valores);
        conexao.release();  // Correção
    }

    async consultar(termo) {
        const conexao = await conectar();
        const sql = 'SELECT * FROM vaga WHERE vaga_cargo LIKE ?';
        const [rows] = await conexao.query(sql, [`%${termo}%`]);
        conexao.release();  // Correção
        return rows;
    }
}
