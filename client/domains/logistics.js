import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'logistics'

const view = (params, model, dispatch) => html`
  <div>
    <div>
      transport 
    </div>

    <div>
      accomidation 
    </div>

    <div>
      international 
    </div>

    <div>
      venue 
    </div>

    <div>
      what to bring  (should what to wear be in here?)
    </div>

  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
