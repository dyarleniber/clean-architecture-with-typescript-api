import { Zone, ZoneProps } from '@domain/entities/zone'
import { City, CityProps } from '@domain/entities/city'
import { User, UserProps } from '@domain/entities/user'
import { Category, CategoryProps } from '@domain/entities/category'
import { Retailer, RetailerProps } from '@domain/entities/retailer'
import { Catalog, CatalogProps } from '@domain/entities/catalog'
import { createImage, createCountryLocalization } from '@test/domain/mocks/value-objects'

export const createZone = (props?: Partial<ZoneProps>): Zone => {
  return new Zone({
    id: '1',
    code: 'TO',
    name: 'Torino',
    countryCode: 'IT',
    ...props
  })
}

export const createCity = (props?: Partial<CityProps>): City => {
  return new City({
    id: '1',
    name: 'Ivrea',
    default: true,
    zone: createZone(),
    ...props
  })
}

export const createUser = (props?: Partial<UserProps>): User => {
  return new User({
    id: '1',
    name: 'User',
    email: 'user@mail.com',
    password: 'password',
    status: 'active',
    roles: ['admin'],
    ips: ['127.0.0.1'],
    lastLoginAt: new Date('2023-01-01T00:00:00.000Z'),
    updatedAt: new Date('2023-01-01T00:00:00.000Z'),
    createdAt: new Date('2023-01-01T00:00:00.000Z'),
    ...props
  })
}

export const createCategory = (props?: Partial<CategoryProps>): Category => {
  return new Category({
    id: '1',
    name: 'Category',
    description: 'Description',
    weight: 100,
    countryCode: 'IT',
    updatedAt: new Date('2023-01-01T00:00:00.000Z'),
    createdAt: new Date('2023-01-01T00:00:00.000Z'),
    ...props
  })
}

export const createRetailer = (props?: Partial<RetailerProps>): Retailer => {
  return new Retailer({
    id: '1',
    name: 'Retailer',
    description: 'Description',
    logo: createImage(),
    categories: ['1'],
    localization: createCountryLocalization(),
    parentId: '1',
    catalogs: 100,
    updatedAt: new Date('2023-01-01T00:00:00.000Z'),
    createdAt: new Date('2023-01-01T00:00:00.000Z'),
    ...props
  })
}

export const createCatalog = (props?: Partial<CatalogProps>): Catalog => {
  return new Catalog({
    id: '1',
    slug: 'slug',
    title: 'Catalog',
    description: 'Description',
    startDate: new Date('2023-01-01T00:00:00.000Z'),
    endDate: new Date('2023-01-01T00:00:00.000Z'),
    status: 'approved',
    retailerId: '1',
    categories: ['1'],
    localization: createCountryLocalization(),
    items: [
      {
        image: createImage(),
        order: 1,
        text: 'text'
      }
    ],
    seo: {
      title: 'Title',
      description: 'Description',
      canonical: 'https://example.com',
      og: {
        type: 'article',
        title: 'Title',
        description: 'Description',
        url: 'https://example.com',
        image: createImage(),
        locale: 'it_IT'
      }
    },
    thumbnail: createImage(),
    userId: '1',
    updatedAt: new Date('2023-01-01T00:00:00.000Z'),
    createdAt: new Date('2023-01-01T00:00:00.000Z'),
    ...props
  })
}
