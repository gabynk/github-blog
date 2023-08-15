import { useContext } from 'react'
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'

import { UserContext } from '../../../../contexts/UserContext'

import { ProfileInfoCardContainer, ProfileInfo, User, UserInfo } from './styles'

export function ProfileInfoCard() {
  const { user } = useContext(UserContext)

  return (
    <ProfileInfoCardContainer>
      <img src={user?.avatar_url} alt="" />

      <ProfileInfo>
        <User>
          <span>{user?.name}</span>
          <a href={user?.html_url} target="_blank" rel="noreferrer">
            github
            <ArrowSquareOut size={12} />
          </a>
        </User>

        <p>{user?.bio?.substring(0, 180).concat('...') ?? '-'}</p>

        <UserInfo>
          <div>
            <GithubLogo size={16} />
            {user?.login}
          </div>
          <div>
            <Buildings size={16} />
            {user?.company ?? '-'}
          </div>
          <div>
            <Users size={16} />
            {user?.followers} seguidores
          </div>
        </UserInfo>
      </ProfileInfo>
    </ProfileInfoCardContainer>
  )
}
