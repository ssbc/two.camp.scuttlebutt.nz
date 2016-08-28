import { start, pull } from 'inu'
import html from 'yo-yo'

import app from './App'

const main = document.querySelector('.main')
const { views } = start(app)

pull(
  views(),
  pull.drain(function (view) {
    html.update(main, view)
  })
) 

