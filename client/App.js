import { App } from 'inux'

import about from './domains/about'
import info from './domains/info'
import gifts from './domains/gifts'
import rsvp from './domains/rsvp'
import main from './domains/main'

export default App([
  about,
  info,
  gifts,
  rsvp,
  main,  // this will be the default view
])

