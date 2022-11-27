export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export interface User {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export enum LocalStorageKey {
  POSTS = 'PROJECT/POSTS'
}
