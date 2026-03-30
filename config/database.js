module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: parseInt(env('DATABASE_PORT', '5432')),
      database: env('DATABASE_NAME', 'slim'),
      user: env('DATABASE_USER', 'user'),
      password: env('DATABASE_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: true,
  },
});
