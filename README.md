# kylo-website-2024-React

Used Teleport HQ to convert figma into react, downloaded the zip and committed to github for hosting. 

##Installing
```
npm init
npm install
```
(for npm install, only the download zip version works, direct github export from teleport hq gives me build.js error) 


##dev

```
$ npm run start

```
Takes to "http://localhost:3000/kylo-website-2024-React"
git page: "https://alfance.github.io/kylo-website-2024-React/"

user port 3000
```
https://localhost:3000
```

##Build - build to bundle.js

```
$ npm -d build
$ npm run-script build

```

#rest is to deploy the app to github and setup custom domain, not part of the teleporthq workflow

##Deploy to github to render the app

1st install the gh-page dependency
```
$ npm install gh-page s --save-dev

```

Then add the following lines in "package.json" 
at top, above name
```
"homepage":"https://alfance.github.io/kylo-website-2024-React",
```
in scripts, between Start and Build. 
```
    "predeploy":"npm run build",
    "deploy":"gh-pages -d build",
```
*** Adding the homepage will make "npm run start" unable to render as it is default to localhost: 3000. easy way to fix was changing homepage to :".". remember to change it back. 

Once done, commit and push all changes to github. 
Go back to terminal, and run deploy 
```
npm run deploy
```
make sure it's published. 

Once done, go to git repo onlline, check to see if there is gh-page under main branch. 

##potential problems (may defer depending on env and build. 
- 404 cannot find page, this can be resolved by adding "homebase" to the package.json
- Images are not rendered on github: this is due to relative URL on github is set to account, not the repo. Once the custom domain is setup the image url should all be working. If need to render image on gh-page, must add "/repo-name" manually to all image src.
- Error of loading page, 404 cannot find js and css, same problem as above but reversely the page is loading "repo-name" in url src load, need to manually remove the "repo-name" in the index.html under build folder. 
reference: https://dev.to/n1ru4l/configure-the-cra-public-url-post-build-with-node-js-and-express-4n8
