import type { Meta, StoryObj } from '@storybook/angular';
import { BaseCarousel } from './base-carousel.component';

const meta: Meta<BaseCarousel> = {
  title: 'Components/BaseCarousel',
  component: BaseCarousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseCarousel** é um carrossel de imagens/conteúdo com navegação por setas, indicadores, autoplay automático a cada 5 segundos e suporte a links de redirecionamento ao clicar no slide.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<BaseCarousel>;

export const Default: Story = {
  args: {
    autoplay: true,
    interval: 5000,
    items: [
      { id: '1', title: 'Produto em Destaque 1', imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', content: 'Clique para acessar a página do produto.', linkUrl: 'https://github.com' },
      { id: '2', title: 'Oferta Especial 2', imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', content: 'Descontos válidos por tempo limitado.', linkUrl: 'https://github.com' }
    ]
  }
};
