import { Retailer } from '@domain/entities/retailer'
import { Image } from '@domain/value-objects/image'
import { Localization } from '@domain/value-objects/localization'
import { createRetailer } from '@test/domain/mocks/entities'

describe('Retailer', () => {
  it('creates a valid retailer', () => {
    const retailer = createRetailer()
    expect(retailer).toBeInstanceOf(Retailer)
    expect(retailer.id).toBe('1')
    expect(retailer.name).toBe('Retailer')
    expect(retailer.description).toBe('Description')
    expect(retailer.logo).toBeInstanceOf(Image)
    expect(retailer.categories).toEqual(['1'])
    expect(retailer.localization).toBeInstanceOf(Localization)
    expect(retailer.parentId).toBe('1')
    expect(retailer.catalogs).toBe(100)
    expect(retailer.updatedAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
    expect(retailer.createdAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
  })
})
