import styled from 'styled-components'
import Signup from './Signup'
import NavLink from './link/NavLink'
import ButtonLink from './link/ButtonLink'

const BetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const FlexLink = styled.div`
  justify-content: center;
  margin: 0 20px;
`

const FlexPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 45px;
  align-items: center;
  text-align: center;
`

export default function Navigation() {
  return (
    <div>
      <FlexPageWrapper>
        <BetweenBox>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#'>
            <img src='#' alt='logo' />
          </a>
          <BetweenBox style={{ marginLeft: '50px' }}>
            <FlexLink>
              <NavLink content='Features' href='#' />
            </FlexLink>
            <FlexLink>
              <NavLink content='Pricing' href='#' />
            </FlexLink>
            <FlexLink>
              <NavLink content='Community' href='#' />
            </FlexLink>
            <FlexLink>
              <NavLink content='Support' href='#' />
            </FlexLink>
          </BetweenBox>
        </BetweenBox>
        <BetweenBox>
          <div style={{ margin: '0 5px 0 0' }}>
            <ButtonLink content='Log in' href='#' color='light' />
          </div>
          <div style={{ margin: '0 0 0 5px' }}>
            <ButtonLink content='Register' href='#' color='primary' />
          </div>
        </BetweenBox>
      </FlexPageWrapper>
      <Signup />
    </div>
  )
}
