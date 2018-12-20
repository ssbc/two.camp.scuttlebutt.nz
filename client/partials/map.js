import html from 'yo-yo'

const width = 400
const height = 400

const map = () => html`
  <div class='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.2792063379393!2d175.19308791598274!3d-40.82183051981542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d4095d38cd2a833%3A0x941dd3721825d507!2sRiverslea+Retreat!5e0!3m2!1sen!2snz!4v1545297330384" width="${width}" height="${height}" frameborder="0" style="border:0" allowfullscreen></iframe>

    <div>
      <p>
        Riverslea Retreat Center <br />
        733 Otaki Gorge Rd <br />
        Otaki Forks, Wellington Region <br />
        New Zealand <br />
      </p>
    </div>
  </div>
`

export default map
