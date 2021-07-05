import NavLink from './link/NavLink'
import ButtonLink from './link/ButtonLink'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Navigation() {
  return (
    <Container style={{ padding: '0 70px' }}>
      <Container>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>
          <img src='#' alt='logo' />
        </a>
        <Container style={{ marginLeft: '70px' }}>
          <div>
            <NavLink content='Features' href='#' />
          </div>
          <div>
            <NavLink content='Pricing' href='#' />
          </div>
          <div>
            <NavLink content='Community' href='#' />
          </div>
          <div>
            <NavLink content='Support' href='#' />
          </div>
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
