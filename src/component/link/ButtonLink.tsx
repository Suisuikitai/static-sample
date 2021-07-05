import styled from 'styled-components'
interface Props {
  content: string
  href: string
  color: string
}
type StringKeyStringVal = {
  [key: string]: { [key: string]: { [key: string]: string } }
}
//普通にifで分岐させたらいい気がしてきた
//パフォーマンス大丈夫か？
//(primary && stylePrimary) || (light && styleLight)
const COLOR: StringKeyStringVal = {
  primary: { div: { color: '#18A0FB' }, a: { color: '#FFFFFF' } },
  light: { div: { color: '#FFFFFF' }, a: { color: '#18A0FB' } },
}
const DIV = styled.div`
  height: 40px;
  width: 130px;
  background-color: ${(props) => props.color};
  border: 0.1px solid #18a0fb;
  border-radius: 6px;
  padding-top: 10px;
`
const A = styled.a.attrs((props) => ({
  href: props.href,
}))`
  font-weight: Medium;
  font-size: 15px;
  color: ${(props) => props.color};
  text-decoration: none;
`
const ButtonLink = (props: Props) => {
  const color = COLOR[props.color]
  return (
    <DIV {...color['div']}>
      <A {...color['a']} href={props.href}>
        {props.content}
      </A>
    </DIV>
  )
}

export default ButtonLink
