import { CountryCode } from '@domain/interfaces/country-code'
import { Entity, EntityProps } from '@domain/interfaces/entity'

export interface ZoneProps extends EntityProps {
  code: string
  name: string
  countryCode: CountryCode
}

export class Zone extends Entity<ZoneProps> {
  get code (): string {
    return this.props.code
  }

  get name (): string {
    return this.props.name
  }

  get countryCode (): CountryCode {
    return this.props.countryCode
  }
}
