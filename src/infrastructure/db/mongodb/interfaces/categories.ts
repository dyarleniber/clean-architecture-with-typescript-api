import { Document } from '@infrastructure/db/mongodb/interfaces/document'
import { CountryLocalization } from '@infrastructure/db/mongodb/interfaces/localization'

export interface CategoryDocument extends Document {
  name: string
  description?: string
  archived: boolean
  order: number
  localization: CountryLocalization
  updatedAt: Date
  createdAt: Date
}
