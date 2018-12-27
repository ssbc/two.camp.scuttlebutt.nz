import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
import map from '../partials/map'

const NAME = 'location'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
      <img src='images/riverslea_forest_people.jpg' />
    </div>

    <div class='sub-section'>
      The venue is <a href='http://www.riverslearetreat.co.nz/'>Riverslea Retreat Center</a>, about an hours drive up the coast from central Wellington.<br />
      We've chosen this venue because of the beautiful tranquil setting, and the affordances of accessibility it offers to a wide range of people.
    </div>

    ${map()}

    <div class='sub-section'>
      <p>
        We're renting the whole site, and there are a lot of different spaces for the group (and individuals) to spread out to. Outdoors there are several different decks (remember it's summer in NZ!), a small wooded area, and the riverside. Indoors, there's a large lounge, a dining area, and sleeping rooms. From previous experience here, I've found there's always somewhere comfortable to migrate to no matter my mood (e.g. low energy, hiding, gregarious, adventurous).
      </p>

      <p>
        Sleeping is in bunk rooms. There are a couple of smaller rooms which we'll be giving primarily to families. You bring your own bedding or rent it. If you're fro mout of town, you can probably also borrow a sleeping bag from a local.<br />
        If you really like sleeping in a tent, in the past there's been space for people to pitch tents (this doesn't change the cost).
      </p>
    </div>

    <div class='sub-section' style='display: grid; grid-template-columns: auto auto; grid-gap: 1rem'>
      <img src='images/riverslea_dining.jpg' />
      <img src='images/riverslea_deck.jpg' />
    </div>

  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)]
  ]
})
