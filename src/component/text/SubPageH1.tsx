import styled from 'styled-components'

type Props = {
  content: string
}

const H1 = styled.h1`
  text-align: center;
  font-size: 48px;
`

const SubPageH1 = (props: Props) => {
  return <H1>{props.content}</H1>
}

export { SubPageH1 }
