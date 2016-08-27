import html from 'yo-yo'
import { Domain } from 'inux'

import navigation from './partials/navigation'
 
const DOMAIN = 'gifts'

const view = (model, dispatch) => html`
  <div>
    ${navigation}
    <h1>${DOMAIN} view</h1>

    presents <br />
    BYO alcohol <br />
    house fund <br />
    
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
 

