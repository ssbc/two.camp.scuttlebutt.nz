import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'gifts'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
      <p>
        The greatest gift we can imagine is spending time with you! We’re touched that you want to be present with us on our special day, and there’s no need to give anything more.
      </p>

      <p>
        We’re asking guests to BYO drinks of choice, so you could bring a little extra of your favorite to share.
      </p>
    </div>

    <div class='sub-section'>
      <p>
        <em>
          If you’re one of those stubbornly generous types and really want to gift something directly, please contributions to our house fund:
        </em>
      </p>

      Paypal: <pre>kdynamic@gmail.com</pre> <br />

      NZ Bank Transfer: <pre>38-9014-0578605-03</pre>
    </div>
    
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
