/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  content: string
  href: string
}
const NavLink = (props: Props) => {
  return <a href={props.href}>{props.content}</a>
}

export default NavLink
