import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'register'

const view = (params, model, dispatch) => html`
  <div class='rsvp'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfu1cYi5XYRZGTag3LfuNk198LhxFgf9mK3puPQHuACaRau_g/viewform?embedded=true" width="400" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)]
  ]
})
