import { Request, Response } from 'express';
import knex from '../database/connection';

class PessoasController {

  async index(request: Request, response: Response) {
    
    const pessoas = await knex.from('pessoas_culto')
        .innerJoin('pessoa', 'pessoas_culto.pessoa_id', 'pessoa.id')
        .innerJoin('culto', 'pessoas_culto.culto_id', 'culto.id')
        .where({data: "02/08/2020"})
        .orderBy('pessoa.nome', 'asc')
        .select('pessoa.nome', 'culto.dia_da_semana', 'culto.horario', 'pessoas_culto.data')
        
    return response.json(pessoas);
  }
}

export default PessoasController;