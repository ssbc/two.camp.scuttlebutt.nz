import html from 'yo-yo'
import { Domain } from 'inux'

import navigation from './partials/navigation'

const DOMAIN = 'rsvp'
 
const view = (model, dispatch) => html`
  <div>
    ${navigation}
    <h1>${DOMAIN} view</h1>

    google form embed

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
 
