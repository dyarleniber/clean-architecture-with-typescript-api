import { User } from '@domain/entities/user'
import { createUser } from '@test/domain/mocks/entities'

describe('User', () => {
  it('creates a valid user', () => {
    const user = createUser()
    expect(user).toBeInstanceOf(User)
    expect(user.id).toBe('1')
    expect(user.name).toBe('User')
    expect(user.email).toBe('user@mail.com')
    expect(user.password).toBe('password')
    expect(user.status).toBe('active')
    expect(user.roles).toEqual(['admin'])
    expect(user.ips).toEqual(['127.0.0.1'])
    expect(user.lastLoginAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
    expect(user.updatedAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
    expect(user.createdAt).toEqual(new Date('2023-01-01T00:00:00.000Z'))
  })
})
