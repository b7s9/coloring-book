# Contributing.md

## Branch rules

New featre = new branch. New bugfix = new branch. For every change or addition you want to make in this project, take the following steps:

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
