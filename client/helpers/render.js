import html from 'yo-yo'

import navigation from '../partials/navigation'

const activePath = (model) => model.href.match(/[^\/]*$/)[0]

export default (view) => (params, model, dispatch) => html`
  <div>
    ${navigation(activePath(model))}
    <div class='content'>
      ${view(params, model, dispatch)}
    </div>
  </div>
`



