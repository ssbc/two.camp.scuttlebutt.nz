# two.camp.scuttlebutt.nz

## Setup

clone the repo then:

```bash
npm install
npm run build
npm start
```

`build` builds all the assets, while `start` serves them.

It looks like there are other commands for watching for files changes and rebuilding assets.
See the `package.json` scripts to see those.
My best guess is in the different terminals run

```bash
// 1
npm run watch:js
// 2
npm run watch:css
// 3
npm start
```

NOTE : that assumes you haven't modified the base html (as this skips building the html), but if you've run `npm run build` and you're not changing this file things should be fine

## Deploying 

```bash
npm run publish
```

pushes it to `gh-pages` branch, site should shortly be updated at two.camp.scuttlebutt.nz
