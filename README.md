# exchange-rates
A user interface that displays the latest exchange rates

## Getting started

### Local development

To start a local development server and run the pipeline steps on file save, run `develop.sh` located in the project directory.

#### Pipeline

There is a `pre-commit` git hook that runs the following activities:

1. **Formatting**: Code is formatted using [Prettier](https://prettier.io/).
2. **Linting**: Linting is handled using [ESLint](https://eslint.org/).
3. **Testing**: Testing is performed using [Jasmine](https://jasmine.github.io/).
4. **Bundling**: Bundling is handled using [Rollup](https://rollupjs.org).

This step also adds bundled assets into the `dist` folder as an artifact for GitHub Pages.