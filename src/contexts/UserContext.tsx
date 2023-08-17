import {
  createContext,
  useCallback,
  useEffect,
  useState,
  ReactNode,
} from 'react'
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

export interface Post {
  id: number
  html_url: string
  title: string
  comments: string
  created_at: string
  body: string
}

interface UserContextType {
  user: User | null
  posts: Post[]
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<[]>([])

  const fetchIssues = useCallback(async (data?: string) => {
    const query = data ?? ''
    const response = await api.get(`https://api.github.com/search/issues`, {
      params: {
        q: `${query}repo:gabynk/github-blog`,
      },
    })

    if (response.status === 200) {
      const getPosts = response.data.items.map((item: Post) => {
        return {
          id: item.id,
          html_url: item.html_url,
          title: item.title,
          comments: item.comments,
          created_at: item.created_at,
          body: item.body,
        }
      })
      setPosts(getPosts)
    }
  }, [])

  const fetchPosts = useCallback(async () => {
    const response = await api.get('https://api.github.com/users/gabynk')

    if (response.status === 200) {
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
      fetchIssues()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <UserContext.Provider value={{ user, posts }}>
      {children}
    </UserContext.Provider>
  )
}
