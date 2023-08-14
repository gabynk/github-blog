import { PostCard } from './components/PostCard'
import { ProfileInfoCard } from './components/ProfileInfoCard'
import { HomeContainer, PostsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileInfoCard />

      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  )
}
