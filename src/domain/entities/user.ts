import { Entity, EntityProps } from '@domain/interfaces/entity'

export type UserStatus = 'active' | 'inactive'

export type UserRole = 'admin' | 'editor'

export type RolePermission =
    | 'manage-categories'
    | 'manage-retailers'
    | 'manage-catalogs'
    | 'manage-users'
    | 'create-catalogs'

export interface UserProps extends EntityProps {
  name: string
  email: string
  password: string
  status: UserStatus
  roles: UserRole[]
  ips?: string[]
  lastLoginAt?: Date
  updatedAt: Date
  createdAt: Date
}

export class User extends Entity<UserProps> {
  get name (): string {
    return this.props.name
  }

  get email (): string {
    return this.props.email
  }

  get password (): string {
    return this.props.password
  }

  get status (): UserStatus {
    return this.props.status
  }

  get roles (): UserRole[] {
    return this.props.roles
  }

  get ips (): string[] | undefined {
    return this.props.ips
  }

  get lastLoginAt (): Date | undefined {
    return this.props.lastLoginAt
  }

  get updatedAt (): Date {
    return this.props.updatedAt
  }

  get createdAt (): Date {
    return this.props.createdAt
  }
}
