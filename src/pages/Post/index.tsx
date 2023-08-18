import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PostData, UserContext } from '../../contexts/UserContext'

import {
  CaretLeft,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
  ArrowSquareOut,
} from 'phosphor-react'
import { Links, PostContainer, PostInfo, UserInfo } from './styles'

export function Post() {
  const { id } = useParams()
  const { posts, user } = useContext(UserContext)

  const [issue, setIssue] = useState<PostData | null>(null)

  useEffect(() => {
    if (id) {
      const post = posts.filter((post) => post.id === Number(id))
      if (post.length > 0) {
        setIssue(post[0])
      } else {
        setIssue(null)
      }
    }
  }, [id, posts])

  return (
    <PostContainer>
      <PostInfo>
        <Links>
          <a href="/">
            <CaretLeft size={14} />
            voltar
          </a>
          <a href={issue?.html_url} target="_blank" rel="noreferrer">
            ver no github
            <ArrowSquareOut size={14} />
          </a>
        </Links>

        <h1>{issue?.title}</h1>

        <UserInfo>
          <div>
            <GithubLogo size={16} />
            {user?.login}
          </div>
          <div>
            <CalendarBlank size={16} />
            Há{' '}
            {issue?.created_at &&
              formatDistance(new Date(issue?.created_at), new Date(), {
                locale: ptBR,
              })}
          </div>
          <div>
            <ChatCircle size={16} />
            {issue?.comments} comentários
          </div>
        </UserInfo>
      </PostInfo>
    </PostContainer>
  )
}
