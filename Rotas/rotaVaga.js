import { Router } from "express";
import VagaCtrl from "../Controle/VagaCtrl.js";

const rotaVaga = new Router();
const vagaCtrl = new VagaCtrl();

rotaVaga.post('/', vagaCtrl.gravar);
rotaVaga.get('/:termo', vagaCtrl.consultar);
rotaVaga.get('/', vagaCtrl.consultar);

export default rotaVaga;
