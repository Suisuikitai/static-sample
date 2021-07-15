import { BoldH4 } from './text/BoldH4'
import { BodyPLarge } from './text/BodyPLarge'
import { SubPageH1 } from './text/SubPageH1'
import { PlainInputText } from './input/PlaneText'
import { ButtonLink } from './link/ButtonLink'
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
              flexBasis: '607px',
              height: '439px',
              padding: '45px 60px',
            }}
          >
            {/* htmlの要素としてタグ相当のものをComponentとして切り出すしてレイアウトを無視して大まか配置する
              大まかな配置から明らかにずれているところをhtmlの要素で修正
              それでもずれている所をcssで修正っていう流れが良さそう
            */}
            <div>
              <BoldH4 content={'Sing up for a free account'}></BoldH4>
              <form action='' method='post'>
                <div
                  style={{
                    marginTop: '40px',
                    textAlign: 'left',
                    display: 'flex',
                  }}
                >
                  <div style={{ paddingRight: '10.9px', width: '100%' }}>
                    <PlainInputText placeholder='First name' />
                  </div>
                  <div style={{ paddingLeft: '10.9px', width: '100%' }}>
                    <PlainInputText placeholder='Last name' />
                  </div>
                </div>
                <div style={{ marginTop: '25px' }}>
                  <PlainInputText placeholder='Email address'></PlainInputText>
                </div>
                <div style={{ marginTop: '25px' }}>
                  <PlainInputText placeholder='Create password'></PlainInputText>
                </div>
                <div style={{ marginTop: '25px' }}>
                  <ButtonLink
                    color={'primary'}
                    content={'Register'}
                    href={''}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
