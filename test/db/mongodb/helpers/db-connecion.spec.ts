import DbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import env from '@main/config/env'

describe('DbConnection', () => {
  beforeAll(async () => {
    await DbConnection.connect(env.mongoUrl)
  })

  afterAll(async () => {
    await DbConnection.disconnect()
  })

  it('should reconnect if mongodb is down', async () => {
    let collection = await DbConnection.getCollection('catalogs')
    expect(collection).toBeTruthy()
    await DbConnection.disconnect()
    collection = await DbConnection.getCollection('catalogs')
    expect(collection).toBeTruthy()
  })
})
