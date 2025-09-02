# 🧪 Teste Prático — MultiDrop

Aplicação Vue 3 (Vite + TS) com PrimeVue/PrimeFlex/PrimeIcons, i18n com prefixo na rota (`/:lang?`) e estado com Pinia (persistência seletiva).

## 🔧 Stack

- **Vue 3 + Vite + TypeScript**
- **PrimeVue** + **PrimeFlex** + **PrimeIcons**  
  Tema: `@primeuix/themes/aura`
- **Pinia** + `pinia-plugin-persistedstate`
- **vue-i18n** (multi-idioma com **prefixo na rota**)

## ✅ Requisitos

- **Node.js**: >= **20.19.0** (ou >= 22.16.0)  
  Verifique com:
  ```bash
  node -v
  npm -v
  ```

## 🚀 Como rodar

```bash
# 1) entrar na pasta do projeto
cd teste-pratico

# 2) instalar dependências
npm install

# 3) ambiente de desenvolvimento
npm run dev

# 4) build de produção
npm run build

# 5) pré-visualizar o build
npm run preview
```

## 🌐 Internacionalização (i18n)

- **Idiomas suportados**: `pt-BR`, `en`, `de`.
- **Prefixo na URL**: todas as rotas vivem sob `/:lang?`. Exemplos:
  - `/pt-BR/`, `/pt-BR/your-purchases`
  - `/en/`, `/de/`
- **Detecção & persistência**:
  - Na primeira visita, o idioma é escolhido por:
    1. `localStorage.locale` (se existir), senão
    2. `navigator.language` (`pt-*` → `pt-BR`, `de-*` → `de`, caso contrário `en`).
  - Um **guard do vue-router** força o prefixo da URL e sincroniza `i18n.locale`, `localStorage` e `document.documentElement.lang`.
- **Troca de idioma (sem reload)**:
  - No **canto superior direito** há um **Select** (apenas o idioma).  
  - Ao trocar, o app **atualiza o `:lang` da rota** e **muda o locale** do i18n **sem recarregar a página**.

## 🧭 Rotas

```
/:lang?
  ├─ ''                -> RequestRefundView   (solicitar reembolso)
  ├─ your-purchases    -> YourPurchasesView   (suas compras)
  └─ refund-form       -> RefundFormView      (formulário de reembolso)
```

## 🗃️ Estado (Pinia + Persistência)

- Stores em `src/stores/`.
- Persistência seletiva via `pinia-plugin-persistedstate` (ex.: e-mail do usuário).  
- Em `RequestRefundView`, o store pode ser limpo no `onMounted()` para começar “zerado”.

## 🧩 UI / Tema

- **PrimeVue** configurado com o tema **Aura** (`@primeuix/themes/aura`).
- **PrimeFlex** e **PrimeIcons** incluídos.
- Layout responsivo (dialogs sobem no mobile, cards se reorganizam, etc.).

## 📝 Regras de Formulários (validações)

### 1) Request Refund (página inicial)
- **Campo de e-mail** (obrigatório):
  - Requer pelo menos um `@` para habilitar a continuidade.
  - Mostra erro e `aria-*` de acessibilidade quando inválido.
  - Botão “Encontrar sua compra” só prossegue se o e-mail for válido.
- Ao enviar, abre um **Dialog** para verificação de e-mail (OTP).

### 2) Dialog de Verificação (OTP)
- **InputOtp (6 caixas)**:
  - **Todos os campos devem estar preenchidos** (qualquer número).
  - Se incompleto, o foco vai para a **primeira caixa vazia**.
  - Mostra mensagem de erro e `aria-*` quando incompleto.
  - Ao completar, confirma e navega para **Your Purchases**.

### 3) Refund Form
- **Motivo do reembolso** (obrigatório):
  - É necessário **selecionar um motivo** (RadioButton).
  - Se não houver motivo, é exibido erro visual e mensagem.
- **Texto adicional** (opcional):
  - Textarea sem obrigatoriedade.

## ♿ Acessibilidade

- Campos invalidáveis usam `aria-invalid` e `aria-describedby`.
- Mensagens de erro são associadas via `id` quando exibidas.

## 🔌 Scripts úteis

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção
npm run preview   # preview do build
```
## 🧰 Troubleshooting

- **Porta ocupada** ao rodar `dev`:
  - Finalize o processo anterior ou rode `npm run dev -- --port 5174` (por exemplo).
---
