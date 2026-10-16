import type { Meta, StoryObj } from '@storybook/angular';
import { BaseDropdown } from './base-dropdown.component';

const meta: Meta<BaseDropdown> = {
  title: 'Components/BaseDropdown',
  component: BaseDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseDropdown** exibe um menu suspenso flutuante com glassmorphism, animações suaves de fade e itens interativos.'
      }
    }
  },
  argTypes: {
    label: { control: 'text', description: 'Texto do botão ativador do dropdown' }
  }
};

export default meta;
type Story = StoryObj<BaseDropdown>;

export const Default: Story = {
  args: {
    label: 'Opções de Ação'
  }
};
