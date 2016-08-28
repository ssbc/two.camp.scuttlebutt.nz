import { App } from 'inux'

import about from './domains/about'
import logistics from './domains/logistics'
import gifts from './domains/gifts'
import rsvp from './domains/rsvp'
import main from './domains/main'

export default App([
  about,
  logistics,
  gifts,
  rsvp,
  main,  // this will be the default view
])

