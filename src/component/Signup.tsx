import { SubmitButton } from './input/SubmitButton'
import { BodyPLarge } from './text/BodyPLarge'
import { SubPageH1 } from './text/SubPageH1'

export default function Signup() {
  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <SubPageH1 content={'Ready to take a free trial?'}></SubPageH1>
      </div>
      <div>
        <BodyPLarge
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
          sed do eiusmod tempor incididunt ut labore'
          }
        ></BodyPLarge>
      </div>
      <div>
        <SubmitButton content='Register' />
      </div>
    </div>
  )
}
