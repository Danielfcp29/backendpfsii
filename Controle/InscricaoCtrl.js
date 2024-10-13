import Inscricao from "../Modelo/Inscricao.js";

export default class InscricaoCtrl {
    async gravar(req, res) {
        const { candidatoCpf, vagaCodigo } = req.body;
        const inscricao = new Inscricao(candidatoCpf, vagaCodigo);
        try {
            await inscricao.gravar();
            res.status(200).json({ status: true, mensagem: "Inscrição realizada com sucesso!" });
        } catch (error) {
            res.status(500).json({ status: false, mensagem: "Erro ao realizar a inscrição: " + error.message });
        }
    }

    async consultar(req, res) {
        let termo = req.params.termo || '';
        const inscricao = new Inscricao();
        try {
            const listaInscricoes = await inscricao.consultar(termo);
            res.status(200).json({ status: true, listaInscricoes });
        } catch (error) {
            res.status(500).json({ status: false, mensagem: "Erro ao consultar inscrições: " + error.message });
        }
    }
}
