import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'about'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
      Our wedding is a rare opportunity to bring together our loved ones. 
      More than anything, we want to enjoy quality time with you, and give you the chance to meet one another. 
      We hope to create a relaxed and spacious atmosphere in a lovely setting, where we can linger over good food and unhurried conversation. 
      Help us celebrate our marriage by reveling in the joys of family, friends, community.
    </div>

    <div class='sub-section'>
      <h2>Programme</h2>

      <h3>Tuesday, Jan 10</h3>
      <p>(all guests)</p>
      <table>
        <tr>
          <td>11:00 - 12:00</td>
          <td> Arrival, mingling</td>
        </tr>
        <tr>
          <td>12:00 - 13:00</td>
          <td> Buffet lunch</td>
        </tr>
        <tr>
          <td>13:30 - 14:00</td>
          <td> Ceremony</td>
        </tr>
        <tr>
          <td>14:00 - 14:30</td>
          <td> Cake & Toasts</td>
        </tr>
        <tr>
          <td>14:30 - 18:30</td>
          <td> River swim, forest walks, arts & crafts, games, conversation, relaxation</td>
        </tr>
        <tr>
          <td>18:30 - 19:30</td>
          <td> Buffet dinner, departures of those not staying overnight</td>
        </tr>
        <tr>
          <td>20:00 onward</td>
          <td> Bonfire, music jam, hanging out</td>
        </tr>
      </table>


      <h3>Wednesday, Jan 11 </h3>
      <p>(overnight guests)</p>

      <table>
        <tr>
          <td>10:00 - 11:00</td>
          <td> Slow start and fry-up brunch</td>
        </tr>
        <tr>
          <td>11:00 - 13:00</td>
          <td> more hanging out, clean up, pack down, depart</td>
        </tr>
      </table>
    </div>

    <div class='sub-section'>
      <h2>Ceremony</h2>

      <p>
        As an international couple, our ceremony will bring together traditions from different culture, including Jewish, Scottish, Kiwi, and some of our own.
      </p>

      <p>
        The vows will take place under a chuppah, a fabric canopy symbolising the home and life the newly married couple will build together.
        The poles are held by people close to the bride and groom, who will support their union and life together.
        The side are open, to welcome people in with hospitality. 
      </p>

      <p>
        We’ll drink together from a quaich, the Scottish cup of love and friendship.
        The two handles make the Quaich an ideal cup for sharing and incorporates trust between the giver and the receiver.
        Used in many ceremonies, at weddings the Quaich is seen as a symbol of the shared love between the couple.
      </p>

      <p>
        At the conclusion of the ceremony, a glass will be broken and everyone can shout Mazel Tov! (congratulations).
        Symbolically, it reminds us that life and love are fragile, like glass, and we must treat them with care.
        It is also the shattering of the old and the beginning of the new.
        We only know sweetness alongside bitterness, and joy alongside sorrow.
        At the moment of our great happiness, there is still suffering in the world, which requires our care and love. 
      </p>

      <p>
        Right after the ceremony, the bride and groom will retreat for a few moments to a yichud room, to spend a short secluded time together, so they can connect just to one another briefly in all the hustle and bustle of the wedding.
      </p>
    </div>

  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)],
  ]
})
 
