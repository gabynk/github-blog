import { useContext } from 'react'
import { PostData, UserContext } from '../../contexts/UserContext'
import { PostCard } from './components/PostCard'
import { ProfileInfoCard } from './components/ProfileInfoCard'
import { SearchForm } from './components/SearchForm'

import { HomeContainer, PostsAmount, PostsContainer } from './styles'

export function Home() {
  const { posts } = useContext(UserContext)

  return (
    <HomeContainer>
      <ProfileInfoCard />

      <PostsAmount>
        <h1>Publicações</h1>
        <span>{posts.length} publicações</span>
      </PostsAmount>

      <SearchForm />

      <PostsContainer>
        {posts.map((post: PostData) => {
          return <PostCard key={post.id} post={post} />
        })}
      </PostsContainer>
    </HomeContainer>
  )
}
