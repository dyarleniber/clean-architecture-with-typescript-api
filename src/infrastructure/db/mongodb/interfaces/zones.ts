import { Document } from '@infrastructure/db/mongodb/interfaces/document'
import { CountryCode } from '@domain/entities/country'

export interface ZoneDocument extends Document {
  code: string
  name: string
  countryCode: CountryCode
}
