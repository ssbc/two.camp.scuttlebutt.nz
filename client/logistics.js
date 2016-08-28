import html from 'yo-yo'
import { Domain } from 'inux'

import navigation from './partials/navigation'
 
const DOMAIN = 'logistics'

const view = (model, dispatch) => html`
  <div>
    ${navigation()}
    <h1>${DOMAIN} view</h1>

    <div>
      transport 
    </div>
    <div>
      accomidation 
    </div>
    <div>
      international 
    </div>
    <div>
      venue 
    </div>
    <div>
      what to bring  (should what to wear be in here?)
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
 

