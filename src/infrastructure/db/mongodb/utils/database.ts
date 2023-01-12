import { MongoClient } from 'mongodb'

class Database {
  private url?: string

  private client?: MongoClient

  public async connect (url: string): Promise<void> {
    this.url = url
    this.client = new MongoClient(url)
    await this.client.connect()
  }

  public async disconnect (): Promise<void> {
    await this.client?.close()
    this.client = undefined
  }

  public async getClient (): Promise<MongoClient> {
    if (!this.client && this.url) {
      await this.connect(this.url)
    }
    if (!this.client) {
      throw new Error('MongoDB client is not connected')
    }
    return this.client
  }
}

export default new Database()
