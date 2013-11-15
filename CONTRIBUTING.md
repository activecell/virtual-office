## Setup

1. Run `npm install` to set up your machine
1. Run `npm start` to run the app locally
1. Run `npm test` to run the test suite
1. Run `npm dev` to run the app locally with test watchers

## Style

We want to keep styles simple and consistent so that anyone
can drop in and out of the project seamlessly.

* All javascript should be written in coffeescript
* All markup should be in templates (and all templates written in handlebars)
* All css should be written in scss

## Making changes

1. Make changes in a branch
1. Push the branch to Github
1. Create a pull request
1. Adam will merge pull requests

## Acceptance criteria

1. Pushing to github will trigger continuous integration with Circle CI
1. Circle will test using the mocha suite and coffeelint
1. Pull requests are not ready for merging unless Circle is passing
1. Qualitatively, we want to see lots of documentation and test coverage, which Circle cannot pick up

## Documentation

1. We are aiming for literate programming. This means providing comments through your code to tell the "story" of what you're coding.
1. You should be able to come back to your code 6 months from now at 3 in the morning and recognize precisely what's going on in 2 minutes.
1. Another engineer should be able to hack on your code without asking you what's going on

## Tests

1. We unit test methods that do **anything** "tricky" or "clever" or "cute"
1. We try our best to avoid code that is "tricky" or "clever" or "cute"
1. For use, "integration tests" are browser tests without the server component
1. As such, integration tests mock server responses with sample data
1. We integration test all user flows that we advertise on marketing site and/or discuss on our knowledge base
1. Server code is tested in a separate repo
