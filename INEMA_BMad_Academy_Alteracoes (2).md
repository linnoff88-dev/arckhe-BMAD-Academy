# ðŸ§­ ARCKHÉ BMad Academy â€“ Registro de AlteraÃ§Ãµes e Melhorias

### Objetivo
Consolidar todas as mudanÃ§as e aprimoramentos feitos apÃ³s a criaÃ§Ã£o inicial do conteÃºdo da Academy, para manter a documentaÃ§Ã£o tÃ©cnica sempre atualizada.

---

## 1. CapÃ­tulo 2 â€“ InstalaÃ§Ã£o e InÃ­cio
**Tipo:** ExpansÃ£o  
**AlteraÃ§Ãµes:**
- Adicionados os tÃ³picos 4 e 5:
  - 4. Como iniciar o BMad apÃ³s a instalaÃ§Ã£o  
  - 5. O que fazer depois de instalar
- InstruÃ§Ãµes detalhadas para:
  - Testar a instalaÃ§Ã£o com `npx bmad-method status`
  - Listar agentes e expansÃµes
  - Rodar comandos via terminal
  - Integrar o uso com IDEs (Claude, Cursor, Gemini)
- Explicado que o BMad nÃ£o â€œabreâ€ como app, Ã© executado via terminal.

---

## 2. CapÃ­tulo 3 â€“ Ordem dos Agentes
**Tipo:** ReorganizaÃ§Ã£o  
**AlteraÃ§Ãµes:**
- Nova ordem lÃ³gica para refletir o fluxo de um projeto real:
  1. Analyst  
  2. PM  
  3. Architect  
  4. UX-Expert  
  5. Dev  
  6. QA
- ExplicaÃ§Ã£o do motivo dessa sequÃªncia (planejamento â†’ execuÃ§Ã£o â†’ validaÃ§Ã£o).
- Tabela de referÃªncia atualizada com funÃ§Ã£o, tipo de tarefa e exemplo.

---

## 3. CapÃ­tulo 5 â€“ ExplicaÃ§Ã£o do comando â€œAsâ€
**Tipo:** ExpansÃ£o Conceitual  
**AlteraÃ§Ãµes:**
- Explicado o significado do comando `As`: â€œAtue comoâ€.
- Exemplos prÃ¡ticos para cada agente (`As dev`, `As pm`, `As qa`, etc.)
- Explicado como o BMad interpreta o comando internamente.
- Analogia: â€œO comando As Ã© como chamar um especialista da sua equipe.â€

---

## 4. CapÃ­tulo 10 e 11 â€“ Estrutura de Armazenamento e IntegraÃ§Ã£o
**Tipo:** ExpansÃ£o TÃ©cnica  
**AlteraÃ§Ãµes:**
- Adicionada explicaÃ§Ã£o de onde os arquivos e projetos sÃ£o guardados:
  ```
  .bmad-core/
  projects/
  logs/
  ```
- Detalhes do conteÃºdo de cada diretÃ³rio.
- Explicado que os dados sÃ£o locais, e a IDE apenas exibe.
- DescriÃ§Ã£o do comportamento em diferentes sistemas operacionais.
- Adicionada explicaÃ§Ã£o sobre versionamento e backup.

---

## 5. IntegraÃ§Ã£o Claude Code + BMad
**Tipo:** ExplicaÃ§Ã£o detalhada e ajuste prÃ¡tico  
**AlteraÃ§Ãµes:**
- Criada seÃ§Ã£o explicando diferenÃ§a entre terminal e chat lateral:
  - Terminal: executa o BMad real.  
  - Chat: Claude apenas interpreta texto.
- Fluxo visual:
  ```
  UsuÃ¡rio â†’ Claude (Chat) â†’ Terminal (npx) â†’ BMad â†’ Projeto/Arquivos
  ```
- Explicado funcionamento do Claude Code com Node.js local.
- Exemplo prÃ¡tico:
  ```
  npx bmad-method add project "app de agendamento"
  As pm, crie o PRD desse app
  ```

---

## 6. Uso do NPX
**Tipo:** ExplicaÃ§Ã£o complementar  
**AlteraÃ§Ãµes:**
- Explicado o que Ã© `npx`, sua diferenÃ§a do `npm` e por que o BMad o utiliza.
- Exemplos de uso dentro e fora do Claude Code.
- Comparativo de modos:
  | Modo | O que faz | Vantagem |
  |------|------------|----------|
  | npx | Executa sem instalar | RÃ¡pido e atualizado |
  | npm install -g | Instala globalmente | UsÃ¡vel offline |

---

## 7. DependÃªncia de LLM
**Tipo:** ExpansÃ£o de Arquitetura  
**AlteraÃ§Ãµes:**
- Explicado que o BMad nÃ£o Ã© uma LLM â€” Ã© um framework que orquestra as LLMs.
- Descrito o que o BMad faz sem e com LLM.
- Exemplo de configuraÃ§Ã£o `.env`:
  ```
  OPENAI_API_KEY=sk-xxxx
  ANTHROPIC_API_KEY=sk-xxxx
  GOOGLE_API_KEY=AIza-xxxx
  ```
- Exemplo de `bmad-config.json`:
  ```json
  {
    "default_model": "gpt-4o-mini",
    "agents": {
      "dev": "gpt-4o-mini",
      "pm": "claude-3.5-sonnet",
      "ux-expert": "gemini-1.5-pro"
    }
  }
  ```
- Adicionadas alternativas locais: Ollama, LM Studio, LocalAI.

---

## 8. AtualizaÃ§Ã£o visual e sugestÃµes
**Tipo:** Propostas para Academy  
**AlteraÃ§Ãµes:**
- InclusÃ£o de diagramas 16:9 mostrando:
  - Fluxo do NPX no ambiente local  
  - IntegraÃ§Ã£o Claude â†” Terminal â†” BMad â†” Estrutura de pastas  
  - DiferenÃ§a entre interpretar e executar comandos  
  - Ciclo completo: **UsuÃ¡rio â†’ IDE â†’ BMad â†’ LLM â†’ Projeto local**
- Planejada criaÃ§Ã£o de grÃ¡ficos interativos no site da Academy.

---

## 9. Playground (Aprimoramento Futuro)
**Tipo:** EstruturaÃ§Ã£o visual e prÃ¡tica  
**AlteraÃ§Ãµes:**
- Planejada expansÃ£o com categorias: BÃ¡sico, IntermediÃ¡rio, AvanÃ§ado e Profissional.  
- Cada nÃ­vel conterÃ¡ exemplos reais de comandos e simulaÃ§Ãµes.  
- IntegraÃ§Ã£o futura com logs do `.bmad-core` para salvar progresso.

---

## 10. ConclusÃ£o Geral
O BMad foi consolidado como framework hÃ­brido, rodando localmente e integrado a LLMs externas e IDEs.  
A Academy cobre:
- Conceitos tÃ©cnicos e prÃ¡ticos  
- IntegraÃ§Ã£o com Claude, Cursor e LLMs  
- Estrutura local e versionamento  
- VisualizaÃ§Ã£o didÃ¡tica interativa.

---

**Resumo:**  
Essas alteraÃ§Ãµes tornaram o curso mais completo e prÃ¡tico, ajudando o aluno a compreender:
1. O funcionamento tÃ©cnico do BMad.  
2. A interaÃ§Ã£o entre IA, terminal e estrutura local.  
3. O papel do `npx`, do comando â€œAsâ€ e das LLMs.  
4. A aplicaÃ§Ã£o real do mÃ©todo em qualquer ambiente.
