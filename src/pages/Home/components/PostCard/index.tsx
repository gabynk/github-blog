import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostCardContainer } from './styles'

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
  return (
    <PostCardContainer>
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
