# @workspace/component-library-angular

Biblioteca Angular de componentes genéricos `Base*`, preparada para instalação como pacote npm.

```bash
npm install @workspace/component-library-angular
```

```ts
import { BaseButton, BaseTable } from '@workspace/component-library-angular';
```

Inclui `BaseButton`, `BaseInput`, `BaseSelect`, `BaseDropdown`, `BaseModal`, `BaseTable`, `BaseChip`, `BaseCheckbox`, `BaseToast`, `BaseTooltip`, `BaseLink` e `BaseIcon`. Cada componente é standalone, tipado e configurável por inputs/outputs. Execute `npm run build` e `npm run lint` para validar o pacote. O Storybook em `.storybook/` documenta os exemplos e personalização por tokens CSS.

Os componentes usam templates e SCSS externos. O projeto consumidor pode sobrescrever `--base-*`, complementar classes e fornecer seus próprios estilos sem editar a biblioteca. A tabela aceita `columns` como `['nome', 'telefone', 'endereço']` ou objetos `{ key, label }`, além de `rows` e do alias compatível `dados`.

Componentes específicos devem usar composição no template Angular, por exemplo: `TableCliente` recebe `Cliente[]`, importa suas colunas e fornece ambos ao `base-table`; a biblioteca não conhece clientes, produtos ou vendas.
