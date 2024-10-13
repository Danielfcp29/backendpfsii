import VagaDAO from "../Persistencia/vagaDAO.js";

export default class Vaga {
    #codigo;
    #cargo;
    #salario;
    #cidade;

    constructor(codigo, cargo, salario, cidade) {
        this.#codigo = codigo;
        this.#cargo = cargo;
        this.#salario = salario;
        this.#cidade = cidade;
    }

    get codigo() {
        return this.#codigo;
    }

    get cargo() {
        return this.#cargo;
    }

    get salario() {
        return this.#salario;
    }

    get cidade() {
        return this.#cidade;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            cargo: this.#cargo,
            salario: this.#salario,
            cidade: this.#cidade
        };
    }

    async gravar() {
        const vagaDAO = new VagaDAO();
        await vagaDAO.gravar(this);
    }

    async consultar(termo) {
        const vagaDAO = new VagaDAO();
        return await vagaDAO.consultar(termo);
    }
}
