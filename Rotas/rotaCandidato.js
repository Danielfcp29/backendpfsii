import { Router } from "express";
import CandidatoCtrl from "../Controle/CandidatoCtrl.js";

const rotaCandidato = new Router();
const candidatoCtrl = new CandidatoCtrl();

rotaCandidato.post('/', candidatoCtrl.gravar);
rotaCandidato.get('/:termo', candidatoCtrl.consultar);
rotaCandidato.get('/', candidatoCtrl.consultar);

export default rotaCandidato;
