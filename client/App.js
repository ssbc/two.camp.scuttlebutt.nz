import { App } from 'inux'

import main from './main'
import about from './about'
import logistics from './logistics'
import gifts from './gifts'
import rsvp from './rsvp'
 
 
const app = App([
  about,
  logistics,
  gifts,
  rsvp,
  main,  // will default to this route
])

export default app

