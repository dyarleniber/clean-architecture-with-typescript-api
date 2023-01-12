import { ObjectId } from 'mongodb'
import { Document } from '@infrastructure/db/mongodb/interfaces/document'
import { Image } from '@infrastructure/db/mongodb/interfaces/image'
import { Localization } from '@infrastructure/db/mongodb/interfaces/localization'

export interface RetailerDocument extends Document {
  name: string
  description?: string
  logo: Image
  categories: ObjectId[]
  localization: Localization
  parent_id?: ObjectId
  catalogs: boolean
  updatedAt: Date
  createdAt: Date
}
