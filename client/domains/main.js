import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
import map from '../partials/map'

const NAME = 'main'
 
const view = (params, model, dispatch) => html`
  <div>
    <div class='row'>
      <div class='twelve columns'>
        <a href='rsvp' class='button'>rsvp</a> 
       </div>
    </div>
    <div class='row'>
      January 10th 2016 
    </div>

    <div class='row'>
      ${map()}
    </div>
  </div>
`

export { view }

export default Domain({
  name: NAME,
  routes: [
    ['/', render(view)],
  ]
})
 
