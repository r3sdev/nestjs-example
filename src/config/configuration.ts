export default () => ({
  server: {
    scheme: process.env.SCHEME || 'http',
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    uri: process.env.MONGO_URI,
    name: process.env.MONGO_DB_NAME
  },
})