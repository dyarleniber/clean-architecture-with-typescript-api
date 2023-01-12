import { Zone } from '@domain/entities/zone'
import { City } from '@domain/entities/city'
import { createCity } from '@test/domain/mocks/entities'

describe('City', () => {
  it('creates a valid city', () => {
    const city = createCity()
    expect(city).toBeInstanceOf(City)
    expect(city.id).toBe('1')
    expect(city.slug).toBe('ivrea-to')
    expect(city.name).toBe('Ivrea')
    expect(city.default).toBe(true)
    expect(city.zone).toBeInstanceOf(Zone)
  })

  it('creates a valid city without default flag', () => {
    const city = createCity({ default: undefined })
    expect(city).toBeInstanceOf(City)
    expect(city.default).toBe(false)
  })
})
