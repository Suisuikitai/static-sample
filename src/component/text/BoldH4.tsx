import styled from 'styled-components'

type Props = {
  content: string
}

const H4 = styled.h4`
  text-align: left;
  font-weight: bold;
  font-size: 24px;
`

const BoldH4 = (props: Props) => {
  return <H4>{props.content}</H4>
}

export { BoldH4 }
