import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostCardContainer } from './styles'
import { useNavigate } from 'react-router-dom'

export interface Post {
  id: number
  html_url: string
  title: string
  comments: string
  created_at: string
  body: string
}

interface PostCard {
  post: Post
}

export function PostCard({ post }: PostCard) {
  const navigate = useNavigate()

  function handleGoToPost() {
    navigate(`/post/${post.id}`)
  }

  return (
    <PostCardContainer onClick={handleGoToPost}>
      <div>
        <h1>{post.title}</h1>
        <span>
          Há{' '}
          {formatDistance(new Date(post.created_at), new Date(), {
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{post.body.substring(0, 181).concat('...')}</p>
    </PostCardContainer>
  )
}
