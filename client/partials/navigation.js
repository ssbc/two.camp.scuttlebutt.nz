import html from 'yo-yo'

const navRoutes = "Main About Logistics Gifts".split(' ')

const link = (title) => {
  const path = title === 'Main' ? '' : title.toLowerCase()

  return html`
    <div class='three columns'>
      <a href='/${path}'>
        ${title}
      </a>
    </div>
  `
}

export default html`
  <div class='nav-bar row'>
    ${navRoutes.map( route => link(route) )}
  </div>
`

