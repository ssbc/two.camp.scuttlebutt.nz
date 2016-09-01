import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
import map from '../partials/map'

const NAME = 'main'
 
const view = (params, model, dispatch) => html`
  <div>
    <div class='main-title center'> 
      <h1>Mix & Alanna's Wedding</h1>
      <h2>January 10th 2016</h2>
    </div>
    
    <div class='rsvp-link center'>
      <div><a href='rsvp' class='button'>RSVP</a> </div>
      <div>Please respond by 31 October.</div>
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
 
