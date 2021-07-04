import styled, { css } from 'styled-components'
interface Props {
  content: string
  href: string
  color: string
}
type StringKeyStringVal = {
  [key: string]: { [key: string]: string }
}
const COLOR: StringKeyStringVal = {
  primary: { 'background-color': '#18A0FB', color: '#FFFFFF' },
  light: { 'background-color': '#FFFFFF', color: '#18A0FB' },
}
const Style = css`
  font-size: 15px;
  height: 40px;
  width: 130px;
`
const ButtonLink = (props: Props) => {
  const color = COLOR[props.color]
  const A = styled.a.attrs({
    href: props.href,
  })`
    ${Style}
    ${color}
  `
  return <A>{props.content}</A>
}

export default ButtonLink
