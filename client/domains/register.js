import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'register'

const view = (params, model, dispatch) => html`
  <div class='rsvp'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiwaaiskYVLs97Z-JhoYdJYI485Sa22hrM7SJ7iXPf_JrOcA/viewform?embedded=true" width="960" height="2686" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)]
  ]
})
