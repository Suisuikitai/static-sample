import { BoldH4 } from './text/BoldH4'
import { BodyPLarge } from './text/BodyPLarge'
import { SubPageH1 } from './text/SubPageH1'
import styled from 'styled-components'

const SignUpBox = styled.div`
  border: solid #33f4f4 1px;
  display: flex;
  justify-content: center;
`

export default function Signup() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <div style={{ marginBottom: '30px' }}>
          <SubPageH1 content={'Ready to take a free trial?'}></SubPageH1>
        </div>
        <div
          style={{
            marginBottom: '70px',
          }}
        >
          <BodyPLarge
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
          sed do eiusmod tempor incididunt ut labore'
            }
          ></BodyPLarge>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '70px',
            justifyContent: 'center',
          }}
        >
          <div style={{ border: 'solid green 1px', flexBasis: '650px' }}>
            <BoldH4 content={'Sing up for a free account'}></BoldH4>
          </div>
        </div>
      </div>
    </div>
  )
}
