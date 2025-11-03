# BHGE
A website for the future indoor beach volley facility of Geneva


## Hosting
It is hosted on a digital ocean droplet. Access to it can be made through SSH or via the Digital Ocean website console.

## Deployment
A CI/CD has been implemented in .github. Thanks to it, any branch merged into master will automatically be deployed online. It usually takes a few minutes.

## Development
### Requirements:
- npm installed

### Steps:
- run `npm install` to install all packages specified in 
- run `npm run start` to run locally, then in your browser go on http://localhost:3000/ to view.

### Gitflow
For every new "feature", create a new branch. Then once the development of this feature is complete, squash and merge into master from the github interface.

