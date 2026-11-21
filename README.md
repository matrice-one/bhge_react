# BHGE
The website of Beach Halle Genève, https://bhge.ch

## Where the site lives
Since November 2026 the site is plain HTML, with no build step:

- `site/index.html` is the French page
- `site/en/index.html` is the English page
- `site/img/` holds the photos and logos, and `site/docs/` the statutes PDF

To change a text, edit the HTML file in `site/` and merge the change into `master`.

The old React app (`src/`, `public/`, `package.json`) is kept in the repository for reference but is no longer built or deployed.

## Hosting
It is hosted on a Digital Ocean droplet (nginx). Access to it can be made through SSH or via the Digital Ocean website console. The domain and the contact@bhge.ch mailbox are at Infomaniak.

## Deployment
A CI/CD has been implemented in `.github/workflows/ci_cd.yml`. Any change merged into `master` is copied from `site/` to the server automatically. It usually takes a few minutes.
