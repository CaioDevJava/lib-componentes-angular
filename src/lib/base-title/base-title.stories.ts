import type { Meta, StoryObj } from '@storybook/angular';
import { BaseTitle } from './base-title.component';

const meta: Meta<BaseTitle> = {
  title: 'Components/BaseTitle',
  component: BaseTitle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseTitle** é um componente de título tipográfico com suporte a níveis h1-h6 e variações visuais (default, gradient, muted).'
      }
    }
  }
};

export default meta;
type Story = StoryObj<BaseTitle>;

export const H1: Story = {
  args: {
    level: 'h1',
    text: 'Título Principal H1',
    variant: 'default'
  }
};

export const GradientH2: Story = {
  args: {
    level: 'h2',
    text: 'Título com Gradiente Moderno',
    variant: 'gradient'
  }
};
