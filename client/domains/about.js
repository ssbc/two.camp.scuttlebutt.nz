import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'about'

const view = (params, model, dispatch) => html`
  <div>
    <div>
      <h2>vibe / intention</h2>
    </div>

    <div>
      programme 
    </div>

    <div>
      cultural glossary 
    </div>

    <div>
      what to wear
    </div>
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
