import InscricaoDAO from "../Persistencia/inscricaoDAO.js";

export default class Inscricao {
    #candidatoCpf;
    #vagaCodigo;
    #dataInscricao;

    constructor(candidatoCpf, vagaCodigo, dataInscricao = new Date()) {
        this.#candidatoCpf = candidatoCpf;
        this.#vagaCodigo = vagaCodigo;
        this.#dataInscricao = dataInscricao;
    }

    get candidatoCpf() {
        return this.#candidatoCpf;
    }

    get vagaCodigo() {
        return this.#vagaCodigo;
    }

    get dataInscricao() {
        return this.#dataInscricao;
    }

    toJSON() {
        return {
            candidatoCpf: this.#candidatoCpf,
            vagaCodigo: this.#vagaCodigo,
            dataInscricao: this.#dataInscricao
        };
    }

    async gravar() {
        const inscricaoDAO = new InscricaoDAO();
        await inscricaoDAO.gravar(this);
    }

    async consultar(termo) {
        const inscricaoDAO = new InscricaoDAO();
        return await inscricaoDAO.consultar(termo);
    }
}
