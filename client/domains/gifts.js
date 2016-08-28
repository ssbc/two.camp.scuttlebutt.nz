import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'gifts'

const view = (params, model, dispatch) => html`
  <div>
    <div>
      presents 
    </div>

    <div>
      BYO alcohol 
    </div>

    <div>
      house fund 
    </div>
    
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
