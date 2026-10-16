import type { Meta, StoryObj } from '@storybook/angular';
import { BaseLink } from './base-link.component';

const meta: Meta<BaseLink> = {
  title: 'Components/BaseLink',
  component: BaseLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseLink** é um componente de hiperlink estilizado com cores corporativas, transições suaves de hover e foco acessível.'
      }
    }
  },
  argTypes: {
    href: { control: 'text', description: 'URL de destino do link' }
  }
};

export default meta;
type Story = StoryObj<BaseLink>;

export const Default: Story = {
  args: {
    href: 'https://github.com'
  }
};
