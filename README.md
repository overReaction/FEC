<p align='center'>
  <img src='screenshots/Screen Shot 2021-05-31 at 5.23.21 PM.png'/>
  <img src='screenshots/Screen Shot 2021-05-31 at 5.24.27 PM.png'/>
</p>

## Features
- Browse available styles for a given product
- Gallery with expanded/magnified views
- Add to cart and add to outfit
- Compare related products
- Review questions/answers for products
- Add questions/answers, and report questions/answers
- View ratings/reviews, including feedback on fit/quality etc
- Add reviews

## Built with:
- Front end: React/Redux, MaterialUI
- Testing: Jest with React Testing Library, Supertest, Puppeteer, CircleCI
- Linter: ESLint
- Back end: Express, Axios

## Preview:
<img src='screenshots/Screen Shot 2021-05-31 at 5.03.06 PM.png'/>
<img src='screenshots/Screen Shot 2021-05-31 at 5.05.23 PM.png'/>
<img src='screenshots/Screen Shot 2021-05-31 at 5.07.03 PM.png'/>
<img src='screenshots/Screen Shot 2021-05-31 at 5.07.37 PM.png'/>
<img src='screenshots/Screen Shot 2021-05-31 at 5.08.56 PM.png'/>

## Installation:
- From your terminal, `git clone https://github.com/overReaction/FEC.git`
- Create a file in the main project directory called `APIconfig.js`. In that file, paste the following:
```
module.exports = {
  API_KEY: '<API key>'
};

```
- Navigate to the main project directory
- `npm install`
- `npm run start-react`
- In a separate terminal, `npm run start`

## Usage:
Navigate to localhost:3000 after running the above commands

## File Structure
```
.
├── circleci/
│   └── config.yml
├── client/
│   └── dist/
│   │   └── <ignored bundles>
│   │   └── style.css
│   │   └── index.html
│   └── src/
│       └── index.jsx
│       └── store.js
│       └── components/
│           └── overview/
│           └── questionsAnswers/
│           └── ratingsReviews/
│           └── relatedItemsComparison/
│           └── App.jsx
│           └── appSlice.jsx
│           └── loading.jsx
│           └── starRating.jsx
├── helpers/
│   └── atelier.js
├── testing/
│   └── e2e/
│   │   └── jest.config.js
│   │   └── sample.test.js
│   └── supertest/
│       └── jest.config.js
│       └── sample.test.js
├── .eslintrc
├── .gitignore
├── babel.config.json
├── package.json
├── README.md
├── server.js
└── webpack.config.js
```

## Git Workflow
1) Switch the repo to the master branch, pull the latest commits and resets the repo's local copy of master to match the latest version
```
git checkout main
git pull origin main
```
2) Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch. This checks out a branch called new-feature based on master, and the -b flag tells Git to create the branch if it doesn’t already exist.
```
git checkout -b new-feature
```
3) Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch.
```
git status
git add <some-file>
git commit
```
4) Push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch. This command pushes new-feature to the central repository (origin).
```
git push origin new-feature
```
5) To get feedback on the new feature branch, create a pull request in Github. Now teammates comment and approve the pushed commits. Resolve their comments locally, commit, and push the suggested changes. Your updates appear in the pull request.
6) Once approved by the team, merge your pull request. Before you merge, you may have to resolve merge conflicts if others have made changes to the repo. First, you need to make sure your local master is synchronized with the upstream master. Then, you merge the feature branch into master and push the updated main back to the central repository.

## Running Tests
<b>All of the below tests will be run whenver you commit/push to your feature branch via CircleCI. The results of the specific tests can be viewed on CircleCI's GUI.</b>
- To run ALL unit tests, run npm run `test:unit`
- To run widget tests:
  - Overview: `test:overview`
  - Questions & Answers: `test:qa`
  - Ratings & Reviews: `test:rr`
  - Related Items & Comparisons: `test:ric`
- To run integration testing with supertest, run `test:supertest`
- To run end-to-end testing, run `test:e2e`

