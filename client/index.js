import { start, pull } from 'inu'
import html from 'yo-yo'

import app from './App'

const { views } = start(app)
const main = document.querySelector('.main')

pull(
  views(),
  pull.drain(function (view) {
    html.update(main, view)
  })
) 

