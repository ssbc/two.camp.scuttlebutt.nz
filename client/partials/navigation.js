import html from 'yo-yo'

const navTitles = "Main About Logistics Gifts RSVP".split(' ')

const link = (title, activePath) => {
  const path = title === 'Main' ? '' : title.toLowerCase()
  const activePathClass = path === activePath ? 'activePath' : ''

  const cols = title === 'Logistics' ? 'three' : 'two'

  return html`
    <div class='${cols} columns'>
      <a href='/${path}' class='${activePathClass}'>
        ${title}
      </a>
    </div>
  `
}

export default (activePath) =>  html`
  <div class='nav-bar row'>
    ${navTitles.map( title => link(title, activePath) )}
  </div>
`

