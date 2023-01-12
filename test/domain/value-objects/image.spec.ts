import { Image } from '@domain/value-objects/image'
import { createImage } from '@test/domain/mocks/value-objects'

describe('Image', () => {
  it('creates a valid image', () => {
    const image = createImage()
    expect(image).toBeInstanceOf(Image)
    expect(image.key).toBe('key')
    expect(image.url).toBe('https://www.example.com/image.jpg')
    expect(image.alt).toBe('Image')
    expect(image.width).toBe(100)
    expect(image.height).toBe(100)
    expect(image.size).toBe(100)
    expect(image.type).toBe('image/jpeg')
  })
})
