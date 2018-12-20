import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
import map from '../partials/map'

const NAME = 'main'

const view = (params, model, dispatch) => html`
  <div>
    <div class='main-title center'> 
      <h1>SCUTTLE CAMP ONE</h1>
      <h2>February 24-28 2019</h2>
    </div>
    
    <div class='rsvp-link center'>
      <div><a href='register' class='button '>Register</a> </div>
    </div>

    ${map()}
  </div>
`

export { view }

export default Domain({
  name: NAME,
  routes: [
    ['/', render(view)]
  ]
})
