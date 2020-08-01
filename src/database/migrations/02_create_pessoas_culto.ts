import Knex from 'knex'

export async function up(knex: Knex) {
  return (
    knex.schema.createTableIfNotExists('pessoas_culto', table => {
      table.increments('id').primary();
      table.timestamp('created_at', { useTz: true, precision: 6 }).defaultTo(knex.fn.now(6));
      table.string('data', 10).notNullable();
      table.integer('pessoa_id')
        .notNullable()
        .references('id')
        .inTable('pessoa');
      table.integer('culto_id')
        .notNullable()
        .references('id')
        .inTable('culto');
    })
  );
}

export async function down(knex : Knex) {
  return knex.schema.dropTableIfExists('pessoas_culto');
}