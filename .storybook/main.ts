import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: [],
  framework: {
    name: '@storybook/angular',
    options: {
      tsConfig: './tsconfig.lib.json',
      enableCompodoc: false,
    },
  },
  docs: { autodocs: 'tag' },
};
export default config;
