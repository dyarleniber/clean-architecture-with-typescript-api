import { Catalog } from '@domain/entities/catalog'
import { Image } from '@domain/value-objects/image'
import { Localization } from '@domain/value-objects/localization'
import { createCatalog } from '@test/domain/mocks/entities'

describe('Catalog', () => {
  it('creates a valid catalog', () => {
    const catalog = createCatalog()
    expect(catalog).toBeInstanceOf(Catalog)
    expect(catalog.id).toBe('1')
    expect(catalog.slug).toBe('slug')
    expect(catalog.title).toBe('Catalog')
    expect(catalog.description).toBe('Description')
    expect(catalog.startDate).toEqual(new Date('2023-01-01T00:00:00.000Z'))
    expect(catalog.endDate).toEqual(new Date('2023-01-01T00:00:00.000Z'))
    expect(catalog.status).toBe('approved')
    expect(catalog.retailerId).toBe('1')
    expect(catalog.categories).toEqual(['1'])
    expect(catalog.localization).toBeInstanceOf(Localization)
    expect(catalog.items).toEqual([
      {
        image: expect.any(Image),
        order: 1,
        text: 'text'
      }
    ])
    expect(catalog.seo).toEqual({
      title: 'Title',
      description: 'Description',
      canonical: 'https://example.com',
      og: {
        type: 'article',
        title: 'Title',
        description: 'Description',
        url: 'https://example.com',
        image: expect.any(Image),
        locale: 'it_IT'
      }
    })
    expect(catalog.thumbnail).toBeInstanceOf(Image)
    expect(catalog.userId).toBe('1')
    expect(catalog.updatedAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
    expect(catalog.createdAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
  })
})
