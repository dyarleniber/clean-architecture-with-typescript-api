import { MongoClient } from 'mongodb'

import { bodyParser } from '@main/middlewares/body-parser'
import { cors } from '@main/middlewares/cors'
import { contentType } from '@main/middlewares/content-type'

export default (client: MongoClient): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
