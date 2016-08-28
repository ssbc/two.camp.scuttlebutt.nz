import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'rsvp'
 
const view = (params, model, dispatch) => html`
  <div>
    <div>
      google form embed
    </div>

  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
