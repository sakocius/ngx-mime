#!/bin/bash
# Script which always runs when the current Travis mode succeeds.

# Go to the project root directory
cd $(dirname $0)/../../dist

# If not running as a PR
if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  echo "Travis tests passed on 'master'."
  npm run semantic-release
fi