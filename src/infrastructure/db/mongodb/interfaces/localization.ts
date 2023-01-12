import { ObjectId } from 'mongodb'
import { CountryCode } from '@domain/entities/country'

export type Localization = CountryLocalization | CustomLocalization

export interface CountryLocalization {
  type: 'country'
  countryCode: CountryCode
}

export interface CustomLocalization {
  type: 'custom'
  countryCode: CountryCode
  filter: {
    zones: ZoneLocalizationFilter[]
    cities: CityLocalizationFilter[]
  }
}

interface ZoneLocalizationFilter {
  zone_id: ObjectId
  include: boolean
}

interface CityLocalizationFilter {
  city_id: ObjectId
  include: boolean
}
