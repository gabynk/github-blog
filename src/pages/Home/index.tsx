import { PostCard } from './components/PostCard'
import { ProfileInfoCard } from './components/ProfileInfoCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostsAmount, PostsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileInfoCard />

      <PostsAmount>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </PostsAmount>

      <SearchForm />

      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  )
}
