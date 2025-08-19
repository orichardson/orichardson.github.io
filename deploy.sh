# script to build, deploy, and clean up the Jekyll site.

echo "Building the site..."
bundle exec jekyll build

echo "Stashing uncommitted changes..."
# Stash any uncommitted or untracked files. The command will exit if there's nothing to stash.
git stash push -u -m "deploy-script-stash"

echo "Staging the '_site' directory..."
git add -f _site

echo "Creating a temporary build commit..."
# The --no-verify flag skips any pre-commit hooks you might have
git commit -m "Build: Temporary commit for deployment" --no-verify

echo "Splitting subtree and pushing to GitHub Pages..."
git subtree split --prefix _site -b gh-deploy-branch
git push deploy gh-deploy-branch:main --force

echo "Cleaning up local history..."
git reset --hard HEAD~1

# not needed... keep branch around?
echo "Cleaning up local deploy branch..."
git branch -D gh-deploy-branch

echo "Restoring stashed changes..."
# Pop the stash to bring back any changes you had before running the script.
# It will only run if a stash with the message "deploy-script-stash" exists.
if git stash list | grep -q "deploy-script-stash"; then
	git stash pop
fi

echo "Done!"
