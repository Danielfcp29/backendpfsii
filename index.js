import express from 'express';
import cors from 'cors';
import session from 'express-session';
import rotaAutenticacao from './Rotas/rotaAutenticacao.js';
import rotaCategoria from './Rotas/rotaCategoria.js';
import rotaProduto from './Rotas/rotaProduto.js';
import rotaPedido from './Rotas/rotaPedido.js';
import rotaCliente from './Rotas/rotaCliente.js';
import rotaCandidato from './Rotas/rotaCandidato.js';
import rotaVaga from './Rotas/rotaVaga.js';
import rotaInscricao from './Rotas/rotaInscricao.js';
import { verificarAutenticacao } from './Seguranca/autenticar.js';

const app = express();
const host = '0.0.0.0';
const porta = 4000;

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://192.168.0.101:3000"]
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas existentes
app.use('/categoria', verificarAutenticacao, rotaCategoria);
app.use('/produto', verificarAutenticacao, rotaProduto);
app.use('/cliente', verificarAutenticacao, rotaCliente);
app.use('/pedido', verificarAutenticacao, rotaPedido);
app.use('/autenticacao', rotaAutenticacao);

// Novas rotas
app.use('/candidato', rotaCandidato);
app.use('/vaga', rotaVaga);
app.use('/inscricao', rotaInscricao);

app.listen(porta, host, () => {
    console.log(`Servidor rodando no endereço ${host}:${porta}`);
});
