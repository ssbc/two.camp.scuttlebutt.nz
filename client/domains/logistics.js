import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'logistics'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
      <h2>Venue</h2>
      The <a href="http://www.waihoanga.co.nz" target="_blank">Waihōanga Centre for Wellbeing</a> is located in Otaki Forks, outside of Wellington. 
      There’s gorgeous forest with walking tracks, a river for swimming, a ropes course, and heaps of space for activities.
    </div>

    <div class='sub-section'>
      <img src='images/river.jpg' />
    </div>
    
    <div class='sub-section'>
      <h2>What to Bring</h2>
      
      <p>
        There will be a lot of free time to spend together.
        Bring whatever you’d most want for a fun, relaxed afternoon.
      </p>

      <ul>
        <li>Togs (swimsuit) and towel for river swimming</li>
        <li>Musical instruments</li>
        <li>Games and sports gear</li>
        <li>Fun crafts or activities to share</li>
        <li>Walking shoes</li>
        <li>BYO alcohol </li>
        <li>Bedding, if you’re staying overnight</li>
      </ul>
    </div>

    <div class='sub-section'>
      <h2>Transport</h2>
      We will be arranging carpooling or a shuttle from Wellington for those who need rides. 
      Please indicate if you need or can offer a ride when you RSVP.
    </div>
    
        <div class='sub-section'>
      <h2>Food</h2>
      Meals will be buffet-style, with options to suit various preferences. We are omnivores, but there will be vegan, gluten-free, and dairy-free choices where possible.
      Alcohol will not be a major focus of the festivities, although it is welcome at the event. We're asking guests to please BYO your beverages of choice.
    </div>

    <div class='sub-section'>
      <h2>Accommodation</h2>
      Some guests will be staying overnight at the venue, either in the lodge or camping out. 
      If you stay over, you’ll need to bring your own bedding or sleeping bag.
    </div>
    
        <div class='sub-section'>
      <h2>Children</h2>
      The venue and atmosphere will be pretty kid-friendly, with lots of places to play and activites for them. 
      We just ask that during the short formal ceremony, kids who don't want to be quiet are occupied elsewhere.
    </div>

    <div class='sub-section'>
      <h2>Out of Town Guests</h2>
      If you’re coming in from far away, we want to help make your trip as easy and enjoyable as possible. 
      Please get in touch with us if you need any help or information about New Zealand or Wellington.
    </div>

    <div class='sub-section'>
      <img src='images/dressedup.jpg' />
    </div>

    <div class='sub-section'>
      <h2>What to Wear</h2>
      No dress code! Dress up if it makes you happy, or be casual. 
      The Bride and Groom will be dressing up for the ceremony, and then changing into comfortable clothes later in the day.
    </div>
    
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
