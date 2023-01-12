import { Entity, EntityProps } from '@domain/interfaces/entity'
import { Zone } from '@domain/entities/zone'
import { slugify } from '@domain/utils/slug'

export interface CityProps extends EntityProps {
  name: string
  default?: boolean
  zone: Zone
}

export class City extends Entity<CityProps> {
  private readonly citySlug: string

  constructor (props: CityProps) {
    super(props)
    const cityName = props.name
    const zoneCode = props.zone.code
    this.citySlug = slugify(`${cityName}-${zoneCode}`)
  }

  get slug (): string {
    return this.citySlug
  }

  get name (): string {
    return this.props.name
  }

  get default (): boolean {
    return !!this.props.default
  }

  get zone (): Zone {
    return this.props.zone
  }
}
