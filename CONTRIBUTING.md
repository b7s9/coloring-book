# Contributing.md

## Contributing workflow with branching

New feature = new branch. New bugfix = new branch. For every change or addition you want to make in this project, take the following steps:

1. Checkout to `develop`
1. Pull latest changes from origin:develop (recommended)
1. Checkout to new local branch (it is crucial you do this from `develop` aside from special cases)
1. Prefix the branch name with your name, followed by the purpose of the Pull Request you intend to make from this branch e.g. `ben/fix-node-security`, `devin/add-aria-support`
1. Do code
1. Commit approximately one change at a time using a [proper commit message](https://chris.beams.io/posts/git-commit/), prefixed by [Gitmoji](https://github.com/b7s9/commit-message-emoji). If there are multiple file changes in a single commit that's fine, but break it up if possible.
1. Push to upstream branch on origin. Create branch if necessary. e.g. `git push -u origin ben/fix-node-security`
1. Once you are done working on the feature/fix, open a pull request against `develop`
1. Request a reviewer on the PR, and be open to feedback

**Never git commit any passwords, personally identifying information, or anything that may compromise the security of the project**.

Please read the 'proper commit message' article but I'll reiterate the two most important points:
- Write with the imperative mood. All commit messages should start with gitmoji, then Fix/Update/Add/Refactor/Remove. No participles, no past tense. ie. "Adding", "Added". You should be able to scroll back through the git log and say for a given commit, "If I revert back to this commit, it will fix the console log error"
- Keep the commit message below 80 chars. If you did multiple things in a commit, add more lines as needed. 

## Pull Requests

The title of your pull request should summarize the feature or fix e.g. "Fix websocket compatibility on Safari". The first line of the body of the PR should reference the number of the issue it is fixing/resolving by writing "Fixes #12" or "Resolves #55". If the PR resolves multiple issues, create a new line for each reference. If changes are requested on your pull request, do the changes in the branch you opened that PR from, unless otherwise agreed you should open a new branch.
