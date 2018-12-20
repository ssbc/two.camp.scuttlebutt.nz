import html from 'yo-yo'

const navTitles = 'Main About FAQ Register'.split(' ')

const link = (title, activePath) => {
  const path = title === 'Main' ? '' : title.toLowerCase()
  const activePathClass = path === activePath ? 'activePath' : ''

  return html`
    <div class='nav-item'>
      <a href='/${path}' class='${activePathClass}'>
        ${title}
      </a>
    </div>
  `
}

export default (activePath) => html`
  <div class='nav-background'>
    <div class='nav-bar'>
      ${navTitles.map(title => link(title, activePath))}
    </div>
  </div>
`
