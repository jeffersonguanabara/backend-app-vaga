import express from 'express';
import CultosController from './controllers/CultosController';
import PessoasController from './controllers/PessoasController';

const routes = express.Router();
const cultosController = new CultosController();
const pessoasController = new PessoasController();

routes.get('/pessoas', pessoasController.index);
routes.get('/cultos', cultosController.index);
routes.post('/culto', cultosController.create);

export default routes;