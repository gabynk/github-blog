import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { PostData, UserContext } from '../../contexts/UserContext'

import {
  CaretLeft,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
  ArrowSquareOut,
} from 'phosphor-react'
import {
  IssueContent,
  Links,
  PostContainer,
  PostInfo,
  UserInfo,
} from './styles'

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

      <IssueContent>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm]]}
          components={{
            h1: 'h2',
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  language="javascript"
                  style={nord}
                  customStyle={{ borderRadius: '2px' }}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {issue?.body ?? ''}
        </ReactMarkdown>
      </IssueContent>
    </PostContainer>
  )
}
