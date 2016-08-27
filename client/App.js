import { App } from 'inux'

import main from './main'
import about from './about'
import logistics from './logistics'
import gifts from './gifts'
import rsvp from './rsvp'
 
 
const app = App([
  main,
  about,
  logistics,
  gifts,
  rsvp
])

export default app

