# Future Adventurers — Kids eLearning Website

A small multilingual (Arabic / French / English) educational website for children with short courses and interactive lesson games. Built with plain HTML, CSS and JavaScript for easy local hosting and quick edits.

## Features
- Course pages (pollution, locomotion, breathing, blood components, compass, pets/wild, food chain)
- Interactive games per lesson: sort, quiz, memory, match and order activities
- Multilingual support (Arabic, French, English) with a language switcher and URL/localStorage sync
- Lightweight assets: images, videos and audio under `assests/` and `photo/`

## Tech
- HTML5, CSS3, vanilla JavaScript
- No build step; static site suitable for GitHub Pages

## Project structure (important files)
- `index.html` — home page
- `aboutus.html` — about page
- `style.css`, `standalone.js`, `script.js` — main styles and scripts
- `cources/` — course pages and the newly added `breathingcourse.html`
- `games/` — lesson games and `lesson-games.js`
- `assests/`, `photo/` — media used by pages

## Run locally
Quick preview (recommended to serve files with a static server to avoid video/CORS issues):

Using Python 3 built-in server:

```bash
cd /path/to/pferania
python3 -m http.server 8000
# open http://localhost:8000/ in your browser
```

Or with Node (if installed):

```bash
npx serve .
```

You can also open `index.html` directly in a browser, but some media (video/requests) work best when served over HTTP.

## Upload to GitHub (example commands)
If you don't yet have a remote repo, run these from the project root:

```bash
cd /path/to/pferania
git init
git add .
git commit -m "Initial commit: kids eLearning website"
# create a GitHub repo online and copy its URL, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

If you use the GitHub CLI (`gh`), you can create and push in one step:

```bash
gh repo create yourusername/your-repo-name --public --source=. --remote=origin --push
```

## Notes
- The breathing course currently uses placeholder images from the pollution course; update images in `cources/breathingcourse.html` as desired.
- Language is controlled by `script.js` (URL param `?lang=` or saved in localStorage). If the page shows English, check the `lang` URL param or localStorage key `petWildLang`.

---
Small project maintained locally — tell me if you want me to create the GitHub repo and push from here (I can prepare commands or automate if you give the remote URL).