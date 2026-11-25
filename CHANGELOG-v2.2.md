# CHANGELOG - BMAD Academy v2.2.0

## ê°Å¸Å¡â¬ VersêÂ£o 2.2.0 - ExpansêÂ£o Profissional (Janeiro 2025)

### ê°Å¸âÅ  Resumo
AtualizaêÂ§êÂ£o de **15 para 17 liêÂ§êÂµes**, adicionando conteêÂºdo profissional sobre QA Test Architect e Workflow completo do BMAD Method.

---

## ê¢ÅÂ¨ Novas Funcionalidades

### ê°Å¸âÅ¡ Novas LiêÂ§êÂµes

#### LiêÂ§êÂ£o 16: QA Test Architect (AvanêÂ§ado)
- ê¢Åâ¦ ExplicaêÂ§êÂ£o completa dos 6 comandos QA avanêÂ§ados:
  - `*risk` - AnêÂ¡lise de riscos antes de codificar
  - `*design` - EstratêÂ©gia de testes baseada em riscos
  - `*trace` - Rastreamento de requisitos
  - `*nfr` - Non-Functional Requirements (Security, Performance, Reliability, Maintainability)
  - `*review` - RevisêÂ£o completa + refactoring ativo
  - `*gate` - Quality Gate decision
- ê¢Åâ¦ Quality Gates explicados (PASS/CONCERNS/FAIL/WAIVED)
- ê¢Åâ¦ Scoring de riscos (1-9 scale)
- ê¢Åâ¦ Fluxo completo: Antes ê¢â â Durante ê¢â â Depois do desenvolvimento

#### LiêÂ§êÂ£o 17: Workflow Completo BMad
- ê¢Åâ¦ Workflow profissional em 3 fases:
  1. **PLANNING** - Criar PRD e Architecture (Web UI recomendado)
  2. **SHARDING** - Dividir docs em êÂ©picos e stories (IDE)
  3. **DEVELOPMENT** - Implementar story por story (IDE)
- ê¢Åâ¦ Passo a passo detalhado de cada fase
- ê¢Åâ¦ Quando usar cada agente
- ê¢Åâ¦ Estrutura de arquivos gerada
- ê¢Åâ¦ Loop de desenvolvimento iterativo
- ê¢Åâ¦ Exemplos por tamanho de projeto (pequeno/mêÂ©dio/grande)

---

## ê°Å¸ââ AtualizaêÂ§êÂµes de ConteêÂºdo

### LiêÂ§êÂ£o 2: Instalando o BMad
**Antes:** 4 IDEs mencionadas
**Depois:** 8 IDEs oficialmente suportadas

- ê¢Åâ¦ Claude Code (VS Code + Claude) - Sintaxe: `/agente`
- ê¢Åâ¦ Cursor (IDE com IA) - Sintaxe: `@agente`
- ê¢Åâ¦ VS Code + Copilot - Sintaxe: `@agente`
- ê¢Åâ¦ **NOVO:** Windsurf (Codeium) - Sintaxe: `@agente`
- ê¢Åâ¦ Gemini (Google AI Studio)
- ê¢Åâ¦ **NOVO:** OpenCode (via opencode.jsonc)
- ê¢Åâ¦ **NOVO:** Codex CLI (Terminal)
- ê¢Åâ¦ **NOVO:** Codex Web (GitHub Web via AGENTS.md)

**Melhorias:**
- ê¢Åâ¦ ExplicaêÂ§êÂ£o de sintaxe @ vs / por IDE
- ê¢Åâ¦ Exemplos prêÂ¡ticos em diferentes IDEs
- ê¢Åâ¦ Nota sobre linguagem natural ("As agente,") funcionar em todas

### LiêÂ§êÂ£o 3: Conhecendo os Agentes
**Antes:** 6 agentes principais
**Depois:** 10 agentes documentados

**6 Agentes Principais (Workflow PadrêÂ£o):**
1. analyst (Analista de NegêÂ³cios)
2. pm (Gerente de Produto)
3. architect (Arquiteto de Software)
4. ux-expert (Designer UX/UI)
5. dev (Desenvolvedor Full Stack)
6. qa (Quality Assurance)

**4 Agentes Especializados Adicionais (NOVOS):**
7. **writer** (Escritor TêÂ©cnico) - DocumentaêÂ§êÂ£o, READMEs, tutoriais
8. **data-scientist** (Cientista de Dados) - AnêÂ¡lise de dados, ML, visualizaêÂ§êÂµes
9. **SM** (Scrum Master) - Gerencia stories, sprints, divide êÂ©picos
10. **PO** (Product Owner) - Valida docs, faz sharding (PRD ê¢â â êÂ©picos/stories)

**Melhorias:**
- ê¢Åâ¦ TêÂ­tulo atualizado: "Os Agentes do BMad Method"
- ê¢Åâ¦ SeêÂ§êÂ£o "6 Agentes Principais (Workflow PadrêÂ£o)"
- ê¢Åâ¦ Nova seêÂ§êÂ£o "Agentes Especializados Adicionais"
- ê¢Åâ¦ Nota explicativa sobre SM e PO (workflows avanêÂ§ados)
- ê¢Åâ¦ Ordem dos agentes mantida corretamente

---

## ê°Å¸âÂ¬ Knowledge Base Expandida (knowledge.js)

**Antes:** 11 têÂ³picos | **Depois:** 16 têÂ³picos (+5 novos)

### Novos TêÂ³picos Adicionados:

#### 1. `qa_advanced`
**Keywords:** qa avanêÂ§ado, test architect, quality gate, risk, *risk, *design, test strategy

**ConteêÂºdo:**
- Comandos QA avanêÂ§ados (*risk, *design, *trace, *nfr, *review, *gate)
- Quando usar cada comando (antes/durante/depois)
- Sintaxe de uso
- Quality Gates (PASS/CONCERNS/FAIL/WAIVED)

#### 2. `workflow`
**Keywords:** workflow, fluxo, processo, como funciona, ordem certa

**ConteêÂºdo:**
- Workflow completo em 3 fases (Planning, Sharding, Development)
- Passo a passo detalhado
- DiferenêÂ§as por tamanho de projeto

#### 3. `sharding`
**Keywords:** sharding, shard, dividir, epics, stories, epic, story

**ConteêÂºdo:**
- O que êÂ© sharding (dividir docs grandes)
- Por que êÂ© necessêÂ¡rio
- Como funciona
- Estrutura de arquivos gerada
- Comandos PO para sharding

#### 4. `sm_po`
**Keywords:** sm, scrum master, po, product owner, stories, sprint

**ConteêÂºdo:**
- Scrum Master (SM) - papel e uso
- Product Owner (PO) - papel e uso
- Quando usar cada um
- Workflow: Planning ê¢â â PO valida ê¢â â PO shard ê¢â â SM cria stories ê¢â â Dev implementa

#### 5. `quality_gates`
**Keywords:** quality gate, gate, pass, fail, concerns, waived

**ConteêÂºdo:**
- O que sêÂ£o Quality Gates
- Status possêÂ­veis (PASS/CONCERNS/FAIL/WAIVED)
- Quando êÂ© criado
- Onde fica (docs/qa/gates/)
- Como usar no workflow

#### TêÂ³pico Atualizado: `ides`
**Antes:** 6 IDEs | **Depois:** 8 IDEs

- ê¢Åâ¦ Lista completa atualizada
- ê¢Åâ¦ Sintaxe especêÂ­fica por IDE (/, @, linguagem natural)
- ê¢Åâ¦ Notas sobre compatibilidade

---

## ê°Å¸âÂ README Atualizado

### Badges
- ê¢Åâ¦ VersêÂ£o: 2.1.0 ê¢â â **2.2.0**

### Tutorial Completo
- ê¢Åâ¦ TêÂ­tulo: "15 LiêÂ§êÂµes Revisadas" ê¢â â **"17 LiêÂ§êÂµes - v2.2"**
- ê¢Åâ¦ Adicionadas liêÂ§êÂµes 16 e 17 na lista numerada

### EstatêÂ­sticas do Projeto
| MêÂ©trica | v2.1 | v2.2 | MudanêÂ§a |
|---------|------|------|---------|
| LiêÂ§êÂµes | 15 | **17** | +2 |
| Agentes | 8+ | **10+** | +2-4 |

### Roadmap
- ê¢Åâ¦ VersêÂ£o 2.1 marcada como ê¢Åâ¦ completa
- ê¢Åâ¦ **VersêÂ£o 2.2 ê¢Åâ¦ (Atual)** criada com 10 itens completados
- ê¢Åâ¦ VersêÂ£o 2.3 planejada (prêÂ³xima)

### êÅ¡ltima AtualizaêÂ§êÂ£o
- ê¢Åâ¦ VersêÂ£o atualizada: 2.1.0 ê¢â â **2.2.0**

---

## ê°Å¸âÅ  EstatêÂ­sticas de CêÂ³digo

| Arquivo | Linhas v2.1 | Linhas v2.2 | DiferenêÂ§a |
|---------|-------------|-------------|-----------|
| `lessons.js` | 1.901 | **2.007** | +106 |
| `knowledge.js` | 213 | **413** | +200 |
| **TOTAL** | 2.114 | **2.420** | **+306** |

---

## ê¢Åâ¦ ValidaêÂ§êÂ£o

- ê¢Åâ¦ **lessons.js** - Sintaxe JavaScript OK
- ê¢Åâ¦ **knowledge.js** - Sintaxe JavaScript OK
- ê¢Åâ¦ **README.md** - Markdown OK
- ê¢Åâ¦ **17 liêÂ§êÂµes** confirmadas
- ê¢Åâ¦ **VersêÂ£o 2.2.0** aplicada em todos os arquivos

---

## ê°Å¸Å½Â¯ Gaps Corrigidos

ComparaêÂ§êÂ£o com o **User Guide oficial** do BMAD Method:

### ê¢Åâ¦ Corrigido
1. ê¢Åâ¦ Comandos QA avanêÂ§ados (*risk, *design, *trace, *nfr, *review, *gate)
2. ê¢Åâ¦ Agentes SM e PO documentados
3. ê¢Åâ¦ Agentes writer e data-scientist adicionados
4. ê¢Åâ¦ 8 IDEs suportadas (antes apenas 4)
5. ê¢Åâ¦ Sintaxe @ vs / explicada
6. ê¢Åâ¦ Workflow completo em 3 fases
7. ê¢Åâ¦ Conceito de Sharding explicado
8. ê¢Åâ¦ Quality Gates documentados
9. ê¢Åâ¦ Ordem correta dos agentes mantida
10. ê¢Åâ¦ NFR Assessment explicado

### ê°Å¸âÅ Pendente para v2.3
- [ ] MêÂ³dulos playground 14 e 15 (QA Test Architect e Workflow)
- [ ] LiêÂ§êÂ£o 4 expandida com comandos dos agentes
- [ ] Sistema de progresso do usuêÂ¡rio
- [ ] Screenshots e demos

---

## ê°Å¸Å¡â¬ Como Atualizar

Se vocêÂª jêÂ¡ tem a v2.1 instalada:

```bash
# 1. Pull das atualizaêÂ§êÂµes
git pull origin main

# 2. NêÂ£o hêÂ¡ dependêÂªncias para instalar (apenas HTML/CSS/JS)

# 3. Abra no navegador
start index.html  # Windows
```

---

## ê°Å¸â¢Â Agradecimentos

- **BMAD Method Oficial** - [github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)
- **User Guide** - Por fornecer a documentaêÂ§êÂ£o completa do workflow
- **Comunidade BMAD** - Discord: [discord.gg/gk8jAdXWmj](https://discord.gg/gk8jAdXWmj)
- **Claude Code** - Ferramenta usada no desenvolvimento

---

## ê°Å¸âÅ¾ Suporte

- ê°Å¸âÂ¬ Discord oficial: `discord.gg/gk8jAdXWmj`
- ê°Å¸Ââº Issues: [github.com/linnoff88-dev/BMAD-Academy/issues](https://github.com/linnoff88-dev/BMAD-Academy/issues)
- ê°Å¸âÂ§ Email: linnoff88-dev@gmail.com

---

**Desenvolvido por ARCKHê | Janeiro 2025**
