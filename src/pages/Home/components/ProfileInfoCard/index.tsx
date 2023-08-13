import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { ProfileInfoCardContainer, ProfileInfo, User, UserInfo } from './styles'

export function ProfileInfoCard() {
  return (
    <ProfileInfoCardContainer>
      <img src="https://github.com/gabynk.png" alt="" />

      <ProfileInfo>
        <User>
          <span>Gabriele Nakassima</span>
          <a href="">
            github
            <ArrowSquareOut size={12} />
          </a>
        </User>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <UserInfo>
          <div>
            <GithubLogo size={16} />
            gabynk
          </div>
          <div>
            <Buildings size={16} />
            Rocketseat
          </div>
          <div>
            <Users size={16} />
            32 seguidores
          </div>
        </UserInfo>
      </ProfileInfo>
    </ProfileInfoCardContainer>
  )
}
