import Candidato from "../Modelo/Candidato.js";

export default class CandidatoCtrl {
    async gravar(req, res) {
        const { cpf, nome, endereco, telefone } = req.body;
        const candidato = new Candidato(cpf, nome, endereco, telefone);
        try {
            await candidato.gravar();
            res.status(200).json({ status: true, mensagem: "Candidato cadastrado com sucesso!" });
        } catch (error) {
            res.status(500).json({ status: false, mensagem: "Erro ao cadastrar candidato: " + error.message });
        }
    }

    async consultar(req, res) {
        let termo = req.params.termo || '';
        const candidato = new Candidato();
        try {
            const listaCandidatos = await candidato.consultar(termo);
            res.status(200).json({ status: true, listaCandidatos });
        } catch (error) {
            res.status(500).json({ status: false, mensagem: "Erro ao consultar candidatos: " + error.message });
        }
    }
}
