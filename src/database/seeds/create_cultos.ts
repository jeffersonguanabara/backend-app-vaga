import knex from 'knex';
import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('culto').insert([
    { dia_da_semana: 'domingo', horario: '18:00' },
    { dia_da_semana: 'segunda-feira', horario: '19:30'},
    { dia_da_semana: 'quinta-feira', horario: '19:30'},
  ]);
}