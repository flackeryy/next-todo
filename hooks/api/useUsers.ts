import { User } from '../../types'
import { useState } from 'react'

type GetUser = (userId: number) => User

interface UseUser {
  getUser: GetUser
}

interface UseUsersConfig {
  users: User[]
}

export default function useUsers(config: UseUsersConfig): UseUser {
  const [users] = useState<User[]>(config.users)

  const getUser: GetUser = (userId) =>
    users.find((user) => user.id === userId) as User

  return { getUser }
}
