import type { Meta, StoryObj } from '@storybook/angular';
import { BaseCard } from './base-card.component';

const meta: Meta<BaseCard> = {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseCard** é um contêiner genérico para exibição de conteúdo estruturado, opcionalmente com imagem, título e suporte a cliques.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<BaseCard>;

export const Default: Story = {
  args: {
    title: 'Card de Exemplo',
    imageUrl: 'https://images.unsplash.com/photo-1579309401371-cc709ac5e5a2?auto=format&fit=crop&w=600&q=80',
    clickable: true
  }
};
