import Knex from 'knex'

export async function up(knex: Knex) {
  return (
    knex.schema.createTableIfNotExists('pessoa', table => {
      table.increments('id').primary();
      table.string('nome', 255).notNullable();
      table.timestamp('created_at', { useTz: true, precision: 6 }).defaultTo(knex.fn.now(6));
    })
  );
}

export async function down(knex : Knex) {
  return knex.schema.dropTableIfExists('pessoa');
}