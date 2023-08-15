import {
  CaretLeft,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
  ArrowSquareOut,
} from 'phosphor-react'
import { Links, PostContainer, PostInfo, UserInfo } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <Links>
          <a href="">
            <CaretLeft size={14} />
            voltar
          </a>
          <a href="">
            ver no github
            <ArrowSquareOut size={14} />
          </a>
        </Links>

        <h1>JavaScript data types and data structures</h1>

        <UserInfo>
          <div>
            <GithubLogo size={16} />
            gabynk
          </div>
          <div>
            <CalendarBlank size={16} />
            Há 1 dia
          </div>
          <div>
            <ChatCircle size={16} />
            32 comentários
          </div>
        </UserInfo>
      </PostInfo>
    </PostContainer>
  )
}
