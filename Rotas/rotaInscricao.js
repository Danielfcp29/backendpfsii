import { Router } from "express";
import InscricaoCtrl from "../Controle/InscricaoCtrl.js";

const rotaInscricao = new Router();
const inscricaoCtrl = new InscricaoCtrl();

rotaInscricao.post('/', inscricaoCtrl.gravar);
rotaInscricao.get('/:termo', inscricaoCtrl.consultar);
rotaInscricao.get('/', inscricaoCtrl.consultar);

export default rotaInscricao;
