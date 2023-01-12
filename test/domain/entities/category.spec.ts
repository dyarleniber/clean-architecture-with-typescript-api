import { Category } from '@domain/entities/category'
import { createCategory } from '@test/domain/mocks/entities'

describe('Category', () => {
  it('creates a valid category', () => {
    const category = createCategory()
    expect(category).toBeInstanceOf(Category)
    expect(category.id).toBe('1')
    expect(category.name).toBe('Category')
    expect(category.description).toBe('Description')
    expect(category.weight).toBe(100)
    expect(category.countryCode).toBe('IT')
    expect(category.updatedAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
    expect(category.createdAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
  })
})
