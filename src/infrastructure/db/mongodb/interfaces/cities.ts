import { ObjectId } from 'mongodb'
import { Document } from '@infrastructure/db/mongodb/interfaces/document'

export interface CityDocument extends Document {
  slug: string
  name: string
  default: boolean
  zone_id: ObjectId
}
