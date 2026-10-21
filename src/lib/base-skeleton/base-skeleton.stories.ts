import type { Meta, StoryObj } from '@storybook/angular';
import { BaseSkeleton } from './base-skeleton.component';

const meta: Meta<BaseSkeleton> = {
  title: 'Components/BaseSkeleton',
  component: BaseSkeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseSkeleton** exibe blocos de carregamento em formatos de texto, avatar/círculo ou bloco/retângulo, com suporte a animações shimmer, pulse ou estática, acessibilidade integrada (aria-busy) e estilização flexível por tokens CSS.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circle', 'rectangle'],
      description: 'Formato estrutural do skeleton'
    },
    width: { control: 'text', description: 'Largura customizada (ex: 100px, 80%)' },
    height: { control: 'text', description: 'Altura customizada (ex: 20px, 200px)' },
    borderRadius: { control: 'text', description: 'Raio de borda personalizado' },
    animation: {
      control: 'select',
      options: ['shimmer', 'pulse', 'none'],
      description: 'Efeito de animação de carregamento'
    },
    ariaLabel: { control: 'text', description: 'Texto acessível para leitores de tela' }
  }
};

export default meta;
type Story = StoryObj<BaseSkeleton>;

export const TextVariant: Story = {
  args: {
    variant: 'text',
    width: '100%',
    height: '1rem',
    animation: 'shimmer'
  }
};

export const CircleAvatar: Story = {
  args: {
    variant: 'circle',
    width: '4rem',
    height: '4rem',
    animation: 'shimmer'
  }
};

export const RectangleCard: Story = {
  args: {
    variant: 'rectangle',
    width: '100%',
    height: '12rem',
    animation: 'pulse'
  }
};

export const CardSkeletonComposition: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 0.75rem; width: 350px; background: #fff; align-items: flex-start;">
        <base-skeleton variant="circle" width="3rem" height="3rem"></base-skeleton>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.75rem;">
          <base-skeleton variant="text" width="70%" height="1.25rem"></base-skeleton>
          <base-skeleton variant="text" width="100%" height="0.875rem"></base-skeleton>
          <base-skeleton variant="text" width="40%" height="0.875rem"></base-skeleton>
        </div>
      </div>
    `
  })
};
