import { defineConfig } from 'cypress'
import coverage from '@cypress/code-coverage/task';
import istanbul from '@cypress/code-coverage/use-babelrc';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      coverage(on, config);
      on('file:preprocessor', istanbul);
      return config;
    },
  },
})
