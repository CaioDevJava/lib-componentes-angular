import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Design System/Introdução',
  parameters: {
    docs: {
      description: {
        component: `
# 🎨 Design System — Biblioteca de Componentes Angular

Bem-vindo à documentação oficial do Design System da biblioteca de componentes reutilizáveis em **Angular 19**. 
Esta biblioteca foi arquitetada seguindo as melhores práticas do mercado, priorizando **alta performance**, **acessibilidade (A11y)**, **Standalone Components** e **ChangeDetectionStrategy.OnPush**.

---

## 🚀 Como Instalar e Consumir

Você pode instalar a biblioteca diretamente no seu projeto Angular consumidor via Git/GitHub ou pacote npm:

\`\`\`bash
npm install git+https://github.com/seu-usuario/lib-componentes-angular.git#develop
\`\`\`

### 1. Importação dos Estilos Globais
No arquivo \`src/styles.scss\` da sua aplicação consumidora, importe os estilos e tokens globais da biblioteca:

\`\`\`scss
@import '@workspace/component-library-angular/styles.css';
\`\`\`

---

## 📦 Como Usar os Componentes

Todos os componentes são **Standalone Components**. Para utilizá-los em seus componentes Angular, basta importá-los diretamente no array \`imports\`:

\`\`\`typescript
import { Component } from '@angular/core';
import { BaseButton, BaseInput, BaseToast, BaseCard, BaseGrid } from '@workspace/component-library-angular';

@Component({
  selector: 'app-minha-pagina',
  standalone: true,
  imports: [BaseButton, BaseInput, BaseToast, BaseCard, BaseGrid],
  template: \`
    <base-grid [columns]="2" gap="1rem">
      <base-card title="Cadastro de Cliente">
        <base-input label="Nome Completo" placeholder="Digite seu nome..." />
        <base-button label="Salvar" variant="success" />
      </base-card>
    </base-grid>

    <base-toast message="Toast de exemplo!" variant="success" [duration]="4000" />
  \`
})
export class MinhaPaginaComponent {}
\`\`\`

---

## 💎 Design Tokens (Variáveis CSS)

A biblioteca expõe tokens CSS customizáveis que podem ser sobrescritos no escopo da sua aplicação:

| Token CSS | Descrição | Valor Padrão |
|---|---|---|
| \`--base-primary\` | Cor primária de destaque | \`#4f46e5\` |
| \`--base-success\` | Cor de sucesso | \`#10b981\` |
| \`--base-warning\` | Cor de alerta / aviso | \`#f59e0b\` |
| \`--base-danger\` | Cor de erro / perigo | \`#ef4444\` |
| \`--base-radius\` | Raio de borda padrão | \`0.75rem\` |
| \`--base-shadow\` | Sombra de elevação | \`0 4px 6px -1px rgba(...)\` |

---

## 📋 Componentes Disponíveis

Explore a barra lateral para visualizar a documentação detalhada, propriedades (*Props*) e exemplos interativos de cada componente:
- **BaseButton**: Botões com múltiplos estados (Primary, Success, Warning, Danger, Ghost, Loading).
- **BaseInput & BaseSelect**: Campos de formulário com estados de validação (\`success\`, \`error\`, \`warning\`) e *helper text*.
- **BaseToast**: Notificações flutuantes com barra de progresso animada, timer e bordas coloridas (\`success\` verde, \`warning\` laranja).
- **BaseCard & BaseGrid**: Cards estruturados e layout em grade responsivo com animações em hover.
- **BaseTab**: Navegação por abas com conteúdo dinâmico.
- **BaseToggle**: Switch acessível (\`role="switch"\`).
- **BaseTitle**: Títulos tipográficos (\`h1\`–\`h6\`) com variações de gradiente.
- **BaseCarousel**: Carrossel automático (5s) com suporte a cliques e links.
- **BaseModal**: Janela modal acessível com suporte a fechar por ESC e overlay.
- **BaseChip**: Etiquetas (*pills*) com botão "x" opcional e cores customizáveis.
- **BaseTooltip**: Dicas flutuantes com quebra de linha e limite de caracteres.
- **BaseLink & BaseIcon**: Hiperlinks e ícones padronizados.
`
      }
    }
  }
};

export default meta;

export const Overview: StoryObj = {
  render: () => ({
    template: `
      <div style="padding: 2rem; font-family: system-ui, sans-serif; max-width: 800px; color: #0f172a;">
        <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem; color: #4f46e5;">
          Design System &mdash; Component Library
        </h1>
        <p style="font-size: 1.1rem; color: #64748b; line-height: 1.6; margin-bottom: 1.5rem;">
          Selecione qualquer componente no menu lateral para inspecionar sua documentação técnica, propriedades e exemplos interativos.
        </p>
      </div>
    `
  })
};
