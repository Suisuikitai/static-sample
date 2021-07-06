// import styled from 'styled-components'
type Props = {
  content: string
}

const SubmitButton = (props: Props) => {
  return <input type='submit' value={props.content} />
}

export { SubmitButton }
