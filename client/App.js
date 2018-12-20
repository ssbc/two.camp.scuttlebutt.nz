import { App } from 'inux'

import about from './domains/about'
import faq from './domains/faq'
import register from './domains/register'
import main from './domains/main'

export default App([
  about,
  faq,
  register,
  main // this will be the default view
])
