import styled from 'styled-components'
type Props = {
  placeholder: string
}

const Input = styled.input.attrs((props: Props) => ({
  type: 'text',
}))`
  border: solid 1px;
  height: 40px;
  padding: 10px;
  width: 231.28px;
  ::placeholder {
    text-align: left;
  }
`

const PlainInputText = (props: Props) => {
  return <Input placeholder={props.placeholder} />
}

export { PlainInputText }
