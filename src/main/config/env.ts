export default {
  port: process.env.PORT ?? 3000,
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongodb:27017/catalog'
}
