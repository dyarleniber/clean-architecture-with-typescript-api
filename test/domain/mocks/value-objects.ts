import { City } from '@domain/entities/city'
import { Image, ImageProps } from '@domain/value-objects/image'
import { Localization, CountryLocalizationProps, CustomLocalizationProps } from '@domain/value-objects/localization'

export const createImage = (props?: Partial<ImageProps>): Image => {
  return new Image({
    key: 'key',
    url: 'https://www.example.com/image.jpg',
    alt: 'Image',
    width: 100,
    height: 100,
    size: 100,
    type: 'image/jpeg',
    ...props
  })
}

export const createCountryLocalization = (props?: Partial<CountryLocalizationProps>, allCities?: City[]): Localization => {
  return new Localization(
    {
      type: 'country',
      countryCode: 'IT',
      cityIds: ['1'],
      ...props
    },
    allCities ?? []
  )
}

export const createCustomLocalization = (props?: Partial<CustomLocalizationProps>, allCities?: City[]): Localization => {
  return new Localization(
    {
      type: 'custom',
      countryCode: 'IT',
      filter: { zones: [], cities: [] },
      cityIds: ['1'],
      ...props
    },
    allCities ?? []
  )
}
