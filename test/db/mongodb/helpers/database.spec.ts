import Database from '@infrastructure/db/mongodb/helpers/database'
import env from '@main/config/env'

describe('Database', () => {
  beforeAll(async () => {
    await Database.connect(env.mongoUrl)
  })

  afterAll(async () => {
    await Database.disconnect()
  })

  it('should reconnect if mongodb is down', async () => {
    let client = await Database.getClient()
    expect(client).toBeTruthy()
    await Database.disconnect()
    client = await Database.getClient()
    expect(client).toBeTruthy()
  })
})
