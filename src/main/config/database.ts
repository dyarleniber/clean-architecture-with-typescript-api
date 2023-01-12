import express, { Express } from 'express'
import setupRoutes from '@main/config/routes'
import Database from '@infrastructure/db/mongodb/helpers/database'
import env from '@main/config/env'

export default async (): Promise<void> => {
  await Database.connect(env.mongoUrl)
  const client = await Database.getClient()

  const app = express()
  setupRoutes(app)
}
