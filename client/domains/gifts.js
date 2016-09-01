import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'gifts'

const view = (params, model, dispatch) => html`
  <div>
    <div>
      <p>
        The greatest gift we can imagine is spending time with you! We’re touched that you want to be present with us on our special day, and there’s no need to give anything more.
      </p>

      <p>
        We’re asking guests to BYO alcohol, so you could bring a little extra of your favorite to share.
      </p>

      <p>
        If you’re one of those stubbornly generous types and really want to give, please contribute to our house fund, to help us buy a home of our own. 
      </p>
    </div>

    <div>
      Paypal:
    </div>

    <div>
      NZ Bank Transfer:
    </div>
    
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
