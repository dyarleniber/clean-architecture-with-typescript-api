import { Entity, EntityProps } from '@domain/interfaces/entity'
import { Image } from '@domain/value-objects/image'
import { Localization } from '@domain/value-objects/localization'

export type CatalogStatus = 'pending' | 'approved' | 'rejected'

export interface CatalogItem {
  image: Image
  order: number
  text?: string
}

export interface CatalogSEO {
  title?: string
  description?: string
  canonical?: string
  og: {
    type?: string
    title?: string
    description?: string
    url?: string
    image?: Image
    locale?: string
  }
}

export interface CatalogProps extends EntityProps {
  slug: string
  title: string
  description?: string
  startDate: Date
  endDate: Date
  status: CatalogStatus
  retailerId: string
  categories: string[]
  localization: Localization
  items: CatalogItem[]
  seo: CatalogSEO
  thumbnail: Image
  userId: string
  updatedAt: Date
  createdAt: Date
}

export class Catalog extends Entity<CatalogProps> {
  get slug (): string {
    return this.props.slug
  }

  get title (): string {
    return this.props.title
  }

  get description (): string | undefined {
    return this.props.description
  }

  get startDate (): Date {
    return this.props.startDate
  }

  get endDate (): Date {
    return this.props.endDate
  }

  get status (): CatalogStatus {
    return this.props.status
  }

  get retailerId (): string {
    return this.props.retailerId
  }

  get categories (): string[] {
    return this.props.categories
  }

  get localization (): Localization {
    return this.props.localization
  }

  get items (): CatalogItem[] {
    return this.props.items
  }

  get seo (): CatalogSEO {
    return this.props.seo
  }

  get thumbnail (): Image {
    return this.props.thumbnail
  }

  get userId (): string {
    return this.props.userId
  }

  get updatedAt (): Date {
    return this.props.updatedAt
  }

  get createdAt (): Date {
    return this.props.createdAt
  }
}
