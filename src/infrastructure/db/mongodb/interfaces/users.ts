import { Document } from '@infrastructure/db/mongodb/interfaces/document'

export interface UserDocument extends Document {
  name: string
  email: string
  password: string
  status: UserStatus
  roles: Role[]
  ips?: string[]
  lastLoginAt?: Date
  updatedAt: Date
  createdAt: Date
}
