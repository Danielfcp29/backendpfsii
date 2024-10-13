import Vaga from "../Modelo/Vaga.js";

export default class VagaCtrl {
    async gravar(req, res) {
        const { codigo, cargo, salario, cidade } = req.body;
        const vaga = new Vaga(codigo, cargo, salario, cidade);
        try {
            await vaga.gravar();
            res.status(200).json({ status: true, mensagem: "Vaga cadastrada com sucesso!" });
        } catch (error) {
            res.status(500).json({ status: false, mensagem: "Erro ao cadastrar vaga: " + error.message });
        }
    }

    async consultar(req, res) {
        let termo = req.params.termo || '';
        const vaga = new Vaga();
        try {
            const listaVagas = await vaga.consultar(termo);
            res.status(200).json({ status: true, listaVagas });
        } catch (error) {
            res.status(500).json({ status: false, mensagem: "Erro ao consultar vagas: " + error.message });
        }
    }
}
