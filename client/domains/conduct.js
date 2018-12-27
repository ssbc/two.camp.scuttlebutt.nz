import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'conduct'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
      <!-- source: https://hackmd.io/M_p3UxlpTHaZ4Wr0tP7kSQ?view#-->
      <div id="doc" class="markdown-body container-fluid comment-enabled"><h1 class="part" data-startline="1" data-endline="1" id="ScuttleCamp-Code-of-Conduct"><a class="anchor hidden-xs" href="#ScuttleCamp-Code-of-Conduct" title="ScuttleCamp-Code-of-Conduct" smoothhashscroll=""><span class="octicon octicon-link"></span></a>ScuttleCamp Code of Conduct</h1><p class="part" data-startline="3" data-endline="3">ScuttleCamp is committed to creating a safe and inclusive space. We strive to remove barriers to participation and to help everyone feel welcome.</p><p class="part" data-startline="5" data-endline="5">All participants at our event must agree with the following code of conduct. We need your cooperation to ensure a safe environment for everybody.</p><h2 class="part" data-startline="7" data-endline="7" id="Harrassment"><a class="anchor hidden-xs" href="#Harrassment" title="Harrassment" smoothhashscroll=""><span class="octicon octicon-link"></span></a>Harrassment</h2><p class="part" data-startline="9" data-endline="9">We are committed to providing a harassment-free experience. Harassment includes offensive verbal comments (related to gender, age, sexual orientation, disability, physical appearance, body size, race, or religion), deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p><p class="part" data-startline="11" data-endline="11">We expect that any requests to stop any harassing behaviour will be complied with immediately. As organisers we understand our responsibly to take any action deemed appropriate, including warning the offender or expulsion from the event with no refund.</p><p class="part" data-startline="13" data-endline="13">If you are being harassed, notice that someone else is being harassed, or have any other concerns, please let an organiser know. We will be happy to help participants contact local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe.</p><p class="part" data-startline="15" data-endline="15">We also expect participants to follow these rules at event-related social events and online channels.</p><h2 class="part" data-startline="17" data-endline="17" id="Accessibility"><a class="anchor hidden-xs" href="#Accessibility" title="Accessibility" smoothhashscroll=""><span class="octicon octicon-link"></span></a>Accessibility</h2><p class="part" data-startline="19" data-endline="19">Riverslea Retreat Centre has a separate bathroom accessible for people with mobility problems or physical disabilities. We will be catering for dietary restrictions and allergies that we are made aware of. There are a range of spaces to step out any time for a quiet break away from social interaction and noise.</p><h2 class="part" data-startline="21" data-endline="21" id="Contact-Comments-Feedback"><a class="anchor hidden-xs" href="#Contact-Comments-Feedback" title="Contact-Comments-Feedback" smoothhashscroll=""><span class="octicon octicon-link"></span></a>Contact, Comments, Feedback</h2><p class="part" data-startline="23" data-endline="23">If you have needs or concerns around your participation, please let us know and we will make every effort to help.</p><p class="part" data-startline="25" data-endline="25">Inclusion is an ongoing process, guided by learning from people about their needs and experiences. We would be very happy to hear from you if you have any concerns, questions, or requests.</p><p class="part" data-startline="27" data-endline="27">If you experience any form of harassment or are made to feel unwelcome, please let us know.</p><h3 class="part" data-startline="29" data-endline="29" id="Organiser-contact-details"><a class="anchor hidden-xs" href="#Organiser-contact-details" title="Organiser-contact-details" smoothhashscroll=""><span class="octicon octicon-link"></span></a>Organiser contact details</h3><p class="part" data-startline="31" data-endline="33">Mix Irving<br>
<a href="mailto:mix@protozoa.nz" target="_blank" rel="noopener">mix@protozoa.nz</a><br>
0277170042</p></div>
    </div>

  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)]
  ]
})
