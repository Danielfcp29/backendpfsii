import CandidatoDAO from "../Persistencia/candidatoDAO.js";

export default class Candidato {
    #cpf;
    #nome;
    #endereco;
    #telefone;

    constructor(cpf, nome, endereco, telefone) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#telefone = telefone;
    }

    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }

    get endereco() {
        return this.#endereco;
    }

    get telefone() {
        return this.#telefone;
    }

    toJSON() {
        return {
            cpf: this.#cpf,
            nome: this.#nome,
            endereco: this.#endereco,
            telefone: this.#telefone
        };
    }

    async gravar() {
        const candidatoDAO = new CandidatoDAO();
        await candidatoDAO.gravar(this);
    }

    async consultar(termo) {
        const candidatoDAO = new CandidatoDAO();
        return await candidatoDAO.consultar(termo);
    }
}
