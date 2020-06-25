// const pgConnection = ;
// `postgres://${process.env.DB_PRODUCTION_USER}:${process.env.DB_PRODUCTION_PW}@${process.env.DB_PRODUCTION_HOST}:${process.env.DB_PRODUCTION_PORT}/${process.env.DATABASE_PRODUCTION}`
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/pintereach.db3'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    // connection: `postgres://${process.env.DB_PRODUCTION_USER}:${process.env.DB_PRODUCTION_PW}@${process.env.DB_PRODUCTION_HOST}:${process.env.DB_PRODUCTION_PORT}/${process.env.DATABASE_PRODUCTION}`,
    connection: "postgres://gmcwvelwfqluqr:861e1178c1888eee75a59835649267028ef2b92ee941260d7c41e8676c9f68ae@ec2-52-200-48-116.compute-1.amazonaws.com:5432/d1qnjcia4l4qd5",
    searchPath: ["public"],
    options: {
      schema: "public"
    },
    useNullAsDefault: true,
    // connection: {
    //   database: 'pintereach',
    //   user:     'postgres',
    //   password: 'GreatDays6617'
    // },
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
