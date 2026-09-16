




# Visão Geral e Escopo do Projeto: escopo.md

## Nome do Projeto: CoreDocs (Documentação Técnica & Guia Lógico das Ciências e Filosofia)

### 1. Propósito e Persona
- **Propósito:** Um portal unificado de documentação técnica e guia lógico abrangente que conecta Filosofia, Exatas, Biológicas e Humanas. O CoreDocs elimina a prolixidade de livros didáticos, entretendo pela pura elegância da razão. O portal estabelece a Filosofia e a Lógica como a raiz de todo o conhecimento, demonstrando como a reflexão filosófica desdobra-se em matemática, física, biologia e história. Tudo entregue em uma interface limpa e rápida no estilo Tailwind Docs / MDN.
- **Persona:** Lucas, 20 anos, estudante de alto rendimento. Ele quer entender a origem dos conceitos desde os seus fundamentos filosóficos até a aplicação prática em equações ou fatos históricos. Ele rejeita a "decoreba" e busca uma ferramenta de consulta veloz, profunda e sem elementos infantis.

### 2. Metodologia de Conteúdo (Entretenimento Lógico)
- **A Raiz Filosófica (Primeiros Princípios):** Nenhum conceito é apresentado sem contexto ontológico ou epistemológico. Todo tópico começa pela dúvida ou problema lógico que motivou a criação daquela ferramenta ou teoria.
- **Cadeia Causal Universal:** O portal mapeia visualmente o fluxo do conhecimento: **Filosofia/Lógica** $\rightarrow$ **Matemática** $\rightarrow$ **Física** $\rightarrow$ **Química/Biologia** $\rightarrow$ **Humanas/História**.
- **Intuição Visual & Argumentativa:** Gráficos interativos para fórmulas ao lado de mapas conceituais e árvores de validação lógica de argumentos.

### 3. Jornada do Usuário (User Flow)
1. **Tela Inicial:** Campo de busca global estilo `Cmd + K` com índice da "Árvore do Conhecimento" partindo dos grandes pilares da Filosofia.
2. **Busca ou Navegação:** Seleção no menu lateral hierárquico (ex: `Filosofia > Lógica > Validade Formal` ou `Exatas > Física > Mecânica > MUV`).
3. **Leitura da Documentação:**
   - **Origem / Premissa Filosófica:** A provocação lógica fundamental.
   - **Desenvolvimento Técnico:** A formalização do conceito em equações, leis ou premissas.
   - **Anatomia dos Termos:** Tabela com parâmetros, unidades do SI ou definições de conceitos-chave.
4. **Demonstração Interativa (*Sandbox*):** Sliders para ajuste de variáveis matemáticas ou diagramas interativos de Venn/árvores lógicas para Filosofia e Humanas.
5. **Grafo de Conexões:** Links indicando as ideias prévias que fundamentam o conceito e para onde ele se expande nas outras ciências.

### 4. Requisitos Visuais e Arquiteturais
- **Framework:** React com Vite.
- **Estilização:** Tailwind CSS com plugin `@tailwindcss/typography` (Tema Dark/Light sóbrio, focado em legibilidade e tipografia precisa).
- **Bibliotecas Auxiliares:**
  - `lucide-react` para iconografia técnica.
  - `recharts` ou SVG nativo para animações, gráficos vetoriais e diagramas lógicos.
  - `katex` para renderização elegante de equações e notações lógicas formais ($\forall x, \exists y$).
- **Restrição:** 
  - Interface Mobile-First com navegação lateral por gaveta no celular.
  - Performance instantânea via Single Page Application (SPA).