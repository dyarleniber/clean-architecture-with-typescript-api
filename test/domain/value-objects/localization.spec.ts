import { Zone } from '@domain/entities/zone'
import { City } from '@domain/entities/city'
import { Localization } from '@domain/value-objects/localization'
import { createCity, createZone } from '@test/domain/mocks/entities'
import { createCountryLocalization, createCustomLocalization } from '@test/domain/mocks/value-objects'

const zones: Zone[] = [
  createZone({ id: '1', code: 'TO', name: 'Torino' }),
  createZone({ id: '2', code: 'MI', name: 'Milano' }),
  createZone({ id: '3', code: 'RM', name: 'Roma' }),
  createZone({ id: '4', code: 'VE', name: 'Venezia' }),
  createZone({ id: '5', code: 'FI', name: 'Firenze' }),
  createZone({ id: '6', code: 'NA', name: 'Napoli' }),
  createZone({ id: '7', code: 'PA', name: 'Palermo' }),
  createZone({ id: '8', code: 'CO', name: 'Como' })
]

const cities: City[] = [
  createCity({ id: '1', name: 'Ivrea', zone: zones[0], default: true }),
  createCity({ id: '2', name: 'Torino', zone: zones[0], default: false }),
  createCity({ id: '3', name: 'Milano', zone: zones[1], default: false }),
  createCity({ id: '4', name: 'Sesto San Giovanni', zone: zones[1], default: false }),
  createCity({ id: '5', name: 'Roma', zone: zones[2], default: false }),
  createCity({ id: '6', name: 'Tivoli', zone: zones[2], default: false }),
  createCity({ id: '7', name: 'Venezia', zone: zones[3], default: false }),
  createCity({ id: '8', name: 'Chioggia', zone: zones[3], default: false }),
  createCity({ id: '9', name: 'Firenze', zone: zones[4], default: false }),
  createCity({ id: '10', name: 'Vinci', zone: zones[4], default: false }),
  createCity({ id: '11', name: 'Napoli', zone: zones[5], default: false }),
  createCity({ id: '12', name: 'Giugliano in Campania', zone: zones[5], default: false }),
  createCity({ id: '13', name: 'Palermo', zone: zones[6], default: false }),
  createCity({ id: '14', name: 'Corleone', zone: zones[6], default: false }),
  createCity({ id: '15', name: 'Como', zone: zones[7], default: false }),
  createCity({ id: '16', name: 'Maslianico', zone: zones[7], default: false })
]

describe('Localization', () => {
  describe('Country Localization', () => {
    it('creates a valid country localization', () => {
      const localization = createCountryLocalization()
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.type).toBe('country')
      expect(localization.countryCode).toBe('IT')
      expect(localization.cityIds).toEqual(['1'])
      expect(localization.filter).toBeUndefined()
    })

    it('returns all cities for a country', () => {
      const localization = createCountryLocalization(
        { cityIds: undefined },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(cities.map(city => city.id))
    })
  })

  describe('Custom Localization', () => {
    it('creates a valid custom localization', () => {
      const localization = createCustomLocalization()
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.type).toBe('custom')
      expect(localization.countryCode).toBe('IT')
      expect(localization.filter).toEqual({ zones: [], cities: [] })
      expect(localization.cityIds).toEqual(['1'])
    })

    it('returns all cities if no filter is provided', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [],
            cities: []
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(cities.map(city => city.id))
    })

    it('filters city ids by included cities', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [],
            cities: [
              { cityId: '1', include: true },
              { cityId: '3', include: true }
            ]
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(['1', '3'])
    })

    it('filters city ids by excluded cities', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [],
            cities: [
              { cityId: '1', include: false },
              { cityId: '3', include: false }
            ]
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(['2', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'])
    })

    it('filters city ids by included zones', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [
              { zoneId: '1', include: true },
              { zoneId: '2', include: true },
              { zoneId: '7', include: true },
              { zoneId: '8', include: true }
            ],
            cities: []
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(['1', '2', '3', '4', '13', '14', '15', '16'])
    })

    it('filters city ids by excluded zones', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [
              { zoneId: '1', include: false },
              { zoneId: '2', include: false },
              { zoneId: '7', include: false },
              { zoneId: '8', include: false }
            ],
            cities: []
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(['5', '6', '7', '8', '9', '10', '11', '12'])
    })

    it('filters city ids prioritizing included cities over excluded cities', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [],
            cities: [
              { cityId: '1', include: true },
              { cityId: '3', include: true },
              { cityId: '1', include: false },
              { cityId: '4', include: false }
            ]
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(['1', '3'])
    })

    it('filters city ids prioritizing included zones over excluded zones', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [
              { zoneId: '1', include: true },
              { zoneId: '2', include: true },
              { zoneId: '7', include: true },
              { zoneId: '8', include: true },
              { zoneId: '1', include: false },
              { zoneId: '2', include: false },
              { zoneId: '3', include: false },
              { zoneId: '4', include: false }
            ],
            cities: []
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(['1', '2', '3', '4', '13', '14', '15', '16'])
    })

    it('filters city ids prioritizing cities over zones', () => {
      const localization = createCustomLocalization(
        {
          filter: {
            zones: [
              { zoneId: '1', include: true },
              { zoneId: '2', include: true },
              { zoneId: '7', include: true },
              { zoneId: '8', include: true },
              { zoneId: '1', include: false },
              { zoneId: '2', include: false },
              { zoneId: '3', include: false },
              { zoneId: '4', include: false }
            ],
            cities: [
              { cityId: '1', include: true },
              { cityId: '3', include: true },
              { cityId: '1', include: false },
              { cityId: '4', include: false }
            ]
          },
          cityIds: undefined
        },
        cities
      )
      expect(localization).toBeInstanceOf(Localization)
      expect(localization.cityIds).toEqual(['1', '3'])
    })
  })
})
