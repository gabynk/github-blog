import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from '../lib/axios'

interface User {
  id: number
  name: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  login: string
}

interface UserContextType {
  user: User | null
  // posts: []
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  async function fetchPosts() {
    const response = await api.get('https://api.github.com/users/gabynk')
    const getUser = {
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
      company: response.data.company,
      followers: response.data.followers,
      html_url: response.data.html_url,
      login: response.data.login,
    } as User
    setUser(getUser)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
