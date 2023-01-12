import { CountryCode } from '@domain/interfaces/country-code'
import { Entity, EntityProps } from '@domain/interfaces/entity'

export interface CategoryProps extends EntityProps {
  name: string
  description?: string
  weight: number
  countryCode: CountryCode
  updatedAt: Date
  createdAt: Date
}

export class Category extends Entity<CategoryProps> {
  get name (): string {
    return this.props.name
  }

  get description (): string | undefined {
    return this.props.description
  }

  get weight (): number {
    return this.props.weight
  }

  get countryCode (): CountryCode {
    return this.props.countryCode
  }

  get updatedAt (): Date {
    return this.props.updatedAt
  }

  get createdAt (): Date {
    return this.props.createdAt
  }
}
