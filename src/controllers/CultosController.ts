import { Request, Response } from 'express';
import knex from '../database/connection';

class CultosController {
  async create(request: Request, response: Response) {
    const {
        nome,
        data,
        culto
    } = request.body;

    // const trx = await knex.transaction();

    const existe = await knex('pessoa')
        .where({nome: nome})
        .first()
    
    console.log(existe);    
        
    const contador = await knex('pessoas_culto')
        .where({ data: data })
        .count({count:'*'});
    console.log('começou o contador');
    console.log(contador);

    var numero = Number(contador[0].count);
        
    if (!existe || typeof(existe) === 'undefined') {
        console.log("entrou no pessoa não existente");
        
        await knex('pessoa').insert({ nome });

        const pessoa = await knex('pessoa').where({nome: nome}).first();

        const pessoa_id = pessoa.id;
        console.log('pessoa_id: ', pessoa_id);

        const pessoasCulto = culto.map((culto_id: number) => {
            return {
                culto_id,
                data: data,
                pessoa_id,
            }
        })
        
        if (numero <= 62) {
            await knex('pessoas_culto').insert(pessoasCulto);
        } else {
            return response.json({ message : 'Não tem mais vagas!'});
        }
    } else {
        const pessoasCulto = culto.map((culto_id: number) => {
            return {
                culto_id: 0,
                data: data,
                pessoa_id: existe.id,
            }
        })

        const exiteNoCulto = await knex('pessoas_culto')
            .where({
                culto_id: pessoasCulto.culto_id,
                data: pessoasCulto.data,
                pessoa_id: pessoasCulto.pessoa_id,
            })
            .first();
        
        if (!exiteNoCulto) {
            if (numero <= 62) {
                await knex('pessoas_culto').insert(pessoasCulto);
            } else {
                return response.json({ message: 'Não há mais vagas!'})
            }
        } else {
            return response.json({ message : 'Nome já consta na lista!' })
        }
    }

    // await trx.commit();
    
    return response.json({ message : "Vaga reservada com sucesso!"});
  }

  async index(request: Request, response: Response) {
    const cultos = await knex('culto').select('*');

    const serialiedCultos = cultos.map(culto => {
        return {
            id: culto.id,
            dia: culto.dia_da_semana,
            horario: culto.horario,
        };
    });

    return response.json(serialiedCultos);
  }
}

export default CultosController;