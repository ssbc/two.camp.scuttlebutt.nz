import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'
 
const NAME = 'about'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
      <h2>Intention</h2>
      <p>
        Our wedding is a rare opportunity to bring together our loved ones. 
        More than anything, we want to enjoy quality time with you, and give you the chance to meet one another. 
      </p>
      
      <p>
        We hope to create a relaxed and spacious atmosphere in a lovely setting, where we can linger over good food and unhurried conversation. 
        Help us celebrate our marriage by reveling in the joys of family, friends, community.
      </p>
    </div>

    <div class='sub-section'>
      <img src='images/face.jpg' />
    </div>

    <div class='sub-section'>
      <h2>Programme</h3>

      <h4>Tuesday</h4>

      <table>
        <thead>
          <tr>
            <th>Jan 10</th>
            <th>(all guests)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11:00 </td>
            <td> Arrival, mingling</td>
          </tr>
          <tr>
            <td>12:00 </td>
            <td> Buffet lunch</td>
          </tr>
          <tr>
            <td>13:30 </td>
            <td> Ceremony</td>
          </tr>
          <tr>
            <td>14:00 </td>
            <td> Cake & Toasts</td>
          </tr>
          <tr>
            <td>14:30 </td>
            <td> River swim, forest walks, arts & crafts, games, conversation, relaxation</td>
          </tr>
          <tr>
            <td>18:30 </td>
            <td> Buffet dinner, departures of those not staying overnight</td>
          </tr>
          <tr>
            <td>20:00 +</td>
            <td> Bonfire, music jam, hanging out</td>
          </tr>
        </tbody>
      </table>


      <h4>Wednesday</h4>

      <table>
        <thead>
          <tr>
            <th>Jan 11</th>
            <th>(overnight guests)</th>
          </tr>
        </thead>
          <tbody>
          <tr>
            <td>10:00 </td>
            <td> Slow start and fry-up brunch</td>
          </tr>
          <tr>
            <td>11:00 + </td>
            <td> more hanging out, clean up, pack down, depart</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class='sub-section'>
      <h2>Ceremony</h2>

      <p>
        As an international couple, our ceremony will bring together traditions from different culture, including Jewish, Scottish, Kiwi, and some of our own.
      </p>

      <p>
        The vows will take place under a <i><a href="https://en.wikipedia.org/wiki/Chuppah" target="_blank">chuppah</a></i>, a fabric canopy symbolising the home and life the newly married couple will build together.
        The poles are held by people close to the bride and groom, who will support their union and life together.
        The side are open, to welcome people in with hospitality. 
      </p>

      <p>
        We’ll drink together from a <i><a href="https://en.wikipedia.org/wiki/Quaich" target="_blank">quaich</a></i>, the Scottish cup of love and friendship.
        The two handles make the Quaich an ideal cup for sharing and incorporates trust between the giver and the receiver.
        Used in many ceremonies, at weddings the Quaich is seen as a symbol of the shared love between the couple.
      </p>

      <p>
        At the conclusion of the ceremony, a glass will be broken and everyone can shout <i>Mazel Tov!,</i> (congratulations).
        Symbolically, it reminds us that life and love are fragile, like glass, and we must treat them with care.
        It is also the shattering of the old and the beginning of the new.
        We only know sweetness alongside bitterness, and joy alongside sorrow.
        At the moment of our great happiness, there is still suffering in the world, which requires our care and love. 
      </p>

      <p>
        Right after the ceremony, the bride and groom will retreat for a few moments to a <i>yichud room</i>, to spend a short secluded time together, so they can connect just to one another briefly in all the hustle and bustle of the wedding.
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
 
