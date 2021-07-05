import NavLink from './link/NavLink'
import ButtonLink from './link/ButtonLink'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FlexLink = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 20px;
`

export default function Navigation() {
  return (
    <Container style={{ padding: '0 70px' }}>
      <Container>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>
          <img src='#' alt='logo' />
        </a>
        <Container style={{ marginLeft: '50px' }}>
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
        </Container>
      </Container>
      <Container>
        <div style={{ margin: '0 5px 0 0' }}>
          <ButtonLink content='Log in' href='#' color='light' />
        </div>
        <div style={{ margin: '0 0 0 5px' }}>
          <ButtonLink content='Register' href='#' color='primary' />
        </div>
      </Container>
    </Container>
  )
}
