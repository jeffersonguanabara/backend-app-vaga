import path from 'path';

module.exports = {
  client: 'pg',
  connection: { 
    user: 'postgres',
    password: 'root', 
    database: 'ibm_cultos' 
  },
  migrations: { 
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: { 
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  } 
};