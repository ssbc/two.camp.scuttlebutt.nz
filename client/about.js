import html from 'yo-yo'
import { Domain } from 'inux'

import navigation from './partials/navigation'
 
const DOMAIN = 'about'

const view = (model, dispatch) => html`
  <div>
    ${navigation()}
    <h1>${DOMAIN} view</h1>

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
  name: DOMAIN,
  routes: [
    [DOMAIN, (params, model, dispatch) => {
      return view(model, dispatch)
    }],
  ]
})
 
