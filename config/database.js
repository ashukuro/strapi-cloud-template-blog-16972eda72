export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    // WICHTIG: Diese Zeile verhindert das Laden von better-sqlite3 lokal
    pool: { min: 0, max: 1 },
    acquireConnectionTimeout: 5000000,
    debug: false,
  },
});