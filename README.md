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

## Working with Redux
Examples have been written for App and Overview. Reference for redux toolkit: https://redux-toolkit.js.org/usage/usage-guide
Top level goals: Your widget and sub-components need to access shared state (like the current item #). Your widget also needs to be able to change shared state, such as when a related item thumbnail is clicked.

1) Create a file called `<component>Slice.js` in the same directory as the component to which you need to access shared state. See appSlice.js for a template.
2) Set a name by which your component's state can be accessed by itself and other components. Set initial state. See https://redux-toolkit.js.org/api/createSlice
3) Write reducers for your component and add corresponding actions to the export line. If you need conditional reducers, see the `extraReducers` section of the above link, specificially the "builder callback" notation. Also: https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation
4) Go to /src/components/store.js and import your reducer, and add it to the list of reducers.
5) Go to your component.jsx file, and add `import { useSelector, useDispatch } from 'react-redux';`. Also import any needed actions from your own componentSlice or from others. See overview.jsx to look at importing an action from appSlice.js

Reference for async data flow with React/Redux: https://redux.js.org/tutorials/fundamentals/part-6-async-logic and https://redux-toolkit.js.org/api/createAsyncThunk

## Dependencies
- Styling framework: Material UI
- Testing: Jest with React Testing Library, Supertest, Puppeteer, CircleCI
- Linter: ESLint
- Asset compilation: Webpack/Webpack-dev
- Transpiling: Babel
- Front-End MVC: ReactJS with hooks for state management
- Server MVC: Express
- HTTP client: Axios
