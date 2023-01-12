import { ValueObject } from '@domain/interfaces/value-object'

export interface ImageProps {
  key: string
  url: string
  alt?: string
  width?: number
  height?: number
  size?: number
  type?: string
}

export class Image extends ValueObject<ImageProps> {
  get key (): string {
    return this.props.key
  }

  get url (): string {
    return this.props.url
  }

  get alt (): string | undefined {
    return this.props.alt
  }

  get width (): number | undefined {
    return this.props.width
  }

  get height (): number | undefined {
    return this.props.height
  }

  get size (): number | undefined {
    return this.props.size
  }

  get type (): string | undefined {
    return this.props.type
  }
}
