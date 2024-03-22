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

##Deploy to github to render the app

1st install the gh-page dependency
```
$ npm install gh-page s --save-dev

```

Then add the following lines in "package.json" 
```
"homepage":"https://alfance.github.io/kylo-website-2024-React",
```
at top, above name

```
    "predeploy":"npm run build",
    "deploy":"gh-pages -d build",
```
in scripts, between Start and Build. 

Once done, commit and push all changes to github. 
Go back to termina, and run deploy 
```
npm run deploy
```
make sure it's published. 

Once done, go to git repo onlline, check to see if there is gh-page under main branch. 

