import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-essentials'],
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
