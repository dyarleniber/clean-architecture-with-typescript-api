import { CountryCode } from '@domain/interfaces/country-code'
import { ValueObject } from '@domain/interfaces/value-object'
import { City } from '@domain/entities/city'

export type LocalizationProps = CountryLocalizationProps | CustomLocalizationProps

export interface CountryLocalizationProps {
  type: 'country'
  countryCode: CountryCode
  cityIds?: string[]
}

export interface CustomLocalizationProps {
  type: 'custom'
  countryCode: CountryCode
  filter: CustomLocalizationFilter
  cityIds?: string[]
}

export interface CustomLocalizationFilter {
  zones: ZoneLocalizationFilter[]
  cities: CityLocalizationFilter[]
}

export interface ZoneLocalizationFilter {
  zoneId: string
  include: boolean
}

export interface CityLocalizationFilter {
  cityId: string
  include: boolean
}

export class Localization extends ValueObject<LocalizationProps> {
  private readonly targetCityIds: string[]

  constructor (props: LocalizationProps, allCities: City[]) {
    super(props)
    this.targetCityIds = props.cityIds ?? this.filterCityIds(allCities)
  }

  get cityIds (): string[] {
    return this.targetCityIds
  }

  get type (): 'country' | 'custom' {
    return this.props.type
  }

  get countryCode (): CountryCode {
    return this.props.countryCode
  }

  get filter (): CustomLocalizationFilter | undefined {
    return this.props.type === 'country' ? undefined : this.props.filter
  }

  private filterCityIds (allCities: City[]): string[] {
    if (this.props.type === 'country') {
      return allCities.map(city => city.id)
    } else {
      const includedCityIds = this.props.filter.cities.filter(city => city.include).map(city => city.cityId)
      if (includedCityIds.length > 0) {
        return allCities
          .filter(city => includedCityIds.includes(city.id))
          .map(city => city.id)
      }
      const excludedCityIds = this.props.filter.cities.filter(city => !city.include).map(city => city.cityId)
      if (excludedCityIds.length > 0) {
        return allCities
          .filter(city => !excludedCityIds.includes(city.id))
          .map(city => city.id)
      }
      const includedZoneIds = this.props.filter.zones.filter(zone => zone.include).map(zone => zone.zoneId)
      if (includedZoneIds.length > 0) {
        return allCities
          .filter(city => includedZoneIds.includes(city.zone.id))
          .map(city => city.id)
      }
      const excludedZoneIds = this.props.filter.zones.filter(zone => !zone.include).map(zone => zone.zoneId)
      if (excludedZoneIds.length > 0) {
        return allCities
          .filter(city => !excludedZoneIds.includes(city.zone.id))
          .map(city => city.id)
      }
      return allCities.map(city => city.id)
    }
  }
}
