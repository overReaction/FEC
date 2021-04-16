# FEC
Front End Capstone: Project Catwalk

## File Structure
```
.
├── client/
│   └── dist/
│   │   └── bundle.js
│   │   └── style.css
│   │   └── index.html
│   └── src/
│       └── index.jsx
│       └── components/
├── config.js
├── coverage/
├── integration/
│   └── jest.config.js
├── node_modules/
├── .gitignore
├── package.json
├── helpers/
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
To run unit tests, run npm run `test:unit`
To run end-to-end testing, run `test:e2e`

## Dependencies
- Styling framework: Material UI
- Testing: Jest
- Linter: ESLint with Pomander
- Asset compilation: Webpack/Webpack-dev
- Transpiling: Babel
- Front-End MVC: ReactJS with hooks for state management
- Server MVC: Express
- HTTP client: Axios
