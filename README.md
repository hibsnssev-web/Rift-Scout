# Rift Scout

League of Legends champion profiles, 29,756 matchup breakdowns and builds, as a static website (no server or database needed).

- Open `index.html` to use it locally.
- Private online copy: https://claude.ai/artifact/LPT9PdNuo7uuGA1Mo1U5PG

## Publishing it as a public website

The whole site is this folder. `index.html` is the front page.

**Netlify (easiest)**
1. Make a free account at netlify.com.
2. Go to Sites → Add new site → Deploy manually, and drag this `rift-scout` folder onto the page.
3. Rename the site under Site configuration → Change site name (for example `rift-scout.netlify.app`).
4. To update later, open the site's Deploys tab and drag the folder in again.

**GitHub Pages (alternative)**
1. Create a public repository, then Add file → Upload files and drag in everything inside this folder.
2. Settings → Pages → Deploy from a branch → `main` / root → Save.
3. The site appears at `https://<your-username>.github.io/<repo-name>/`.

Keep the Riot Games disclaimer in the footer. Riot allows free fan sites that carry it.

## Updating for a new patch

- Champion profiles: `assets/data/champions-*.js` (alphabetical). Each champion has ratings (`s`), kit flags (`f`), strengths and weaknesses, risk limits, builds (`b`, `ob`) and known counters (`cb`). The schema is described at the top of `assets/engine.js`.
- Matchup rules: `assets/engine.js` (the `FACTORS` list).
- Champion icons: `assets/img/<champion>.png`, from Riot's Data Dragon (patch 16.19.1). A new champion needs its icon added here.
- After editing, re-upload the folder to your host. The patch number shown on the site is in `assets/app.js` and the footer text.
