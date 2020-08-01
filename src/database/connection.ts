import knex from 'knex';

const connection = knex({
    client: 'pg',
    version: '8.3.0',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'root',
        database : 'ibm_cultos'
    }
});

export default connection;