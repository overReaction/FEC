# FEC
Front End Capstone: Project Catwalk

## File Structure
```
.
├── circleci/
│   └── config.yml
├── client/
│   └── dist/
│   │   └── bundle.js
│   │   └── style.css
│   │   └── index.html
│   └── src/
│       └── index.jsx
│       └── example.test.jsx
│       └── components/
│           └── overview/
│           └── questionsAnswers/
│           └── ratingsReviews/
│           └── relatedItemsComparison/
├── coverage/
├── e2e/
│   └── jest.config.js
│   └── sample.test.js
├── helpers/
│   └── atelier.js
├── supertest/
│   └── jest.config.js
│   └── sample.test.js
├── .eslintrc
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
git fetch origin 
git reset --hard origin/main
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
```
git checkout main
git pull
git pull origin new-feature
git push
```
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

## Dependencies
- Styling framework: Material UI
- Testing: Jest with React Testing Library, Supertest, Puppeteer, CircleCI
- Linter: ESLint
- Asset compilation: Webpack/Webpack-dev
- Transpiling: Babel
- Front-End MVC: ReactJS with hooks for state management
- Server MVC: Express
- HTTP client: Axios
