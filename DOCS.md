# 📘 Documentação Técnica - MacaéTempo

## 📌 Visão Geral

Este projeto é um clone aprimorado do ClimaCaé, utilizando tecnologias modernas do ecossistema React/Next.js. O foco é aprendizado, boas práticas, aplicação de padrões de projeto e deploy automatizado.

---

## 🎯 Objetivos

- Demonstrar domínio de Next.js 14+ com App Router.
- Utilizar Material UI com tailwindCSS para estilização.
- Aplicar SOLID e Strategy Pattern na arquitetura.
- Realizar deploy automatizado usando GitHub Actions + Azure Cloud.
- Aplicar praticas e conhecimentos e testes de cross-browser
- Documentar decisões técnicas e justificar escolhas tecnológicas.

---

## ⚙️ Decisões Técnicas

### API de clima

- Utilizado [Weather.com](https://developer.weather.com/data/default/authentication)
- Autenticação via chave de API, configurada em `.env.local`

### Gráficos

- **Biblioteca escolhida**: Recharts
- **Justificativa**: integração simples, boa documentação e compatível com React

### Estilização

- Material UI para estruturação + tailwindCSS para customização

---

## 💡Desafios Encontrados

---

## Estrutura de Pastas

Objetivo: isolar responsabilidades, facilitar manutenção, testes e aplicar SOLID de forma natural.

📁 /app

- Responsabilidade: gerenciamento de rotas e layout com o App Router do Next.js 14+.
- Justificativa: em Next.js 14, todo roteamento é baseado neste diretório. Ele substitui o antigo /pages.
- Boa prática: manter componentes de layout, providers, layout.tsx, page.tsx, etc.

📁 /components

- Responsabilidade: componentes reutilizáveis e atômicos (botões, cards, inputs, etc).
- Justificativa: manter elementos visuais desacoplados das regras de negócio (SRP — Single Responsibility Principle).
  Exemplo: <WeatherCard />, <CitySelector />, <LoadingSpinner />

📁 /features

- Responsabilidade: módulos agrupados por domínio funcional.
- Justificativa: organização por contexto de negócio, ajuda a aplicar DDD leve no front-end.
  Exemplo: features/weather, features/history, cada um com seus próprios componentes, hooks e lógica específica.

📁 /services

- Responsabilidade: clientes externos (ex: APIs REST, GraphQL, etc.).
- Justificativa: isolar o acesso a fontes de dados externas, facilitando o uso de Strategy Pattern.
  Exemplo: WeatherAPI, CityAPI, useWeatherService.ts

📁 /domain

- Responsabilidade: contratos e regras de negócio puras (interfaces, tipos, entidades, casos de uso).
- Justificativa: aplicar o D de DIP (Dependency Inversion Principle), onde a UI depende de abstrações.
  Exemplo: WeatherService, WeatherData, interfaces de estratégias.

📁 /infra

- Responsabilidade: implementações concretas dos contratos definidos em /domain.
- Justificativa: separação clara entre abstração e implementação concreta (ISP, DIP).
  Exemplo: weather_dot_com.ts implementando WeatherService

📁 /utils

- Responsabilidade: funções utilitárias e helpers puros.
- Justificativa: reutilização e centralização de lógica auxiliar (ex: formatDate, convertTemp).
- Boa prática: manter funções puras e testáveis aqui.

📁 /styles

- Responsabilidade: configurações globais de estilo, tema do MUI, customizações do Tailwind.
- Justificativa: centralizar estilo compartilhado e evitar poluição em componentes.

📁 /tests

- Responsabilidade: mocks, utilitários e cenários de teste.
- Justificativa: isolar dados fake e helpers de teste, evitando poluir a lógica de produção.
  Exemplo: weather_mock.ts, renderWithProviders.ts

## 🧪 Testes

- Utilizado `Jest` + `React Testing Library`
- Testes criados:

---

## 🚀 CI/CD

- Utilizado GitHub Actions
- Deploy contínuo para Azure
- Arquivo de workflow incluído em `

---

## 🔮 Planos Futuros

- Adicionar suporte a múltiplas cidades
- Histórico de clima por dia
- Exportação CSV
