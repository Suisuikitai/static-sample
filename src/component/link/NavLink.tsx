import styled from 'styled-components'

/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  content: string
  href: string
}

const A = styled.a`
  color: #18a0fb;
`

const NavLink = (props: Props) => {
  return <A href={props.href}>{props.content}</A>
}

export default NavLink
