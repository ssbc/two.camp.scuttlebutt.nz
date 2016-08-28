import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
import map from '../partials/map'

const NAME = 'main'
 
const view = (params, model, dispatch) => html`
  <div>
    <div>
      <a href='rsvp' class='button'>rsvp link</a> 
    </div>
    <div>
      January 10th 2016 
    </div>

    ${map()}
  </div>
`

export { view }

export default Domain({
  name: NAME,
  routes: [
    ['/', render(view)],
  ]
})
 
