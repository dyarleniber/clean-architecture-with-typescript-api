import { Entity, EntityProps } from '@domain/interfaces/entity'
import { Image } from '@domain/value-objects/image'
import { Localization } from '@domain/value-objects/localization'

export interface RetailerProps extends EntityProps {
  name: string
  description?: string
  logo: Image
  categories: string[]
  localization: Localization
  parentId?: string
  catalogs: number
  updatedAt: Date
  createdAt: Date
}

export class Retailer extends Entity<RetailerProps> {
  get name (): string {
    return this.props.name
  }

  get description (): string | undefined {
    return this.props.description
  }

  get logo (): Image {
    return this.props.logo
  }

  get categories (): string[] {
    return this.props.categories
  }

  get localization (): Localization {
    return this.props.localization
  }

  get parentId (): string | undefined {
    return this.props.parentId
  }

  get catalogs (): number {
    return this.props.catalogs
  }

  get updatedAt (): Date {
    return this.props.updatedAt
  }

  get createdAt (): Date {
    return this.props.createdAt
  }
}
