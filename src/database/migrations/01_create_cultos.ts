import Knex from 'knex'

export async function up(knex: Knex) {
  return (
    knex.schema.createTableIfNotExists('culto', table => {
      table.increments('id').primary();
      table.string('dia_da_semana', 30).notNullable();
      table.string('horario', 10).notNullable();
      table.timestamp('created_at', { useTz: true, precision: 6 }).defaultTo(knex.fn.now(6));
    })
  );
}

export async function down(knex : Knex) {
  return knex.schema.dropTableIfExists('culto');
}