import { App } from 'inux'

import main from './domains/main'
import location from './domains/location'
import programme from './domains/programme'
import faq from './domains/faq'
import conduct from './domains/conduct'
import register from './domains/register'

export default App([
  location,
  programme,
  faq,
  conduct,
  register,
  main // this will be the default view
])
