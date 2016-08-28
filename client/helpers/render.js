import html from 'yo-yo'

import navigation from '../partials/navigation'

const activePath = (model) => model.href.match(/[^\/]*$/)[0]

export default (view) => (params, model, dispatch) => { 
  return html`
    <div>
      <nav>${navigation(activePath(model))}</nav>
      ${view(params, model, dispatch)}
    </div>
  `
}


