import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'faq'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
      <h2>Is this just for coders?</h2>
      No! Building the future requires many skills. If you've been cheerleading, welcoming people, making art, casting spell, connecting humans, hosting events, or anything that has been growing the p2p garden that is scuttlebutt, we'd love to have you.
    </div>

    <div class='sub-section'>
      <h2>I'd love to come, but I can't afford $300 NZD !?</h2>
      We're glad you asked. We have 6 scholarships to support people who wouldn't otherwise be able to come. These make tickets half price. If that's still more than you can manage then let's talk more and we can probably use some of the ssbc open collective funds to help.
    </div>

    <div class='sub-section'>
      <h2>Who do I talk to if something comes up?</h2>
      Mikey (ahdinosaur) or Mix! They look like this: <br />
      <img src='images/mikey_mix.jpg' />
    </div>

    <div class='sub-section'>
      <h2>Is this 4 days of intense social interaction?</h2>
      If you want it to be! But also, the location is super chill, and there are a heap of inside and outside spaces. Everything outside of the "welcome circle" is optional.
    </div>

    <div class='sub-section'>
      <h2>What should I bring?</h2>
      
      <p>
        There will be a lot of free time to spend together.
        Bring whatever you’d most want for a fun, relaxed time. e.g.
      </p>

      <ul>
        <li>Bedding (the venue doesn't supply bedding, unless you'd like to rent)</li>
        <li>Togs (swimsuit) and towel for river swimming</li>
        <li>Musical instruments</li>
        <li>Games and sports gear</li>
        <li>Fun crafts or activities to share</li>
        <li>Walking shoes</li>
        <li>BYO alcohol </li>
      </ul>
    </div>

    <div class='sub-section'>
      <img src='images/river.jpg' />
      <br />
      This is Alanna by the river near the venue. She's helping organise the event too.
    </div>

    <div class='sub-section'>
      <h2>I have special dietary needs, how does that work?</h2>
      All meals are provided and vegetarian. If you have other needs (gluten free, vegan, celiacs, etc.), the venue will cover that as well, you just need to <strong>include  those details in your registration</strong>
    </div>

    <div class='sub-section'>
      <h2>Can I bring my campervan / tent and sleep there?</h2>
      Yes! There's some lawn and a carpark. The ticket cost is still the same (it covers venue use and food, it's not about where you sleep:)
    </div>

    <div class='sub-section'>
      <h2>Can I come for a couple of days but not all of them?</h2>
      The vibe we're going for doesn't really work with people dipping in and out (this is based on experience of event organising). If this is going to be a problem for you, please talk to mix before signing up.
    </div>
    
    <div class='sub-section'>
      <h2>Can I bring my kids?</h2>
      There are def gonna be some babies / kids there (ziva, nova). <br />
      We'd love parents to be able to attend. Please get in touch with <em>mix at protozoa dot nz</em> so we can talk about what your needs are.
    </div>

    <div class='sub-section'>
      <h2>I don't have a car, how do I get there?</h2>
      When you register, there's a question about this! We're gonna connect people who have spare seats with scuttle<em>butts</em> who need then!
    </div>

    <div class='sub-section'>
      <h2>I'm not from New Zealand, do I need a visa?</h2>
      Yeah. Check out New Zealands online info <a href ='https://www.newzealand.com/us/visas-and-immigration/'>here</a> (succinct tourism nz overview) or <a href='https://www.immigration.govt.nz/new-zealand-visas/options/visit/explore-visitor-visa-options'>here</a> (more detailed official immigration nz pick-a-path).
    </div>

  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)]
  ]
})
