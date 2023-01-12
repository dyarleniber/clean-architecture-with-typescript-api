import { Zone } from '@domain/entities/zone'
import { createZone } from '@test/domain/mocks/entities'

describe('Zone', () => {
  it('creates a valid zone', () => {
    const zone = createZone()
    expect(zone).toBeInstanceOf(Zone)
    expect(zone.id).toBe('1')
    expect(zone.code).toBe('TO')
    expect(zone.name).toBe('Torino')
    expect(zone.countryCode).toBe('IT')
  })
})
