import { BoldH4 } from './text/BoldH4'
import { BodyPLarge } from './text/BodyPLarge'
import { SubPageH1 } from './text/SubPageH1'
import { PlainInputText } from './input/PlaneText'
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
          <div
            style={{
              border: 'solid green 1px',
              flexBasis: '622px',
              height: '439px',
              padding: '45px 40px',
            }}
          >
            {/* htmlの要素としてタグ相当のものをComponentとして切り出すしてレイアウトを無視して大まか配置する
              大まかな配置から明らかにずれているところをhtmlの要素で修正
              それでもずれている所をcssで修正っていう流れが良さそう
            */}
            <div>
              <BoldH4 content={'Sing up for a free account'}></BoldH4>
              <form action='' method='post'>
                <div style={{ textAlign: 'left', display: 'flex' }}>
                  <div>
                    <PlainInputText placeholder='First name' />
                  </div>
                  <div>
                    <PlainInputText placeholder='Last name' />
                  </div>
                </div>
                <div>
                  <PlainInputText placeholder='Email address'></PlainInputText>
                </div>
                <div>
                  <PlainInputText placeholder='Create password'></PlainInputText>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
