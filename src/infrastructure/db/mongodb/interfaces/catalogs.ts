import { ObjectId } from 'mongodb'
import { Document } from '@infrastructure/db/mongodb/interfaces/document'
import { Localization } from '@infrastructure/db/mongodb/interfaces/localization'
import { Image } from '@infrastructure/db/mongodb/interfaces/image'

export interface CatalogDocument extends Document {
  title: string
  description?: string
  startDate: Date
  endDate: Date
  status: CatalogStatus
  retailer_id: ObjectId
  categories: ObjectId[]
  localization: Localization
  items: CatalogItem[]
  seo: SEO
  user_id?: ObjectId
  updatedAt: Date
  createdAt: Date
}

type CatalogStatus = 'pending' | 'active' | 'inactive'

interface CatalogItem {
  image: Image
  thumbnail: Image
  order: number
  text?: string
}

interface SEO {
  slug: string
  title?: string
  description?: string
  canonical?: string
  og: {
    type?: string
    title?: string
    description?: string
    url?: string
    image?: Image
    locale?: string
  }
}
