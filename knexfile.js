const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/pintereach";

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/pintereach.db3'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'pintereach',
      user: 'postgres',
      password: 'GreatDays6617'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }

};
