import NavLink from './link/NavLink'
import ButtonLink from './link/ButtonLink'
export default function Navigation() {
  return (
    <div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>
          <img src='#' alt='logo' />
        </a>
      </div>
      <div>
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
      </div>
      <div>
        <div>
          <ButtonLink content='Log in' href='#' color='light' />
        </div>
        <div>
          <ButtonLink content='Register' href='#' color='primary' />
        </div>
      </div>
    </div>
  )
}
