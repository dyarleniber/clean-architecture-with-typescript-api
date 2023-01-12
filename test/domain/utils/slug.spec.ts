import { slugify } from '@domain/utils/slug'

describe('slug', () => {
  describe('slugify', () => {
    it('returns a valid slug', () => {
      const slug = slugify('This is a test')
      expect(slug).toEqual('this-is-a-test')
    })

    it('returns a valid slug without special characters', () => {
      const slug = slugify('This is a test with special characters like áéíóú')
      expect(slug).toEqual('this-is-a-test-with-special-characters-like-aeiou')
    })

    it('returns a valid slug with collapsed dashes', () => {
      const slug = slugify('   This is a test with --- dashes and     whitespace   ')
      expect(slug).toEqual('this-is-a-test-with-dashes-and-whitespace')
    })
  })
})
