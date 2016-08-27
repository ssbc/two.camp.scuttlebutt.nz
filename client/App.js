const { start, html } = require('inu')
const { App, Domain, Action } = require('inux')
const extend = require('xtend')
 
const INCREMENT = Symbol('increment')
const DECREMENT = Symbol('decrement')
const SET = Symbol('set')
 
const increment = Action(INCREMENT)
const decrement = Action(DECREMENT)
const set = Action(SET)
 
const view = (model, dispatch) => html`
  <div>
    <button onclick=${(e) =>
      dispatch(decrement())
    }> - </button>
    <input type='number'
      oninput=${(ev) => {
        dispatch(set(Number(ev.target.value)))
      }}
      value=${model}
    />
    <button onclick=${(e) =>
      dispatch(increment())
    }> + </button>
    <a href="other">test link</a>
  </div>
`

const view2 = (model, dispatch) => html`
  back here!
`
 
const counter = Domain({
  name: 'counter',
  init: () => ({ model: 0 }),
  update: {
    [INCREMENT]: (model) => ({ model: model + 1 }),
    [DECREMENT]: (model) => ({ model: model - 1 }),
    [SET]: (model, value) => ({ model: value })
  },
  routes: [
    ['', (params, model, dispatch) => {
      return view(model.counter, dispatch)
    }],
    ['other', (params, model, dispatch) => {
      return view2(model.counter, dispatch)
    }]
  ]
})
 
const app = App([
  counter
])

export default app

