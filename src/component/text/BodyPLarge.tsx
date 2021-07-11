import styled from 'styled-components'

type Props = {
  content: string
}

const P = styled.p`
  padding: 0 80px;
  text-align: center;
  font-size: 32px;
  width: 1392px;
`

const BodyPLarge = (props: Props) => {
  return <P>{props.content}</P>
}

export { BodyPLarge }
