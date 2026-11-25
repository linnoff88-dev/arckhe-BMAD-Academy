// ConteêÂºdo das liêÂ§êÂµes
const lessons = [
    {
        id: 1,
        title: "O que êÂ© o BMad?",
        content: `
            <h2>BMad: Crie SoluêÂ§êÂµes com IA em 3 Passos</h2>

            <h3>O que êÂ©?</h3>
            <p>BMad êÂ© um sistema que conecta vocêÂª a <strong>especialistas de IA</strong>. VocêÂª fala o que quer, eles fazem.</p>

            <h3>Como funciona na prêÂ¡tica?</h3>

            <p><strong>1. VocêÂª instala o BMad</strong> (via terminal)</p>
            <code>npx bmad-method install</code>

            <p><strong>2. VocêÂª pede o que precisa</strong> (via IDE como Claude Code, Cursor)</p>
            <code>As dev, crie um formulêÂ¡rio de contato</code>

            <p><strong>3. O agente cria para vocêÂª</strong> (cêÂ³digo, design, documentaêÂ§êÂ£o)</p>
            <p>ê¢Åâ¦ Em segundos vocêÂª tem o resultado pronto.</p>

            <h3>Quem sêÂ£o os Agentes?</h3>
            <p>SêÂ£o especialistas virtuais. Cada um faz uma coisa:</p>
            <ul>
                <li><strong>dev</strong> ê¢â â Escreve cêÂ³digo</li>
                <li><strong>pm</strong> ê¢â â Planeja o projeto</li>
                <li><strong>ux-expert</strong> ê¢â â Desenha interfaces</li>
                <li><strong>architect</strong> ê¢â â Define arquitetura têÂ©cnica</li>
                <li><strong>qa</strong> ê¢â â Cria testes</li>
            </ul>

            <h3>O que vocêÂª pode criar?</h3>
            <p><strong>Qualquer sistema digital:</strong></p>
            <ul>
                <li>ê°Å¸âÂ Advogados: GestêÂ£o de processos</li>
                <li>ê°Å¸ÂÂ¥ MêÂ©dicos: ProntuêÂ¡rio eletrêÂ´nico</li>
                <li>ê°Å¸Å½â Professores: Plataforma de ensino</li>
                <li>ê°Å¸âÂ¼ Empresas: CRM, Dashboard, AutomaêÂ§êÂµes</li>
            </ul>

            <h3>O diferencial?</h3>
            <p><strong>VocêÂª nêÂ£o precisa saber programar.</strong></p>
            <p>VocêÂª descreve o que quer em portuguêÂªs, os agentes executam.</p>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Vamos instalar e testar!</p>
        `
    },
    {
        id: 2,
        title: "Instalando o BMad",
        content: `
            <h2>InstalaêÂ§êÂ£o: 3 Passos RêÂ¡pidos</h2>

            <h3>PrêÂ©-requisito: Node.js</h3>
            <p><strong>Verifique se tem Node.js instalado:</strong></p>
            <code>node --version</code>
            <p>Se aparecer algo como <code>v18.0.0</code> ou superior, pode continuar.<br>
            Se nêÂ£o, baixe em: <strong>nodejs.org</strong></p>

            <h3>Passo 1: Instalar o BMad</h3>
            <code>npx bmad-method install</code>
            <p>ê¢Åâ¦ O instalador êÂ© interativo. Ele pergunta:</p>
            <ul>
                <li>Qual IDE vocêÂª usa? (Cursor, Claude Code, VS Code)</li>
                <li>Quais agentes quer instalar? (dev, pm, ux-expert, etc.)</li>
                <li>InstalaêÂ§êÂ£o full ou minimal?</li>
            </ul>
            <p><strong>Dica:</strong> Iniciante? Escolha instalaêÂ§êÂ£o <strong>full</strong>.</p>

            <h3>Passo 2: Verificar se Funcionou</h3>
            <code>npx bmad-method status</code>
            <p><strong>O que vocêÂª deve ver:</strong></p>
            <code>
ê¢Åâ¦ BMad Method v4.44.1
ê¢Åâ¦ Installation Type: full
ê¢Åâ¦ IDEs configured: cursor, claude-code
ê¢Åâ¦ Agents installed: 8
            </code>
            <p>Se apareceu isso, instalou corretamente!</p>

            <h3>Passo 3: Listar Seus Agentes</h3>
            <code>npx bmad-method list:agents</code>
            <p>Mostra todos os agentes disponêÂ­veis para vocêÂª usar.</p>

            <h3>ê¢Å¡Â ê¯Â¸Â BMad NêÆO êÂ© um app que "abre"</h3>
            <p><strong>Importante:</strong> BMad nêÂ£o tem janela nem interface grêÂ¡fica.</p>
            <p>Ele funciona assim:</p>
            <ul>
                <li>ê¢ÂÅ <strong>NêÆO</strong> clique em êÂ­cone para abrir</li>
                <li>ê¢Åâ¦ <strong>SIM</strong> execute comandos no terminal</li>
                <li>ê¢Åâ¦ <strong>SIM</strong> use agentes dentro da sua IDE (Claude Code, Cursor)</li>
            </ul>

            <h3>4. Como Iniciar o BMad ApêÂ³s InstalaêÂ§êÂ£o</h3>

            <p><strong>VocêÂª NêÆO precisa "iniciar" o BMad.</strong> Ele jêÂ¡ estêÂ¡ instalado e pronto.</p>

            <p><strong>Para usar o BMad, vocêÂª faz comandos:</strong></p>

            <h4>Comandos no Terminal:</h4>
            <code>npx bmad-method status</code>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method list:expansions</code>

            <h4>Comandos na IDE (Claude Code, Cursor):</h4>
            <code>As dev, crie um formulêÂ¡rio de contato</code>
            <code>As pm, crie um PRD para app de delivery</code>
            <code>As ux-expert, desenhe uma tela de login</code>

            <h3>5. O Que Fazer Depois de Instalar</h3>

            <p><strong>Teste 1: Verifique a instalaêÂ§êÂ£o</strong></p>
            <code>npx bmad-method status</code>
            <p>Deve mostrar versêÂ£o, tipo de instalaêÂ§êÂ£o e agentes.</p>

            <p><strong>Teste 2: Liste os agentes</strong></p>
            <code>npx bmad-method list:agents</code>
            <p>VocêÂª verêÂ¡: dev, pm, ux-expert, architect, analyst, qa, etc.</p>

            <p><strong>Teste 3: Veja pacotes de expansêÂ£o</strong></p>
            <code>npx bmad-method list:expansions</code>
            <p>Mostra pacotes extras: jogos 2D, DevOps, mobile, etc.</p>

            <p><strong>Teste 4: Use seu primeiro agente!</strong></p>
            <p>Abra sua IDE (Claude Code ou Cursor) e digite:</p>
            <code>As dev, liste os arquivos da pasta atual</code>
            <p>ê¢Åâ¦ Se o agente responder, tudo funcionou!</p>

            <h3>ê°Å¸ââ IntegraêÂ§êÂ£o com IDEs</h3>

            <p><strong>BMad funciona com estas IDEs oficialmente suportadas:</strong></p>
            <ul>
                <li><strong>Claude Code</strong> (VS Code + Claude) - Sintaxe: <code>/agente</code></li>
                <li><strong>Cursor</strong> (IDE com IA integrada) - Sintaxe: <code>@agente</code></li>
                <li><strong>VS Code + Copilot</strong> (GitHub Copilot) - Sintaxe: <code>@agente</code></li>
                <li><strong>Windsurf</strong> (IDE Codeium) - Sintaxe: <code>@agente</code></li>
                <li><strong>Gemini</strong> (Google AI Studio) - Sintaxe customizada</li>
                <li><strong>OpenCode</strong> (via opencode.jsonc) - Sintaxe: arquivo JSON</li>
                <li><strong>Codex CLI</strong> (Terminal) - Linguagem natural</li>
                <li><strong>Codex Web</strong> (GitHub Web) - Via AGENTS.md</li>
            </ul>

            <div style="background: var(--bg-card); padding: 15px; border-left: 4px solid var(--accent); margin: 20px 0;">
                <p><strong>ê°Å¸âÂ¡ Nota sobre Sintaxe:</strong></p>
                <p>A sintaxe varia por IDE:</p>
                <ul>
                    <li><code>/agente</code> ê¢â â Claude Code (slash)</li>
                    <li><code>@agente</code> ê¢â â Cursor, VS Code, Windsurf (arroba)</li>
                    <li><code>As agente,</code> ê¢â â Linguagem natural (funciona em todas)</li>
                </ul>
            </div>

            <p><strong>Como funciona:</strong></p>
            <p>1. VocêÂª digita comando na IDE (chat lateral ou terminal)</p>
            <p>2. IDE envia para o BMad</p>
            <p>3. BMad ativa o agente certo</p>
            <p>4. Agente executa e retorna resultado</p>

            <p><strong>Exemplo prêÂ¡tico no Claude Code:</strong></p>
            <code>
// No terminal integrado:
npx bmad-method status

// No chat lateral do Claude (sintaxe slash):
/dev crie uma funêÂ§êÂ£o que valida email

// Ou em linguagem natural (funciona em todas IDEs):
As dev, crie uma funêÂ§êÂ£o que valida email
            </code>

            <p><strong>Exemplo no Cursor/Windsurf:</strong></p>
            <code>
// Sintaxe arroba:
@dev implemente funêÂ§êÂ£o de login

// Ou linguagem natural:
As dev, implemente funêÂ§êÂ£o de login
            </code>

            <h3>ê¢Åâ¦ Pronto para ComeêÂ§ar!</h3>
            <p>Agora vocêÂª sabe:</p>
            <ul>
                <li>ê¢Åâ¦ Como instalar o BMad</li>
                <li>ê¢Åâ¦ Como testar se funcionou</li>
                <li>ê¢Åâ¦ Que BMad NêÆO abre como app</li>
                <li>ê¢Åâ¦ Como rodar comandos via terminal</li>
                <li>ê¢Åâ¦ Como usar agentes na IDE</li>
            </ul>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Conhecer todos os agentes disponêÂ­veis!</p>
        `
    },
    {
        id: 3,
        title: "Conhecendo os Agentes",
        content: `
            <h2>Os Agentes do BMad Method</h2>

            <p><strong>Por que ordem importa?</strong></p>
            <p>Um projeto segue um fluxo lêÂ³gico: <strong>Planejamento ê¢â â ExecuêÂ§êÂ£o ê¢â â ValidaêÂ§êÂ£o</strong></p>
            <p>Use os agentes nesta sequêÂªncia para melhores resultados:</p>

            <h3>ê°Å¸Å½Â¯ 6 Agentes Principais (Workflow PadrêÂ£o)</h3>

            <h3>1. ê°Å¸âÂ analyst (Analista de NegêÂ³cios)</h3>
            <p><strong>Quando usar:</strong> InêÂ­cio do projeto, antes de tudo</p>
            <p><strong>O que faz:</strong> Pesquisa de mercado, anêÂ¡lise competitiva, requisitos</p>
            <code>As analyst, pesquise apps de delivery e liste as principais features</code>
            <p><em>ê¢Åâ¦ Resultado: RelatêÂ³rio de pesquisa, requisitos iniciais</em></p>

            <h3>2. ê°Å¸ââ¹ pm (Gerente de Produto)</h3>
            <p><strong>Quando usar:</strong> Depois do analyst</p>
            <p><strong>O que faz:</strong> Cria PRD (Product Requirements Document), define estratêÂ©gia</p>
            <code>As pm, crie um PRD para app de delivery baseado na pesquisa</code>
            <p><em>ê¢Åâ¦ Resultado: Documento PRD completo com user stories</em></p>

            <h3>3. ê°Å¸Ââê¯Â¸Â architect (Arquiteto de Software)</h3>
            <p><strong>Quando usar:</strong> Depois do PM, antes de programar</p>
            <p><strong>O que faz:</strong> Define arquitetura têÂ©cnica, escolhe tecnologias</p>
            <code>As architect, defina arquitetura para o app de delivery</code>
            <p><em>ê¢Åâ¦ Resultado: Diagrama de arquitetura, stack tecnolêÂ³gico</em></p>

            <h3>4. ê°Å¸Å½Â¨ ux-expert (Designer UX/UI)</h3>
            <p><strong>Quando usar:</strong> Junto com architect, antes do dev</p>
            <p><strong>O que faz:</strong> Cria wireframes, interfaces, design de telas</p>
            <code>As ux-expert, crie wireframes das telas principais do app</code>
            <p><em>ê¢Åâ¦ Resultado: Wireframes, mockups, guia de estilo</em></p>

            <h3>5. ê°Å¸Å¡â¬ dev (Desenvolvedor Full Stack)</h3>
            <p><strong>Quando usar:</strong> Depois de ter PRD, arquitetura e design</p>
            <p><strong>O que faz:</strong> Escreve cêÂ³digo, implementa funcionalidades</p>
            <code>As dev, implemente o sistema de pedidos do app</code>
            <p><em>ê¢Åâ¦ Resultado: CêÂ³digo funcional, features implementadas</em></p>

            <h3>6. ê¢Åâ¦ qa (Quality Assurance)</h3>
            <p><strong>Quando usar:</strong> Depois do dev implementar</p>
            <p><strong>O que faz:</strong> Cria testes, valida qualidade, encontra bugs</p>
            <code>As qa, crie testes para o sistema de pedidos</code>
            <p><em>ê¢Åâ¦ Resultado: Suite de testes, relatêÂ³rio de bugs</em></p>

            <h3>ê°Å¸âÅ  Tabela de ReferêÂªncia RêÂ¡pida</h3>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border);">
                        <th style="padding: 12px; text-align: left;">Agente</th>
                        <th style="padding: 12px; text-align: left;">FunêÂ§êÂ£o</th>
                        <th style="padding: 12px; text-align: left;">Tipo de Tarefa</th>
                        <th style="padding: 12px; text-align: left;">Exemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>analyst</strong></td>
                        <td style="padding: 12px;">Pesquisa</td>
                        <td style="padding: 12px;">AnêÂ¡lise de mercado, requisitos</td>
                        <td style="padding: 12px;"><code>pesquise concorrentes</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>pm</strong></td>
                        <td style="padding: 12px;">Planejamento</td>
                        <td style="padding: 12px;">PRD, roadmap, estratêÂ©gia</td>
                        <td style="padding: 12px;"><code>crie PRD completo</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>architect</strong></td>
                        <td style="padding: 12px;">Arquitetura</td>
                        <td style="padding: 12px;">Design têÂ©cnico, stack</td>
                        <td style="padding: 12px;"><code>defina arquitetura</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>ux-expert</strong></td>
                        <td style="padding: 12px;">Design</td>
                        <td style="padding: 12px;">Wireframes, UI, protêÂ³tipos</td>
                        <td style="padding: 12px;"><code>crie wireframes</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>dev</strong></td>
                        <td style="padding: 12px;">CêÂ³digo</td>
                        <td style="padding: 12px;">ImplementaêÂ§êÂ£o, features</td>
                        <td style="padding: 12px;"><code>implemente login</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>qa</strong></td>
                        <td style="padding: 12px;">Testes</td>
                        <td style="padding: 12px;">ValidaêÂ§êÂ£o, testes, bugs</td>
                        <td style="padding: 12px;"><code>crie testes unitêÂ¡rios</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>ê°Å¸âÂ§ Agentes Especializados Adicionais</h3>

            <p>AlêÂ©m dos 6 principais, o BMad tem agentes especializados para tarefas especêÂ­ficas:</p>

            <h4>ê°Å¸âÂ writer (Escritor TêÂ©cnico)</h4>
            <p><strong>Quando usar:</strong> Para documentaêÂ§êÂ£o, READMEs, tutoriais</p>
            <p><strong>O que faz:</strong> Cria documentaêÂ§êÂ£o têÂ©cnica clara e profissional</p>
            <code>As writer, crie um README.md completo para este projeto</code>
            <p><em>ê¢Åâ¦ Resultado: DocumentaêÂ§êÂ£o têÂ©cnica, guias de usuêÂ¡rio</em></p>

            <h4>ê°Å¸âÅ  data-scientist (Cientista de Dados)</h4>
            <p><strong>Quando usar:</strong> AnêÂ¡lise de dados, ML, estatêÂ­stica</p>
            <p><strong>O que faz:</strong> AnêÂ¡lise de dados, machine learning, visualizaêÂ§êÂµes</p>
            <code>As data-scientist, analise estes dados de vendas e crie insights</code>
            <p><em>ê¢Åâ¦ Resultado: AnêÂ¡lises, modelos ML, visualizaêÂ§êÂµes</em></p>

            <h4>ê°Å¸ââ¹ SM (Scrum Master)</h4>
            <p><strong>Quando usar:</strong> Gerenciamento de sprints e stories (workflow avanêÂ§ado)</p>
            <p><strong>O que faz:</strong> Gerencia stories, sprints, divide êÂ©picos em tarefas</p>
            <code>As sm, crie stories para o prêÂ³ximo sprint baseado no êÂ©pico</code>
            <p><em>ê¢Åâ¦ Resultado: Stories detalhadas, tasks organizadas</em></p>

            <h4>ê¢Åâ¦ PO (Product Owner)</h4>
            <p><strong>Quando usar:</strong> ValidaêÂ§êÂ£o de documentos e sharding (workflow avanêÂ§ado)</p>
            <p><strong>O que faz:</strong> Valida PRD/Architecture, divide docs em êÂ©picos/stories</p>
            <code>As po, valide o PRD contra a arquitetura</code>
            <code>As po, shard o PRD em êÂ©picos e stories</code>
            <p><em>ê¢Åâ¦ Resultado: Documentos validados, êÂ©picos/stories geradas</em></p>

            <div style="background: var(--bg-card); padding: 15px; border-left: 4px solid var(--primary); margin: 20px 0;">
                <p><strong>ê°Å¸âÂ¡ Nota:</strong> SM e PO sêÂ£o usados em workflows avanêÂ§ados de desenvolvimento. VocêÂª aprenderêÂ¡ sobre eles nas liêÂ§êÂµes avanêÂ§adas!</p>
            </div>

            <h3>ê°Å¸âÂ¡ Fluxo Ideal de Um Projeto</h3>

            <p><strong>Projeto pequeno (CRUD simples):</strong></p>
            <p>pm ê¢â â dev ê¢â â qa</p>

            <p><strong>Projeto mêÂ©dio (App completo):</strong></p>
            <p>analyst ê¢â â pm ê¢â â architect ê¢â â ux-expert ê¢â â dev ê¢â â qa</p>

            <p><strong>Projeto grande (SaaS complexo):</strong></p>
            <p>analyst ê¢â â pm ê¢â â architect ê¢â â ux-expert ê¢â â dev ê¢â â qa ê¢â â dev (ajustes) ê¢â â qa (revalidaêÂ§êÂ£o)</p>

            <h3>ê°Å¸Å½Â¯ Regra de Ouro</h3>

            <p><strong>NêÂ£o pule etapas!</strong> Especialmente:</p>
            <ul>
                <li>ê¢ÂÅ <strong>NêÆO</strong> peêÂ§a pro dev sem ter PRD (pm)</li>
                <li>ê¢ÂÅ <strong>NêÆO</strong> pule arquitetura em projetos complexos</li>
                <li>ê¢ÂÅ <strong>NêÆO</strong> esqueêÂ§a de testar (qa) depois de implementar</li>
            </ul>

            <p><strong>Ver todos os agentes:</strong></p>
            <code>npx bmad-method list:agents</code>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Comandos essenciais do BMad!</p>
        `
    },
    {
        id: 4,
        title: "Comandos BêÂ¡sicos",
        content: `
            <h2>Comandos Essenciais do BMad</h2>
            <p>Aqui estêÂ£o os comandos que vocêÂª mais vai usar:</p>

            <h3>Ver Status da InstalaêÂ§êÂ£o</h3>
            <code>npx bmad-method status</code>
            <p>Mostra versêÂ£o, agentes instalados e configuraêÂ§êÂµes.</p>

            <h3>Listar Agentes DisponêÂ­veis</h3>
            <code>npx bmad-method list:agents</code>
            <p>Lista todos os agentes e suas especialidades.</p>

            <h3>Listar Pacotes de ExpansêÂ£o</h3>
            <code>npx bmad-method list:expansions</code>
            <p>Mostra pacotes especializados (Game Dev, DevOps, etc.).</p>

            <h3>Atualizar BMad</h3>
            <code>npx bmad-method update</code>
            <p>Atualiza para a versêÂ£o mais recente.</p>

            <h3>Ver Ajuda</h3>
            <code>npx bmad-method help</code>
            <p>Mostra todos os comandos disponêÂ­veis.</p>

            <h3>Usando Agentes</h3>
            <p>Para usar um agente, basta mencionar seu nome na sua IDE:</p>
            <code>As dev, implemente uma funêÂ§êÂ£o de login</code>
            <code>As ux-expert, crie um mockup de dashboard</code>

            <p><strong>Importante:</strong> Os agentes funcionam dentro de IDEs compatêÂ­veis como VS Code com Claude Code, Cursor, etc.</p>
        `
    },
    {
        id: 5,
        title: "Entendendo o Comando 'As'",
        content: `
            <h2>O Comando "As": Chamando Seus Especialistas</h2>

            <h3>O Que Significa "As"?</h3>
            <p><strong>"As" = "Atue como"</strong></p>
            <p>êâ° como vocêÂª chama um especialista da sua equipe virtual.</p>

            <p><strong>Analogia:</strong></p>
            <p>Imagine uma empresa com vêÂ¡rios departamentos. Quando vocêÂª precisa de algo:</p>
            <ul>
                <li>VocêÂª vai atêÂ© a sala do desenvolvedor e diz: "Como desenvolvedor, crie esta funêÂ§êÂ£o"</li>
                <li>VocêÂª vai atêÂ© o designer e diz: "Como designer, crie esta tela"</li>
            </ul>
            <p>No BMad, vocêÂª faz a mesma coisa digitalmente: <code>As dev</code> = Atue como desenvolvedor</p>

            <h3>Como o BMad Interpreta o Comando</h3>

            <p><strong>Quando vocêÂª digita:</strong></p>
            <code>As dev, crie um formulêÂ¡rio de login</code>

            <p><strong>O BMad faz internamente:</strong></p>
            <ol>
                <li>Identifica o agente: <code>dev</code></li>
                <li>Carrega o perfil do agente dev (habilidades, contexto, instruêÂ§êÂµes)</li>
                <li>Passa a tarefa: <code>crie um formulêÂ¡rio de login</code></li>
                <li>O agente dev executa usando seu conhecimento especializado</li>
                <li>Retorna o resultado (cêÂ³digo do formulêÂ¡rio)</li>
            </ol>

            <h3>ê°Å¸ââ¹ Sintaxe Correta</h3>

            <p><strong>Estrutura bêÂ¡sica:</strong></p>
            <code>As [nome do agente], [o que vocêÂª quer]</code>

            <p><strong>Exemplos corretos:</strong></p>
            <ul>
                <li>ê¢Åâ¦ <code>As dev, crie uma funêÂ§êÂ£o de validaêÂ§êÂ£o</code></li>
                <li>ê¢Åâ¦ <code>As pm, crie um PRD para este projeto</code></li>
                <li>ê¢Åâ¦ <code>As qa, teste esta funcionalidade</code></li>
            </ul>

            <p><strong>Exemplos incorretos:</strong></p>
            <ul>
                <li>ê¢ÂÅ <code>dev crie uma funêÂ§êÂ£o</code> (falta "As")</li>
                <li>ê¢ÂÅ <code>Como dev, crie funêÂ§êÂ£o</code> (use "As", nêÂ£o "Como")</li>
                <li>ê¢ÂÅ <code>As desenvolvedor, crie funêÂ§êÂ£o</code> (use "dev", nêÂ£o "desenvolvedor")</li>
            </ul>

            <h3>ê°Å¸Å½Â¯ Exemplos PrêÂ¡ticos para Cada Agente</h3>

            <h4>As analyst</h4>
            <p><strong>Quando usar:</strong> Pesquisas, anêÂ¡lises de mercado, levantamento de requisitos</p>
            <code>As analyst, faêÂ§a uma anêÂ¡lise competitiva de apps de delivery</code>
            <code>As analyst, liste os principais requisitos para um sistema de gestêÂ£o</code>
            <p><em>ê¢Åâ¦ Resultado: RelatêÂ³rio de anêÂ¡lise, lista de requisitos</em></p>

            <h4>As pm</h4>
            <p><strong>Quando usar:</strong> Planejamento, documentaêÂ§êÂ£o, estratêÂ©gia de produto</p>
            <code>As pm, crie um PRD para um app de finanêÂ§as pessoais</code>
            <code>As pm, defina o roadmap do projeto</code>
            <p><em>ê¢Åâ¦ Resultado: Documento PRD, roadmap, user stories</em></p>

            <h4>As architect</h4>
            <p><strong>Quando usar:</strong> DecisêÂµes têÂ©cnicas, escolha de tecnologias, arquitetura</p>
            <code>As architect, defina a arquitetura de um sistema de e-commerce</code>
            <code>As architect, escolha o melhor banco de dados para este projeto</code>
            <p><em>ê¢Åâ¦ Resultado: Diagrama de arquitetura, stack tecnolêÂ³gico definido</em></p>

            <h4>As ux-expert</h4>
            <p><strong>Quando usar:</strong> Design de interfaces, wireframes, experiêÂªncia do usuêÂ¡rio</p>
            <code>As ux-expert, crie wireframes de uma tela de cadastro</code>
            <code>As ux-expert, melhore a usabilidade deste formulêÂ¡rio</code>
            <p><em>ê¢Åâ¦ Resultado: Wireframes, mockups, sugestêÂµes de UX</em></p>

            <h4>As dev</h4>
            <p><strong>Quando usar:</strong> Escrever cêÂ³digo, implementar funcionalidades, corrigir bugs</p>
            <code>As dev, implemente um sistema de autenticaêÂ§êÂ£o com JWT</code>
            <code>As dev, corrija o bug no formulêÂ¡rio de login</code>
            <p><em>ê¢Åâ¦ Resultado: CêÂ³digo funcional, bug corrigido</em></p>

            <h4>As qa</h4>
            <p><strong>Quando usar:</strong> Criar testes, validar qualidade, encontrar bugs</p>
            <code>As qa, crie testes unitêÂ¡rios para esta funêÂ§êÂ£o</code>
            <code>As qa, teste todos os fluxos do sistema de checkout</code>
            <p><em>ê¢Åâ¦ Resultado: Suite de testes, relatêÂ³rio de bugs</em></p>

            <h3>ê°Å¸âÂ¡ Dicas Importantes</h3>

            <p><strong>1. Use vêÂ­rgula apêÂ³s o nome do agente:</strong></p>
            <ul>
                <li>ê¢Åâ¦ <code>As dev, crie funêÂ§êÂ£o</code></li>
                <li>ê¢ÂÅ <code>As dev crie funêÂ§êÂ£o</code> (sem vêÂ­rgula)</li>
            </ul>

            <p><strong>2. Seja especêÂ­fico na tarefa:</strong></p>
            <ul>
                <li>ê¢Åâ¦ <code>As dev, crie uma funêÂ§êÂ£o de validaêÂ§êÂ£o de email usando regex</code></li>
                <li>ê¢ÂÅ <code>As dev, faêÂ§a validaêÂ§êÂ£o</code> (muito vago)</li>
            </ul>

            <p><strong>3. Um comando, um agente:</strong></p>
            <ul>
                <li>ê¢Åâ¦ <code>As dev, crie o cêÂ³digo</code> (depois) <code>As qa, teste o cêÂ³digo</code></li>
                <li>ê¢ÂÅ <code>As dev e qa, criem e testem</code> (nêÂ£o funciona)</li>
            </ul>

            <h3>ê°Å¸Å½Â¯ Exemplo PrêÂ¡tico Completo: Sistema de Agendamento</h3>

            <p>Veja como usar o comando "As" em um projeto real:</p>

            <h4>Passo 1: AnêÂ¡lise</h4>
            <code>As analyst, liste os requisitos essenciais de um sistema de agendamento mêÂ©dico</code>
            <p><em>O analyst retorna: gestêÂ£o de pacientes, calendêÂ¡rio de horêÂ¡rios, lembretes, etc.</em></p>

            <h4>Passo 2: Planejamento</h4>
            <code>As pm, crie um PRD baseado nos requisitos do analyst</code>
            <p><em>O PM retorna: documento PRD completo com user stories</em></p>

            <h4>Passo 3: Arquitetura</h4>
            <code>As architect, defina a arquitetura têÂ©cnica deste sistema</code>
            <p><em>O Architect retorna: frontend React, backend Node.js, database PostgreSQL</em></p>

            <h4>Passo 4: Design</h4>
            <code>As ux-expert, crie wireframes das telas principais</code>
            <p><em>O UX-Expert retorna: wireframes de login, dashboard, calendêÂ¡rio</em></p>

            <h4>Passo 5: ImplementaêÂ§êÂ£o</h4>
            <code>As dev, implemente o mêÂ³dulo de agendamento seguindo a arquitetura</code>
            <p><em>O Dev retorna: cêÂ³digo funcional do sistema</em></p>

            <h4>Passo 6: Testes</h4>
            <code>As qa, crie testes para o fluxo de agendamento</code>
            <p><em>O QA retorna: suite de testes completa</em></p>

            <h3>ê¢Åâ¦ Resumo</h3>

            <p><strong>O comando "As" êÂ© sua ferramenta principal no BMad.</strong></p>

            <ul>
                <li>ê¢Åâ¦ <strong>Significado:</strong> "Atue como"</li>
                <li>ê¢Åâ¦ <strong>Sintaxe:</strong> <code>As [agente], [tarefa]</code></li>
                <li>ê¢Åâ¦ <strong>FunêÂ§êÂ£o:</strong> Chama o especialista certo para cada tarefa</li>
                <li>ê¢Åâ¦ <strong>Analogia:</strong> Como pedir ajuda a um colega de equipe especêÂ­fico</li>
            </ul>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Casos de uso prêÂ¡ticos por profissêÂ£o!</p>
        `
    },
    {
        id: 6,
        title: "Casos de Uso PrêÂ¡ticos",
        content: `
            <h2>Casos de Uso por ProfissêÂ£o</h2>
            <p>Veja como diferentes profissionais podem usar o BMad:</p>

            <h3>ê°Å¸âÂ¨ê¢â¬Âê¢Å¡âê¯Â¸Â Advogados</h3>
            <ul>
                <li>Criar sistema de gestêÂ£o de processos</li>
                <li>Automatizar anêÂ¡lise de contratos</li>
                <li>Desenvolver calculadora de honorêÂ¡rios</li>
                <li>Sistema de agendamento com clientes</li>
            </ul>
            <code>As dev, crie um analisador de contratos que identifique clêÂ¡usulas importantes</code>

            <h3>ê°Å¸âÂ¨ê¢â¬Âê¢Å¡â¢ê¯Â¸Â MêÂ©dicos</h3>
            <ul>
                <li>Sistema de prontuêÂ¡rio eletrêÂ´nico</li>
                <li>Agendamento de consultas online</li>
                <li>Calculadoras mêÂ©dicas (IMC, doses, etc.)</li>
                <li>Portal do paciente</li>
            </ul>
            <code>As dev, implemente um sistema de agendamento de consultas com lembretes</code>

            <h3>ê°Å¸âÂ¨ê¢â¬Âê°Å¸ÂÂ« Professores</h3>
            <ul>
                <li>Plataforma de exercêÂ­cios online</li>
                <li>Sistema de correêÂ§êÂ£o automêÂ¡tica</li>
                <li>Gerador de provas</li>
                <li>Portal de notas e frequêÂªncia</li>
            </ul>
            <code>As dev, crie um gerador de questêÂµes de mêÂºltipla escolha</code>

            <h3>ê°Å¸âÂ¼ Empreendedores</h3>
            <ul>
                <li>Landing pages para produtos</li>
                <li>Sistema de CRM simples</li>
                <li>AutomaêÂ§êÂ£o de marketing</li>
                <li>Dashboard de mêÂ©tricas</li>
            </ul>
            <code>As ux-expert, crie uma landing page para meu produto</code>

            <p><strong>O limite êÂ© sua criatividade!</strong> Qualquer ideia pode virar realidade com os agentes certos.</p>
        `
    },
    {
        id: 7,
        title: "Arquivos de ConfiguraêÂ§êÂ£o",
        content: `
            <h2>Entendendo os Arquivos de ConfiguraêÂ§êÂ£o</h2>
            <p>O BMad cria uma estrutura de arquivos no seu projeto. Veja o que cada arquivo faz:</p>

            <h3>ê°Å¸âÂ Estrutura Principal</h3>
            <code>.bmad-core/</code>
            <p>Pasta principal com todas as configuraêÂ§êÂµes do BMad.</p>

            <h3>ê¢Å¡â¢ê¯Â¸Â bmad-config.json</h3>
            <p><strong>FunêÂ§êÂ£o:</strong> ConfiguraêÂ§êÂ£o principal do BMad</p>
            <p><strong>ContêÂ©m:</strong></p>
            <ul>
                <li>VersêÂ£o instalada</li>
                <li>Tipo de instalaêÂ§êÂ£o (full, minimal)</li>
                <li>IDEs configuradas</li>
                <li>PreferêÂªncias do usuêÂ¡rio</li>
            </ul>
            <code>
{
  "version": "4.44.1",
  "installationType": "full",
  "ideSetup": ["cursor", "claude-code"],
  "language": "pt-BR"
}
            </code>

            <h3>ê°Å¸ââ¹ bmad-registry.json</h3>
            <p><strong>FunêÂ§êÂ£o:</strong> Registro de todos os agentes instalados</p>
            <p><strong>ContêÂ©m:</strong></p>
            <ul>
                <li>Lista de agentes ativos</li>
                <li>Caminho de cada agente</li>
                <li>Metadata dos agentes</li>
            </ul>

            <h3>ê°Å¸Â¤â agents/</h3>
            <p><strong>FunêÂ§êÂ£o:</strong> DiretêÂ³rio com os arquivos dos agentes</p>
            <p>Cada agente tem seu prêÂ³prio arquivo de configuraêÂ§êÂ£o com:</p>
            <ul>
                <li>Nome e descriêÂ§êÂ£o</li>
                <li>Habilidades e especialidades</li>
                <li>InstruêÂ§êÂµes de comportamento</li>
            </ul>

            <h3>ê°Å¸âÂ§ ConfiguraêÂ§êÂµes de IDE</h3>
            <p>Pastas especêÂ­ficas para cada IDE:</p>
            <ul>
                <li><code>.cursor/</code> - ConfiguraêÂ§êÂµes para Cursor IDE</li>
                <li><code>.claude/</code> - ConfiguraêÂ§êÂµes para Claude Code</li>
                <li><code>.gemini/</code> - ConfiguraêÂ§êÂµes para Gemini</li>
                <li><code>.github/</code> - ConfiguraêÂ§êÂµes para GitHub Copilot</li>
            </ul>

            <h3>ê°Å¸âÂ Dicas Importantes</h3>
            <ul>
                <li><strong>NêÂ£o modifique</strong> manualmente os arquivos, use os comandos BMad</li>
                <li><strong>FaêÂ§a backup</strong> da pasta .bmad-core/ antes de atualizaêÂ§êÂµes</li>
                <li><strong>Adicione ao .gitignore</strong> se necessêÂ¡rio (opcional)</li>
                <li>Use <code>npx bmad-method list:config</code> para ver todos os arquivos</li>
            </ul>

            <p><strong>PrêÂ³ximo passo:</strong> Aprenda todos os comandos disponêÂ­veis!</p>
        `
    },
    {
        id: 8,
        title: "ReferêÂªncia de Comandos",
        content: `
            <h2>ReferêÂªncia Completa de Comandos</h2>
            <p>Lista completa de todos os comandos BMad com exemplos prêÂ¡ticos:</p>

            <h3>ê°Å¸Å¡â¬ Comandos BêÂ¡sicos</h3>

            <h4>npx bmad-method install</h4>
            <p>Instala o BMad no seu projeto pela primeira vez.</p>
            <code>cd meu-projeto && npx bmad-method install</code>
            <p><em>O instalador êÂ© interativo e guia vocêÂª passo a passo.</em></p>

            <h4>npx bmad-method status</h4>
            <p>Mostra o status da instalaêÂ§êÂ£o atual.</p>
            <code>npx bmad-method status</code>
            <p><em>Retorna: versêÂ£o, tipo, IDEs configuradas, total de arquivos.</em></p>

            <h4>npx bmad-method update</h4>
            <p>Atualiza o BMad para a versêÂ£o mais recente.</p>
            <code>npx bmad-method update</code>

            <h4>npx bmad-method update-check</h4>
            <p>Verifica se hêÂ¡ atualizaêÂ§êÂµes disponêÂ­veis sem instalar.</p>
            <code>npx bmad-method update-check</code>

            <h3>ê°Å¸ââ¹ Comandos de Listagem</h3>

            <h4>npx bmad-method list:agents</h4>
            <p>Lista todos os agentes instalados no projeto.</p>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method list:agents --detailed</code>
            <p><em>Use --detailed para ver informaêÂ§êÂµes completas de cada agente.</em></p>

            <h4>npx bmad-method list:expansions</h4>
            <p>Lista pacotes de expansêÂ£o disponêÂ­veis.</p>
            <code>npx bmad-method list:expansions</code>

            <h4>npx bmad-method list:config</h4>
            <p>Lista todos os arquivos de configuraêÂ§êÂ£o do BMad.</p>
            <code>npx bmad-method list:config</code>

            <h3>ê°Å¸âÂ§ Comandos de Gerenciamento</h3>

            <h4>npx bmad-method add:expansion [nome]</h4>
            <p>Adiciona um pacote de expansêÂ£o ao projeto.</p>
            <code>npx bmad-method add:expansion bmad-2d-phaser-game-dev</code>
            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>

            <h4>npx bmad-method remove:agent [nome]</h4>
            <p>Remove um agente especêÂ­fico do projeto.</p>
            <code>npx bmad-method remove:agent writer</code>

            <h4>npx bmad-method show:config</h4>
            <p>Exibe o conteêÂºdo do arquivo de configuraêÂ§êÂ£o principal.</p>
            <code>npx bmad-method show:config</code>

            <h3>ê°Å¸âÂ¡ Usando Agentes na IDE</h3>
            <p>Depois de instalado, use os agentes diretamente na sua IDE:</p>

            <code>As dev, crie uma funêÂ§êÂ£o que valida emails</code>
            <code>As ux-expert, desenhe uma tela de cadastro moderna</code>
            <code>As pm, crie um PRD para um sistema de chat</code>
            <code>As architect, defina a arquitetura de um microserviêÂ§o</code>
            <code>As analyst, faêÂ§a anêÂ¡lise competitiva do mercado</code>
            <code>As qa, crie testes unitêÂ¡rios para esta funêÂ§êÂ£o</code>

            <h3>ê°Å¸Å½Â¯ Dicas de Uso</h3>
            <ul>
                <li>Sempre use <code>npx bmad-method</code> antes dos comandos</li>
                <li>Execute os comandos na raiz do seu projeto</li>
                <li>Use <code>help</code> para relembrar comandos: <code>npx bmad-method help</code></li>
                <li>Teste os comandos no <strong>Playground</strong> desta academy!</li>
            </ul>

            <p><strong>ParabêÂ©ns!</strong> VocêÂª agora domina todos os comandos do BMad Method! ê°Å¸Å½â°</p>
        `
    },
    {
        id: 9,
        title: "Criando Projetos com Agentes",
        content: `
            <h2>Criando Projetos: Do Manual ao AutomêÂ¡tico</h2>
            <p>O BMad oferece diferentes nêÂ­veis de automaêÂ§êÂ£o para criar projetos. Escolha o que melhor se adapta ao seu estilo!</p>

            <h3>ê°Å¸âÅ  NêÂ­veis de AutomaêÂ§êÂ£o - Resumo PrêÂ¡tico</h3>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border);">
                        <th style="padding: 12px; text-align: left;">NêÂ­vel de AutomaêÂ§êÂ£o</th>
                        <th style="padding: 12px; text-align: left;">Como Ativar</th>
                        <th style="padding: 12px; text-align: left;">O que Ele Faz</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>Manual (PadrêÂ£o)</strong></td>
                        <td style="padding: 12px;"><code>/pm</code> <code>/architect</code> <code>/dev</code> <code>/qa</code></td>
                        <td style="padding: 12px;">VocêÂª chama os agentes conforme precisar, controle total</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>Semi-automêÂ¡tico</strong><br><em style="color: var(--success);">(Recomendado)</em></td>
                        <td style="padding: 12px;"><code>/bmad-master</code></td>
                        <td style="padding: 12px;">Cria tudo em sequêÂªncia, mas pede confirmaêÂ§êÂ£o entre etapas</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>Totalmente AutomêÂ¡tico</strong></td>
                        <td style="padding: 12px;"><code>/bmad-master auto</code></td>
                        <td style="padding: 12px;">Cria todo o projeto sozinho, sem pausas</td>
                    </tr>
                </tbody>
            </table>

            <h3>ê°Å¸âÂ§ Modo Manual - Controle Total</h3>
            <p>Ideal para: Aprender, experimentar, projetos simples</p>
            <p><strong>Como funciona:</strong> VocêÂª invoca cada agente individualmente</p>

            <code>As pm, crie um PRD para um e-commerce de roupas</code>
            <p><em>Aguarda PM criar o documento...</em></p>

            <code>As architect, defina a arquitetura baseada neste PRD</code>
            <p><em>Aguarda Architect criar a arquitetura...</em></p>

            <code>As dev, implemente a tela de produtos</code>
            <p><em>Aguarda Dev implementar...</em></p>

            <code>As qa, crie testes para esta tela</code>
            <p><em>Aguarda QA criar testes...</em></p>

            <p><strong>Vantagens:</strong> Controle total, aprende o processo<br>
            <strong>Desvantagens:</strong> Mais demorado, requer conhecimento da sequêÂªncia</p>

            <h3>ê¢Å¡Â¡ Modo Semi-AutomêÂ¡tico - Recomendado</h3>
            <p>Ideal para: Projetos mêÂ©dios, revisêÂ£o entre etapas, aprendizado guiado</p>
            <p><strong>Como funciona:</strong> O BMad Master orquestra todos os agentes, mas pede sua aprovaêÂ§êÂ£o</p>

            <code>/bmad-master Crie um sistema de gestêÂ£o de clientes</code>

            <p><strong>O que acontece:</strong></p>
            <ul>
                <li>1ê¯Â¸Âê¢ÆÂ£ <strong>PM cria o PRD</strong> ê¢â â Mostra e aguarda sua confirmaêÂ§êÂ£o</li>
                <li>2ê¯Â¸Âê¢ÆÂ£ <strong>Architect define arquitetura</strong> ê¢â â Mostra e aguarda confirmaêÂ§êÂ£o</li>
                <li>3ê¯Â¸Âê¢ÆÂ£ <strong>UX-Expert cria wireframes</strong> ê¢â â Mostra e aguarda confirmaêÂ§êÂ£o</li>
                <li>4ê¯Â¸Âê¢ÆÂ£ <strong>Dev implementa cêÂ³digo</strong> ê¢â â Mostra e aguarda confirmaêÂ§êÂ£o</li>
                <li>5ê¯Â¸Âê¢ÆÂ£ <strong>QA cria testes</strong> ê¢â â Mostra resultado final</li>
            </ul>

            <p><strong>Vantagens:</strong> RêÂ¡pido, mantêÂ©m controle, aprende o fluxo<br>
            <strong>Desvantagens:</strong> Requer aprovaêÂ§êÂµes manuais</p>

            <h3>ê°Å¸Å¡â¬ Modo Totalmente AutomêÂ¡tico - MêÂ¡xima Velocidade</h3>
            <p>Ideal para: ProtêÂ³tipos rêÂ¡pidos, MVPs, projetos urgentes</p>
            <p><strong>Como funciona:</strong> Tudo êÂ© criado automaticamente do inêÂ­cio ao fim</p>

            <code>/bmad-master auto Crie um blog completo com sistema de posts</code>

            <p><strong>O que acontece:</strong></p>
            <ul>
                <li>ê¢Åâ¦ PM ê¢â â Analyst ê¢â â Architect ê¢â â UX-Expert ê¢â â Dev ê¢â â QA</li>
                <li>ê¢Åâ¦ Todo o fluxo executado sem interrupêÂ§êÂµes</li>
                <li>ê¢Åâ¦ Projeto completo entregue no final</li>
            </ul>

            <p><strong>Vantagens:</strong> Extremamente rêÂ¡pido, zero intervenêÂ§êÂ£o<br>
            <strong>Desvantagens:</strong> Menos controle sobre cada etapa</p>

            <h3>ê°Å¸âÂ¡ Qual Escolher?</h3>
            <ul>
                <li><strong>Iniciante?</strong> Use <code>Manual</code> para aprender</li>
                <li><strong>Experiente?</strong> Use <code>Semi-automêÂ¡tico</code> para produtividade</li>
                <li><strong>Urgente?</strong> Use <code>AutomêÂ¡tico</code> para velocidade mêÂ¡xima</li>
                <li><strong>Projeto complexo?</strong> Use <code>Semi-automêÂ¡tico</code> para revisar cada etapa</li>
            </ul>

            <h3>ê°Å¸Å½Â¯ Exemplo PrêÂ¡tico Completo</h3>

            <h4>CenêÂ¡rio: Sistema de Delivery</h4>

            <p><strong>OpêÂ§êÂ£o 1 - Manual:</strong></p>
            <code>As analyst, faêÂ§a pesquisa de mercado de apps de delivery</code>
            <code>As pm, crie PRD para app de delivery baseado na pesquisa</code>
            <code>As architect, defina arquitetura do sistema</code>
            <code>As ux-expert, crie wireframes das telas principais</code>
            <code>As dev, implemente o sistema de pedidos</code>
            <code>As qa, crie suite de testes completa</code>

            <p><strong>OpêÂ§êÂ£o 2 - Semi-automêÂ¡tico (Recomendado):</strong></p>
            <code>/bmad-master Crie um app de delivery de comida completo</code>
            <p><em>Revise e aprove cada etapa quando solicitado</em></p>

            <p><strong>OpêÂ§êÂ£o 3 - AutomêÂ¡tico:</strong></p>
            <code>/bmad-master auto Crie um app de delivery de comida completo</code>
            <p><em>Aguarde o projeto ser criado completamente</em></p>

            <p><strong>Dica Final:</strong> Comece com manual para aprender, depois migre para semi-automêÂ¡tico quando estiver confortêÂ¡vel!</p>

            <h3>ê°Å¸âÂ Exemplo de Fluxo PrêÂ¡tico: Criando um Curso Online</h3>

            <p>Veja como criar um curso online completo usando o fluxo manual passo a passo:</p>

            <h4>Passo 1: Planejamento</h4>
            <code>/pm ê¢â â "Crie o plano geral do curso de JavaScript para iniciantes"</code>
            <p><em>ê¢Åâ¦ PM cria documento com objetivos, pêÂºblico-alvo, estrutura macro</em></p>

            <h4>Passo 2: Arquitetura</h4>
            <code>/architect ê¢â â "Crie a estrutura detalhada do curso baseada no PRD"</code>
            <p><em>ê¢Åâ¦ Architect define tecnologias, organizaêÂ§êÂ£o de conteêÂºdo, recursos necessêÂ¡rios</em></p>

            <h4>Passo 3: OrganizaêÂ§êÂ£o (OrquestraêÂ§êÂ£o)</h4>
            <code>/bmad-master ê¢â â "Divida o curso em mêÂ³dulos e tarefas especêÂ­ficas"</code>
            <p><em>ê¢Åâ¦ BMad Master cria breakdown completo: mêÂ³dulos, aulas, exercêÂ­cios, cronograma</em></p>

            <h4>Passo 4: Desenvolvimento de ConteêÂºdo</h4>
            <code>/dev ê¢â â "Implemente o conteêÂºdo do mêÂ³dulo 1: Fundamentos"</code>
            <p><em>ê¢Åâ¦ Dev cria cêÂ³digo de exemplo, exercêÂ­cios prêÂ¡ticos, desafios</em></p>

            <h4>Passo 5: Qualidade e DidêÂ¡tica</h4>
            <code>/qa ê¢â â "Revise e otimize a didêÂ¡tica do mêÂ³dulo 1"</code>
            <p><em>ê¢Åâ¦ QA verifica clareza, corrige erros, melhora explicaêÂ§êÂµes, testa exercêÂ­cios</em></p>

            <h4>Repetir Passos 4 e 5 para outros mêÂ³dulos</h4>
            <code>/dev ê¢â â "Implemente o conteêÂºdo do mêÂ³dulo 2: DOM e Eventos"</code>
            <code>/qa ê¢â â "Revise e otimize a didêÂ¡tica do mêÂ³dulo 2"</code>

            <p><strong>Resultado:</strong> Curso completo, bem estruturado, com conteêÂºdo didêÂ¡tico e testado!</p>

            <h3>ê¢Å¡Â¡ Mesmo Projeto em Modo Semi-AutomêÂ¡tico</h3>
            <p>Quer criar o mesmo curso mais rêÂ¡pido? Use o modo semi-automêÂ¡tico:</p>

            <code>/bmad-master Crie um curso completo de JavaScript para iniciantes com 5 mêÂ³dulos</code>

            <p><strong>O BMad farêÂ¡:</strong></p>
            <ul>
                <li>ê¢Åâ¦ PM planeja ê¢â â <em>aguarda sua aprovaêÂ§êÂ£o</em></li>
                <li>ê¢Åâ¦ Architect estrutura ê¢â â <em>aguarda sua aprovaêÂ§êÂ£o</em></li>
                <li>ê¢Åâ¦ Writer cria conteêÂºdo ê¢â â <em>aguarda sua aprovaêÂ§êÂ£o</em></li>
                <li>ê¢Åâ¦ Dev cria exercêÂ­cios ê¢â â <em>aguarda sua aprovaêÂ§êÂ£o</em></li>
                <li>ê¢Åâ¦ QA revisa tudo ê¢â â <em>apresenta resultado final</em></li>
            </ul>

            <p><strong>Economia de tempo:</strong> 80% mais rêÂ¡pido que fazer manualmente!</p>
        `
    },
    {
        id: 10,
        title: "AtualizaêÂ§êÂ£o e ExpansêÂµes",
        content: `
            <h2>Mantendo o BMad Atualizado</h2>
            <p>Aprenda a manter seu BMad sempre na versêÂ£o mais recente e como expandir suas funcionalidades.</p>

            <h3>ê°Å¸ââ Verificando AtualizaêÂ§êÂµes</h3>

            <h4>Verificar sem instalar</h4>
            <code>npx bmad-method update-check</code>
            <p><em>Mostra se hêÂ¡ versêÂ£o mais recente disponêÂ­vel, sem fazer alteraêÂ§êÂµes</em></p>

            <h4>Ver versêÂ£o atual</h4>
            <code>npx bmad-method status</code>
            <p>A primeira linha mostra a versêÂ£o instalada: <code>Version: 4.44.1</code></p>

            <h3>ê¢Â¬â ê¯Â¸Â Atualizando o BMad</h3>

            <h4>Passo 1: Fazer Backup</h4>
            <p><strong>Muito importante!</strong> Sempre faêÂ§a backup antes de atualizar:</p>
            <ul>
                <li>Copie a pasta <code>.bmad-core/</code> para local seguro</li>
                <li>Ou faêÂ§a commit no Git: <code>git add . && git commit -m "Backup antes de atualizar BMad"</code></li>
            </ul>

            <h4>Passo 2: Executar AtualizaêÂ§êÂ£o</h4>
            <code>npx bmad-method update</code>
            <p><em>O comando baixa e instala a versêÂ£o mais recente automaticamente</em></p>

            <h4>Passo 3: Verificar AtualizaêÂ§êÂ£o</h4>
            <code>npx bmad-method status</code>
            <p>Confirme que a versêÂ£o foi atualizada corretamente</p>

            <h3>ê°Å¸âÂ¦ Pacotes de ExpansêÂ£o</h3>

            <p>Expanda as capacidades do BMad com pacotes especializados:</p>

            <h4>Ver Pacotes DisponêÂ­veis</h4>
            <code>npx bmad-method list:expansions</code>

            <p><strong>Pacotes Principais:</strong></p>
            <ul>
                <li><strong>bmad-2d-phaser-game-dev</strong> - Desenvolvimento de jogos 2D</li>
                <li><strong>bmad-infrastructure-devops</strong> - DevOps e infraestrutura</li>
                <li><strong>bmad-creative-writing</strong> - Escrita criativa</li>
                <li><strong>bmad-godot-game-dev</strong> - Desenvolvimento com Godot</li>
                <li><strong>bmad-mobile-dev</strong> - Desenvolvimento mobile</li>
            </ul>

            <h4>Adicionar ExpansêÂ£o</h4>
            <code>npx bmad-method add:expansion bmad-2d-phaser-game-dev</code>
            <p><em>Adiciona agentes especializados em jogos 2D</em></p>

            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>
            <p><em>Adiciona agentes DevOps, Docker, Kubernetes, etc.</em></p>

            <h4>Verificar ExpansêÂµes Instaladas</h4>
            <code>npx bmad-method list:agents</code>
            <p>Os agentes das expansêÂµes aparecem na lista com suas especialidades</p>

            <h3>ê°Å¸ââê¯Â¸Â Removendo Agentes</h3>

            <p>Se precisar remover um agente que nêÂ£o usa mais:</p>
            <code>npx bmad-method remove:agent writer</code>
            <p><em>Remove o agente writer do projeto</em></p>

            <p><strong>ê¢Å¡Â ê¯Â¸Â AtenêÂ§êÂ£o:</strong> NêÂ£o remova agentes essenciais como dev, pm ou architect</p>

            <h3>ê°Å¸âÂ Visualizar ConfiguraêÂ§êÂ£o</h3>

            <code>npx bmad-method show:config</code>
            <p>Exibe todo o conteêÂºdo do arquivo <code>bmad-config.json</code></p>

            <h3>ê°Å¸âÂ¡ Boas PrêÂ¡ticas de AtualizaêÂ§êÂ£o</h3>

            <ul>
                <li>ê°Å¸ââ¦ <strong>FrequêÂªncia:</strong> Verifique atualizaêÂ§êÂµes semanalmente</li>
                <li>ê°Å¸âÂ¾ <strong>Backup:</strong> Sempre antes de atualizar</li>
                <li>ê°Å¸âÂ <strong>Changelog:</strong> Leia as notas de versêÂ£o</li>
                <li>ê°Å¸Â§Âª <strong>Teste:</strong> Teste em projeto de teste primeiro</li>
                <li>ê°Å¸ââ <strong>ProduêÂ§êÂ£o:</strong> SêÂ³ atualize em produêÂ§êÂ£o apêÂ³s testar</li>
            </ul>

            <h3>ê°Å¸Å½Â¯ Quando Usar ExpansêÂµes?</h3>

            <p><strong>Use expansêÂµes quando:</strong></p>
            <ul>
                <li>Precisa de agentes especializados para sua êÂ¡rea</li>
                <li>Vai desenvolver projetos especêÂ­ficos (jogos, DevOps, etc.)</li>
                <li>Quer acelerar trabalho em nicho especêÂ­fico</li>
            </ul>

            <p><strong>NêÂ£o use expansêÂµes se:</strong></p>
            <ul>
                <li>êâ° iniciante (comece com agentes bêÂ¡sicos)</li>
                <li>NêÂ£o precisa de funcionalidades especializadas</li>
                <li>Quer manter instalaêÂ§êÂ£o leve e rêÂ¡pida</li>
            </ul>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Aprenda a migrar projetos entre versêÂµes do BMad!</p>
        `
    },
    {
        id: 11,
        title: "MigraêÂ§êÂ£o de Projetos",
        content: `
            <h2>Migrando Projetos Entre VersêÂµes</h2>
            <p>Como migrar projetos antigos para novas versêÂµes do BMad sem perder trabalho.</p>

            <h3>ê°Å¸âÂ Detectando VersêÂµes Antigas</h3>

            <p>Abra um projeto antigo e execute:</p>
            <code>npx bmad-method status</code>

            <p><strong>Sinais de versêÂ£o desatualizada:</strong></p>
            <ul>
                <li>ê¢ÂÅ VersêÂ£o diferente da mais recente</li>
                <li>ê¢Å¡Â ê¯Â¸Â Warnings sobre arquivos obsoletos</li>
                <li>ê°Å¸âÂ´ Erros ao executar comandos</li>
                <li>ê°Å¸âÂ Estrutura de pastas diferente</li>
            </ul>

            <h3>ê°Å¸ââ¹ Checklist de MigraêÂ§êÂ£o</h3>

            <h4>1. Backup Completo</h4>
            <p>Antes de qualquer coisa:</p>
            <code>cp -r .bmad-core .bmad-core.backup</code>
            <p>Ou faêÂ§a commit no Git:</p>
            <code>git add . && git commit -m "Backup antes de migrar BMad"</code>

            <h4>2. Anotar ConfiguraêÂ§êÂµes Atuais</h4>
            <code>npx bmad-method show:config</code>
            <p>Salve a saêÂ­da em um arquivo para referêÂªncia:</p>
            <code>npx bmad-method show:config > config-backup.txt</code>

            <h4>3. Listar Agentes Instalados</h4>
            <code>npx bmad-method list:agents > agents-backup.txt</code>
            <p>Anote quais agentes vocêÂª tem instalados</p>

            <h3>ê°Å¸ââ Processo de MigraêÂ§êÂ£o</h3>

            <h4>MêÂ©todo 1: AtualizaêÂ§êÂ£o In-Place (Recomendado)</h4>

            <p><strong>Passo 1:</strong> Atualizar BMad</p>
            <code>npx bmad-method update</code>

            <p><strong>Passo 2:</strong> Verificar compatibilidade</p>
            <code>npx bmad-method status</code>

            <p><strong>Passo 3:</strong> Testar comandos bêÂ¡sicos</p>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method list:config</code>

            <p><strong>Passo 4:</strong> Testar com agente</p>
            <code>As dev, liste os arquivos do projeto</code>
            <p><em>Se funcionar, migraêÂ§êÂ£o bem-sucedida!</em></p>

            <h4>MêÂ©todo 2: ReinstalaêÂ§êÂ£o Limpa</h4>

            <p>Use se a atualizaêÂ§êÂ£o in-place falhar:</p>

            <p><strong>Passo 1:</strong> Remover instalaêÂ§êÂ£o antiga</p>
            <code>rm -rf .bmad-core</code>

            <p><strong>Passo 2:</strong> Reinstalar BMad</p>
            <code>npx bmad-method install</code>

            <p><strong>Passo 3:</strong> Reinstalar agentes e expansêÂµes</p>
            <p>Use os arquivos de backup para saber quais reinstalar:</p>
            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>

            <h3>ê¢Å¡â¢ê¯Â¸Â Adaptando ConfiguraêÂ§êÂµes</h3>

            <h4>Verificar MudanêÂ§as de Schema</h4>

            <p>Compare o novo <code>bmad-config.json</code> com o backup:</p>
            <ul>
                <li>Novos campos adicionados?</li>
                <li>Campos removidos ou renomeados?</li>
                <li>Novos valores padrêÂ£o?</li>
            </ul>

            <h4>Ajustar Manualmente (se necessêÂ¡rio)</h4>

            <p>Edite <code>.bmad-core/bmad-config.json</code> cuidadosamente:</p>
            <code>
{
  "version": "4.50.0",  ê¢â Â VersêÂ£o nova
  "installationType": "full",
  "ideSetup": ["cursor", "claude-code"],
  "language": "pt-BR",
  "newField": "default-value"  ê¢â Â Campo novo
}
            </code>

            <h3>ê°Å¸Â§Âª Testando ApêÂ³s MigraêÂ§êÂ£o</h3>

            <h4>Teste 1: Comandos BêÂ¡sicos</h4>
            <code>npx bmad-method status</code>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method help</code>

            <h4>Teste 2: Agentes Individuais</h4>
            <code>As dev, liste os arquivos TypeScript do projeto</code>
            <code>As pm, resuma o README.md</code>

            <h4>Teste 3: Projeto Real</h4>
            <p>Tente criar um pequeno projeto com o fluxo completo:</p>
            <code>/bmad-master Crie um componente React de contador</code>

            <h3>ê°Å¸â Ë Problemas Comuns e SoluêÂ§êÂµes</h3>

            <h4>Problema: "Agente nêÂ£o encontrado"</h4>
            <p><strong>SoluêÂ§êÂ£o:</strong> Reinstale o agente</p>
            <code>npx bmad-method install</code>
            <p>Selecione o agente faltante na lista</p>

            <h4>Problema: "VersêÂ£o incompatêÂ­vel"</h4>
            <p><strong>SoluêÂ§êÂ£o:</strong> ReinstalaêÂ§êÂ£o limpa (MêÂ©todo 2)</p>

            <h4>Problema: "Arquivo de configuraêÂ§êÂ£o corrompido"</h4>
            <p><strong>SoluêÂ§êÂ£o:</strong> Restaurar backup</p>
            <code>cp .bmad-core.backup/bmad-config.json .bmad-core/</code>

            <h3>ê°Å¸âÅ  Checklist Final</h3>

            <p>ê¢Åâ¦ Todos os comandos funcionam?</p>
            <p>ê¢Åâ¦ Todos os agentes estêÂ£o disponêÂ­veis?</p>
            <p>ê¢Åâ¦ ExpansêÂµes reinstaladas?</p>
            <p>ê¢Åâ¦ Projeto de teste funciona?</p>
            <p>ê¢Åâ¦ ConfiguraêÂ§êÂµes preservadas?</p>

            <h3>ê°Å¸âÂ¡ Dicas de ManutenêÂ§êÂ£o ContêÂ­nua</h3>

            <ul>
                <li>ê°Å¸ââ Atualize regularmente (nêÂ£o deixe acumular versêÂµes)</li>
                <li>ê°Å¸âÂ¾ Sempre tenha backup antes de atualizar</li>
                <li>ê°Å¸âÂ Documente suas expansêÂµes instaladas</li>
                <li>ê°Å¸Â§Âª Mantenha um projeto de teste para validaêÂ§êÂµes</li>
                <li>ê°Å¸âÅ¡ Leia changelog antes de atualizar</li>
            </ul>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> SoluêÂ§êÂ£o de problemas comuns no dia a dia!</p>
        `
    },
    {
        id: 12,
        title: "SoluêÂ§êÂ£o de Problemas",
        content: `
            <h2>Solucionando Problemas Comuns</h2>
            <p>Guia prêÂ¡tico para resolver os erros mais frequentes do BMad.</p>

            <h3>ê°Å¸âÂ DiagnêÂ³stico Inicial</h3>

            <p>Sempre comece com estes comandos para diagnosticar:</p>

            <code>npx bmad-method status</code>
            <p><em>Verifica estado geral da instalaêÂ§êÂ£o</em></p>

            <code>npx bmad-method list:agents</code>
            <p><em>Confirma quais agentes estêÂ£o disponêÂ­veis</em></p>

            <code>npx bmad-method list:config</code>
            <p><em>Verifica arquivos de configuraêÂ§êÂ£o</em></p>

            <h3>ê¢ÂÅ Erro: "Comando nêÂ£o reconhecido"</h3>

            <h4>Sintoma:</h4>
            <code>npx: command not found: bmad-method</code>

            <h4>Causa:</h4>
            <p>Node.js ou NPX nêÂ£o instalado ou fora do PATH</p>

            <h4>SoluêÂ§êÂ£o:</h4>
            <ol>
                <li>Verificar Node.js: <code>node --version</code></li>
                <li>Se nêÂ£o retornar versêÂ£o, instale Node.js</li>
                <li>Reinicie o terminal</li>
                <li>Tente novamente</li>
            </ol>

            <h3>ê¢ÂÅ Erro: "Agente nêÂ£o encontrado"</h3>

            <h4>Sintoma:</h4>
            <code>Error: Agent 'dev' not found in registry</code>

            <h4>Causa:</h4>
            <p>Agente nêÂ£o foi instalado ou registro corrompido</p>

            <h4>SoluêÂ§êÂ£o RêÂ¡pida:</h4>
            <code>npx bmad-method install</code>
            <p>Selecione o agente faltante e instale</p>

            <h4>SoluêÂ§êÂ£o Completa:</h4>
            <p>Se reinstalaêÂ§êÂ£o nêÂ£o funcionar:</p>
            <ol>
                <li>Backup: <code>cp -r .bmad-core .bmad-core.backup</code></li>
                <li>Remover: <code>rm -rf .bmad-core</code></li>
                <li>Reinstalar: <code>npx bmad-method install</code></li>
                <li>Configurar novamente</li>
            </ol>

            <h3>ê¢ÂÅ Erro: "Arquivo JSON invêÂ¡lido"</h3>

            <h4>Sintoma:</h4>
            <code>SyntaxError: Unexpected token in JSON at position 45</code>

            <h4>Causa:</h4>
            <p>Arquivo <code>bmad-config.json</code> ou <code>bmad-registry.json</code> corrompido</p>

            <h4>SoluêÂ§êÂ£o:</h4>
            <ol>
                <li>Identificar arquivo com problema (veja mensagem de erro)</li>
                <li>Abrir arquivo em editor</li>
                <li>Validar JSON online: https://jsonlint.com/</li>
                <li>Corrigir vêÂ­rgulas, chaves, aspas faltando</li>
                <li>Salvar e testar</li>
            </ol>

            <h4>Se nêÂ£o conseguir corrigir:</h4>
            <p>Restaure backup ou reinstale:</p>
            <code>npx bmad-method install</code>

            <h3>ê¢ÂÅ Erro: "VersêÂ£o incompatêÂ­vel"</h3>

            <h4>Sintoma:</h4>
            <code>Warning: BMad version mismatch. Expected 4.50.0, found 4.44.1</code>

            <h4>Causa:</h4>
            <p>VersêÂ£o do BMad desatualizada</p>

            <h4>SoluêÂ§êÂ£o:</h4>
            <code>npx bmad-method update</code>
            <p>Se falhar, veja LiêÂ§êÂ£o 11 sobre migraêÂ§êÂ£o</p>

            <h3>ê¢ÂÅ Erro: "PermissêÂ£o negada"</h3>

            <h4>Sintoma:</h4>
            <code>EACCES: permission denied, mkdir '.bmad-core'</code>

            <h4>Causa:</h4>
            <p>Sem permissêÂ£o para criar arquivos no diretêÂ³rio</p>

            <h4>SoluêÂ§êÂ£o:</h4>
            <ol>
                <li>Verifique permissêÂµes do diretêÂ³rio</li>
                <li>No Linux/Mac: <code>chmod 755 .</code></li>
                <li>No Windows: Execute terminal como Administrador</li>
                <li>Ou mude para diretêÂ³rio com permissêÂµes corretas</li>
            </ol>

            <h3>ê¢ÂÅ Erro: "API Key invêÂ¡lida"</h3>

            <h4>Sintoma:</h4>
            <code>Error: Invalid API key for Claude/Gemini</code>

            <h4>Causa:</h4>
            <p>Chave de API nêÂ£o configurada ou expirada</p>

            <h4>SoluêÂ§êÂ£o:</h4>
            <ol>
                <li>Verificar arquivo de configuraêÂ§êÂ£o da IDE</li>
                <li>Obter nova API key no site do provedor</li>
                <li>Atualizar configuraêÂ§êÂ£o</li>
                <li>Reiniciar IDE</li>
            </ol>

            <h3>ê¢ÂÅ Agente nêÂ£o responde</h3>

            <h4>Sintoma:</h4>
            <p>Comando enviado mas agente nêÂ£o executa nada</p>

            <h4>Causas PossêÂ­veis:</h4>
            <ul>
                <li>Sintaxe incorreta do comando</li>
                <li>IDE nêÂ£o configurada corretamente</li>
                <li>Agente nêÂ£o suporta a tarefa solicitada</li>
            </ul>

            <h4>SoluêÂ§êÂ£o:</h4>
            <ol>
                <li>Verifique sintaxe: <code>As dev, [tarefa]</code></li>
                <li>Use agente correto para a tarefa</li>
                <li>Reinicie a IDE</li>
                <li>Tente tarefa mais simples para testar</li>
            </ol>

            <h3>ê°Å¸âºÂ ê¯Â¸Â Ferramentas de DiagnêÂ³stico</h3>

            <h4>Ver Logs Detalhados</h4>
            <code>npx bmad-method status --verbose</code>

            <h4>Validar ConfiguraêÂ§êÂ£o</h4>
            <code>npx bmad-method show:config</code>

            <h4>Testar Conectividade</h4>
            <p>Teste um agente com tarefa simples:</p>
            <code>As dev, liste os arquivos da pasta atual</code>

            <h3>ê°Å¸âÂ¡ Dicas de PrevenêÂ§êÂ£o</h3>

            <ul>
                <li>ê¢Åâ¦ Mantenha backups regulares de <code>.bmad-core/</code></li>
                <li>ê¢Åâ¦ Use Git para versionar configuraêÂ§êÂµes</li>
                <li>ê¢Åâ¦ Teste em projeto separado antes de produêÂ§êÂ£o</li>
                <li>ê¢Åâ¦ Documente suas configuraêÂ§êÂµes personalizadas</li>
                <li>ê¢Åâ¦ Leia changelog antes de atualizar</li>
                <li>ê¢Åâ¦ NêÂ£o edite arquivos JSON manualmente</li>
            </ul>

            <h3>ê°Å¸â Ë Quando Pedir Ajuda</h3>

            <p>Se nenhuma soluêÂ§êÂ£o funcionou:</p>
            <ol>
                <li>ReêÂºna informaêÂ§êÂµes:
                    <ul>
                        <li>SaêÂ­da de <code>npx bmad-method status</code></li>
                        <li>Mensagem de erro completa</li>
                        <li>VersêÂ£o do Node.js</li>
                        <li>Sistema operacional</li>
                    </ul>
                </li>
                <li>Abra issue no GitHub: https://github.com/linnoff88-dev/BMAD-Academy/issues</li>
                <li>Ou pergunte no chatbot desta academy!</li>
            </ol>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Boas prêÂ¡ticas para maximizar produtividade!</p>
        `
    },
    {
        id: 13,
        title: "Boas PrêÂ¡ticas",
        content: `
            <h2>Boas PrêÂ¡ticas e OtimizaêÂ§êÂ£o</h2>
            <p>Maximize sua produtividade com BMad seguindo estas prêÂ¡ticas recomendadas.</p>

            <h3>ê°Å¸ââ¹ OrganizaêÂ§êÂ£o de Projetos</h3>

            <h4>Estrutura de DiretêÂ³rios Recomendada</h4>
            <code>
meu-projeto/
ê¢âÅê¢ââ¬ê¢ââ¬ .bmad-core/              ê¢â Â ConfiguraêÂ§êÂµes BMad
ê¢âÅê¢ââ¬ê¢ââ¬ docs/                    ê¢â Â DocumentaêÂ§êÂ£o gerada
ê¢ââ   ê¢âÅê¢ââ¬ê¢ââ¬ prd.md              ê¢â Â PRD do PM
ê¢ââ   ê¢âÅê¢ââ¬ê¢ââ¬ architecture.md     ê¢â Â Arquitetura do Architect
ê¢ââ   ê¢ââê¢ââ¬ê¢ââ¬ wireframes/         ê¢â Â Designs do UX-Expert
ê¢âÅê¢ââ¬ê¢ââ¬ src/                     ê¢â Â CêÂ³digo do Dev
ê¢âÅê¢ââ¬ê¢ââ¬ tests/                   ê¢â Â Testes do QA
ê¢ââê¢ââ¬ê¢ââ¬ README.md
            </code>

            <h4>ConvenêÂ§êÂµes de Nomenclatura</h4>
            <ul>
                <li><code>docs/</code> - DocumentaêÂ§êÂ£o gerada pelos agentes</li>
                <li><code>src/</code> - CêÂ³digo-fonte implementado</li>
                <li><code>tests/</code> - Testes e validaêÂ§êÂµes</li>
                <li><code>.bmad-core/</code> - NUNCA editar manualmente</li>
            </ul>

            <h3>ê°Å¸Å½Â¯ Escolhendo o Agente Certo</h3>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border);">
                        <th style="padding: 12px; text-align: left;">Tarefa</th>
                        <th style="padding: 12px; text-align: left;">Agente Ideal</th>
                        <th style="padding: 12px; text-align: left;">Agente Alternativo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;">Planejar produto</td>
                        <td style="padding: 12px;"><strong>pm</strong></td>
                        <td style="padding: 12px;">analyst</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;">Escrever cêÂ³digo</td>
                        <td style="padding: 12px;"><strong>dev</strong></td>
                        <td style="padding: 12px;">-</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;">Criar interface</td>
                        <td style="padding: 12px;"><strong>ux-expert</strong></td>
                        <td style="padding: 12px;">dev</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;">Definir arquitetura</td>
                        <td style="padding: 12px;"><strong>architect</strong></td>
                        <td style="padding: 12px;">dev</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;">Pesquisar mercado</td>
                        <td style="padding: 12px;"><strong>analyst</strong></td>
                        <td style="padding: 12px;">pm</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;">Criar testes</td>
                        <td style="padding: 12px;"><strong>qa</strong></td>
                        <td style="padding: 12px;">dev</td>
                    </tr>
                </tbody>
            </table>

            <h3>ê¢Å¡Â¡ Otimizando Comandos</h3>

            <h4>ê¢ÂÅ Comandos Vagos (Evite)</h4>
            <code>As dev, crie um site</code>
            <p><em>Muito vago, pode gerar resultado inesperado</em></p>

            <h4>ê¢Åâ¦ Comandos EspecêÂ­ficos (Use)</h4>
            <code>As dev, crie uma landing page HTML com header, hero section e footer responsivo usando Tailwind CSS</code>
            <p><em>EspecêÂ­fico, claro, com tecnologias definidas</em></p>

            <h4>ê°Å¸âÂ¡ Template de Comando Eficaz</h4>
            <code>As [agente], [aêÂ§êÂ£o] [o quêÂª] [como] [com quais tecnologias/restriêÂ§êÂµes]</code>

            <p><strong>Exemplos:</strong></p>
            <code>As dev, implemente um formulêÂ¡rio de login com validaêÂ§êÂ£o de email e senha usando React e Formik</code>
            <code>As ux-expert, crie wireframes de baixa fidelidade para um dashboard de vendas com grêÂ¡ficos e tabelas</code>
            <code>As pm, crie um PRD para app mobile de delivery incluindo user stories e critêÂ©rios de aceitaêÂ§êÂ£o</code>

            <h3>ê°Å¸ââ Fluxo de Trabalho Ideal</h3>

            <h4>Para Projetos Novos:</h4>
            <ol>
                <li><strong>Analyst</strong>: Pesquisa e anêÂ¡lise de requisitos</li>
                <li><strong>PM</strong>: CriaêÂ§êÂ£o do PRD</li>
                <li><strong>Architect</strong>: Design da arquitetura</li>
                <li><strong>UX-Expert</strong>: Wireframes e design</li>
                <li><strong>Dev</strong>: ImplementaêÂ§êÂ£o</li>
                <li><strong>QA</strong>: Testes e validaêÂ§êÂ£o</li>
                <li><strong>Dev</strong>: CorreêÂ§êÂµes baseadas no QA</li>
            </ol>

            <h4>Para Features Existentes:</h4>
            <ol>
                <li><strong>PM</strong>: EspecificaêÂ§êÂ£o da feature</li>
                <li><strong>Architect</strong>: Design têÂ©cnico (se complexo)</li>
                <li><strong>Dev</strong>: ImplementaêÂ§êÂ£o</li>
                <li><strong>QA</strong>: Testes</li>
            </ol>

            <h4>Para Bugs:</h4>
            <ol>
                <li><strong>QA</strong>: Reproduzir e documentar bug</li>
                <li><strong>Dev</strong>: Corrigir problema</li>
                <li><strong>QA</strong>: Validar correêÂ§êÂ£o</li>
            </ol>

            <h3>ê°Å¸âÂ¾ Versionamento e Backup</h3>

            <h4>O que versionar no Git:</h4>
            <ul>
                <li>ê¢Åâ¦ CêÂ³digo-fonte (<code>src/</code>)</li>
                <li>ê¢Åâ¦ Testes (<code>tests/</code>)</li>
                <li>ê¢Åâ¦ DocumentaêÂ§êÂ£o (<code>docs/</code>)</li>
                <li>ê¢Åâ¦ ConfiguraêÂ§êÂµes de projeto</li>
            </ul>

            <h4>O que NêÆO versionar:</h4>
            <ul>
                <li>ê¢ÂÅ <code>.bmad-core/</code> (opcional, depende do time)</li>
                <li>ê¢ÂÅ <code>node_modules/</code></li>
                <li>ê¢ÂÅ Arquivos temporêÂ¡rios</li>
                <li>ê¢ÂÅ API keys e secrets</li>
            </ul>

            <h4>Exemplo .gitignore:</h4>
            <code>
# Dependencies
node_modules/

# BMad (opcional)
.bmad-core/

# Secrets
.env
*.key

# TemporêÂ¡rios
*.log
.DS_Store
            </code>

            <h3>ê°Å¸âÅ  Medindo Produtividade</h3>

            <h4>MêÂ©tricas para Acompanhar:</h4>
            <ul>
                <li>ê¢ÂÂ±ê¯Â¸Â <strong>Tempo de projeto:</strong> Manual vs Semi-automêÂ¡tico vs AutomêÂ¡tico</li>
                <li>ê°Å¸Å½Â¯ <strong>Taxa de sucesso:</strong> % de comandos que geram resultado êÂºtil</li>
                <li>ê°Å¸ââ <strong>IteraêÂ§êÂµes:</strong> Quantas vezes precisa refinar comando</li>
                <li>ê¢Åâ¦ <strong>Qualidade:</strong> Quantos bugs encontrados depois</li>
            </ul>

            <h4>Meta de EficiêÂªncia:</h4>
            <p>Com prêÂ¡tica, vocêÂª deve atingir:</p>
            <ul>
                <li>80% dos comandos geram resultado êÂºtil na primeira tentativa</li>
                <li>Projetos simples em modo semi-automêÂ¡tico: < 30 minutos</li>
                <li>Projetos mêÂ©dios: 1-2 horas (vs 1-2 dias manual)</li>
            </ul>

            <h3>ê°Å¸Å½â Aprendizado ContêÂ­nuo</h3>

            <h4>TêÂ©cnicas de Melhoria:</h4>
            <ul>
                <li>ê°Å¸âÂ Documente comandos que funcionaram bem</li>
                <li>ê°Å¸ââ Crie templates de comandos para tarefas recorrentes</li>
                <li>ê°Å¸Â§Âª Experimente diferentes agentes para mesma tarefa</li>
                <li>ê°Å¸âÅ  Compare resultados de modos diferentes</li>
                <li>ê°Å¸Â¤Â Compartilhe aprendizados com a comunidade</li>
            </ul>

            <h3>ê¢Å¡Â ê¯Â¸Â Erros Comuns a Evitar</h3>

            <ul>
                <li>ê¢ÂÅ Usar modo automêÂ¡tico sem conhecer os agentes</li>
                <li>ê¢ÂÅ Pular etapas importantes (arquitetura, testes)</li>
                <li>ê¢ÂÅ Comandos vagos esperando resultado perfeito</li>
                <li>ê¢ÂÅ NêÂ£o revisar cêÂ³digo gerado</li>
                <li>ê¢ÂÅ Editar <code>.bmad-core/</code> manualmente</li>
                <li>ê¢ÂÅ NêÂ£o fazer backup antes de atualizar</li>
            </ul>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Projetos avanêÂ§ados e desafios prêÂ¡ticos!</p>
        `
    },
    {
        id: 14,
        title: "Projetos AvanêÂ§ados",
        content: `
            <h2>Projetos AvanêÂ§ados e Desafios</h2>
            <p>Coloque em prêÂ¡tica tudo que aprendeu com projetos reais e complexos!</p>

            <h3>ê°Å¸Å½Â¯ Projeto 1: E-commerce Completo</h3>

            <h4>Objetivo:</h4>
            <p>Criar uma plataforma de e-commerce funcional do zero</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>CatêÂ¡logo de produtos com busca e filtros</li>
                <li>Carrinho de compras</li>
                <li>Sistema de checkout</li>
                <li>Painel administrativo</li>
                <li>IntegraêÂ§êÂ£o com pagamento (simulado)</li>
            </ul>

            <h4>Fluxo Sugerido:</h4>
            <code>As analyst, pesquise as melhores prêÂ¡ticas de e-commerce e principais features</code>
            <code>As pm, crie PRD completo para e-commerce baseado na pesquisa</code>
            <code>As architect, defina arquitetura full-stack (frontend, backend, database)</code>
            <code>As ux-expert, crie wireframes de todas as telas principais</code>
            <code>As dev, implemente o frontend com React e backend com Node.js</code>
            <code>As qa, crie suite de testes E2E e unitêÂ¡rios</code>

            <h4>Tecnologias Sugeridas:</h4>
            <ul>
                <li>Frontend: React + TypeScript + Tailwind CSS</li>
                <li>Backend: Node.js + Express + PostgreSQL</li>
                <li>Pagamento: Stripe (test mode)</li>
                <li>Deploy: Vercel + Railway</li>
            </ul>

            <h4>Tempo Estimado:</h4>
            <p>Manual: 2-3 semanas | Semi-automêÂ¡tico: 3-5 dias | AutomêÂ¡tico: 1-2 dias</p>

            <h3>ê°Å¸Å½Â¯ Projeto 2: Sistema de GestêÂ£o MêÂ©dica (SaaS)</h3>

            <h4>Objetivo:</h4>
            <p>Plataforma multi-tenant para consultêÂ³rios mêÂ©dicos</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>Cadastro de pacientes e mêÂ©dicos</li>
                <li>Agendamento de consultas</li>
                <li>ProntuêÂ¡rio eletrêÂ´nico</li>
                <li>Sistema de notificaêÂ§êÂµes (email/SMS)</li>
                <li>RelatêÂ³rios e dashboards</li>
                <li>Multi-tenancy (um sistema, vêÂ¡rios consultêÂ³rios)</li>
            </ul>

            <h4>Modo Recomendado:</h4>
            <p>Semi-automêÂ¡tico com revisêÂµes em cada etapa</p>

            <code>/bmad-master Crie sistema de gestêÂ£o mêÂ©dica SaaS com prontuêÂ¡rio, agendamento e multi-tenancy</code>
            <p><em>Revise e aprove cada etapa antes de continuar</em></p>

            <h4>Desafios TêÂ©cnicos:</h4>
            <ul>
                <li>SeguranêÂ§a (LGPD/HIPAA compliance)</li>
                <li>Performance com muitos usuêÂ¡rios simultêÂ¢neos</li>
                <li>Isolamento de dados entre tenants</li>
                <li>Backup automêÂ¡tico de prontuêÂ¡rios</li>
            </ul>

            <h4>Tempo Estimado:</h4>
            <p>Semi-automêÂ¡tico: 1-2 semanas | AutomêÂ¡tico: 3-5 dias</p>

            <h3>ê°Å¸Å½Â¯ Projeto 3: Plataforma de Cursos Online</h3>

            <h4>Objetivo:</h4>
            <p>Sistema completo de ensino êÂ  distêÂ¢ncia (tipo Udemy)</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>CriaêÂ§êÂ£o e gestêÂ£o de cursos</li>
                <li>Player de vêÂ­deo com progresso</li>
                <li>Quizzes e exercêÂ­cios</li>
                <li>Certificados de conclusêÂ£o</li>
                <li>Sistema de pagamento</li>
                <li>êÂrea do instrutor e do aluno</li>
            </ul>

            <h4>Fluxo Completo:</h4>
            <code>As analyst, analise principais plataformas de curso e liste features essenciais</code>
            <code>As pm, crie PRD com user stories para alunos e instrutores</code>
            <code>As architect, defina arquitetura escalêÂ¡vel com CDN para vêÂ­deos</code>
            <code>As ux-expert, crie protêÂ³tipo navegêÂ¡vel das jornadas principais</code>
            <code>/bmad-master Implemente a plataforma seguindo PRD e arquitetura</code>
            <code>As qa, crie testes para jornadas crêÂ­ticas (compra, assistir aula, certificado)</code>

            <h4>Tempo Estimado:</h4>
            <p>Semi-automêÂ¡tico: 2-3 semanas</p>

            <h3>ê°Å¸Å½Â¯ Projeto 4: App Mobile de Produtividade</h3>

            <h4>Objetivo:</h4>
            <p>Aplicativo de gestêÂ£o de tarefas e produtividade (tipo Todoist)</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>CriaêÂ§êÂ£o e organizaêÂ§êÂ£o de tarefas</li>
                <li>Projetos e sub-tarefas</li>
                <li>Prioridades e datas</li>
                <li>NotificaêÂ§êÂµes push</li>
                <li>SincronizaêÂ§êÂ£o entre dispositivos</li>
                <li>Modo offline</li>
            </ul>

            <h4>ExpansêÂ£o NecessêÂ¡ria:</h4>
            <code>npx bmad-method add:expansion bmad-mobile-dev</code>

            <h4>Tecnologias:</h4>
            <ul>
                <li>React Native + TypeScript</li>
                <li>Firebase (auth, database, notifications)</li>
                <li>Redux para state management</li>
                <li>Expo para desenvolvimento rêÂ¡pido</li>
            </ul>

            <h4>Tempo Estimado:</h4>
            <p>Semi-automêÂ¡tico: 1-2 semanas</p>

            <h3>ê°Å¸Å½Â¯ Projeto 5: Jogo 2D com Phaser</h3>

            <h4>Objetivo:</h4>
            <p>Jogo 2D estilo plataforma com nêÂ­veis e power-ups</p>

            <h4>ExpansêÂ£o NecessêÂ¡ria:</h4>
            <code>npx bmad-method add:expansion bmad-2d-phaser-game-dev</code>

            <h4>Requisitos:</h4>
            <ul>
                <li>Movimento de personagem (pular, correr)</li>
                <li>3 nêÂ­veis com dificuldade crescente</li>
                <li>Inimigos com IA bêÂ¡sica</li>
                <li>Sistema de pontuaêÂ§êÂ£o</li>
                <li>Power-ups e coletêÂ¡veis</li>
                <li>Menu e tela de game over</li>
            </ul>

            <h4>Comando Sugerido:</h4>
            <code>/bmad-master Crie jogo de plataforma 2D com Phaser.js, 3 nêÂ­veis, inimigos e power-ups</code>

            <h4>Tempo Estimado:</h4>
            <p>AutomêÂ¡tico: 2-3 dias</p>

            <h3>ê°Å¸Ââ  Desafios Extras</h3>

            <h4>ê°Å¸âÂ¥ Desafio Speed Run</h4>
            <p>Crie um CRUD completo em menos de 30 minutos usando modo automêÂ¡tico:</p>
            <code>/bmad-master auto Crie CRUD de produtos com React, Node.js e PostgreSQL</code>

            <h4>ê°Å¸âÂ¥ Desafio Quality</h4>
            <p>Crie projeto com 100% de cobertura de testes:</p>
            <code>As qa, garanta que todos os componentes e endpoints tenham testes unitêÂ¡rios e de integraêÂ§êÂ£o</code>

            <h4>ê°Å¸âÂ¥ Desafio Microservices</h4>
            <p>Arquitetura de microserviêÂ§os com 3+ serviêÂ§os:</p>
            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>
            <code>As architect, crie arquitetura de microserviêÂ§os com API Gateway, Auth Service, Product Service e Order Service</code>

            <h3>ê°Å¸âÅ  CritêÂ©rios de AvaliaêÂ§êÂ£o</h3>

            <p>Para cada projeto, avalie:</p>
            <ul>
                <li>ê¢Åâ¦ Funcionalidades implementadas vs requisitos</li>
                <li>ê¢Åâ¦ Qualidade do cêÂ³digo (linting, patterns)</li>
                <li>ê¢Åâ¦ Cobertura de testes</li>
                <li>ê¢Åâ¦ DocumentaêÂ§êÂ£o gerada</li>
                <li>ê¢Åâ¦ Performance e otimizaêÂ§êÂ£o</li>
                <li>ê¢Åâ¦ UX e design</li>
            </ul>

            <h3>ê°Å¸âÂ¡ Dicas para Projetos AvanêÂ§ados</h3>

            <ul>
                <li>ê°Å¸âÂ Sempre comece com PRD detalhado</li>
                <li>ê°Å¸Ââê¯Â¸Â NêÂ£o pule arquitetura em projetos complexos</li>
                <li>ê°Å¸Â§Âª Teste continuamente, nêÂ£o sêÂ³ no final</li>
                <li>ê°Å¸âÂ¦ Use expansêÂµes para projetos especializados</li>
                <li>ê°Å¸ââ Itere: VersêÂ£o 1 simples, depois melhorias</li>
                <li>ê°Å¸âÂ¾ Versione tudo no Git</li>
            </ul>

            <p><strong>ParabêÂ©ns!</strong> VocêÂª estêÂ¡ pronto para projetos profissionais complexos! ê°Å¸Å½â°</p>
        `
    },
    {
        id: 15,
        title: "PrêÂ³ximos Passos",
        content: `
            <h2>PrêÂ³ximos Passos e Comunidade</h2>
            <p>VocêÂª completou o curso! Veja o que fazer agora e como continuar evoluindo.</p>

            <h3>ê°Å¸Å½â O Que VocêÂª Aprendeu</h3>

            <p>ParabêÂ©ns! VocêÂª agora domina:</p>

            <ul>
                <li>ê¢Åâ¦ Fundamentos do BMad Method</li>
                <li>ê¢Åâ¦ InstalaêÂ§êÂ£o e configuraêÂ§êÂ£o completa</li>
                <li>ê¢Åâ¦ Todos os agentes e suas especialidades</li>
                <li>ê¢Åâ¦ Comandos bêÂ¡sicos e avanêÂ§ados</li>
                <li>ê¢Åâ¦ Arquivos de configuraêÂ§êÂ£o</li>
                <li>ê¢Åâ¦ CriaêÂ§êÂ£o de projetos (manual, semi-automêÂ¡tico, automêÂ¡tico)</li>
                <li>ê¢Åâ¦ AtualizaêÂ§êÂ£o e migraêÂ§êÂ£o</li>
                <li>ê¢Åâ¦ SoluêÂ§êÂ£o de problemas comuns</li>
                <li>ê¢Åâ¦ Boas prêÂ¡ticas de produtividade</li>
                <li>ê¢Åâ¦ Projetos avanêÂ§ados e complexos</li>
            </ul>

            <h3>ê°Å¸Å½Â¯ PrêÂ³ximos Passos PrêÂ¡ticos</h3>

            <h4>1. Crie Seu Primeiro Projeto Real</h4>
            <p>Escolha um problema real da sua profissêÂ£o e crie uma soluêÂ§êÂ£o:</p>
            <ul>
                <li>Advogados: Sistema de gestêÂ£o de processos</li>
                <li>MêÂ©dicos: ProntuêÂ¡rio eletrêÂ´nico</li>
                <li>Professores: Plataforma de exercêÂ­cios</li>
                <li>Empreendedores: MVP do seu produto</li>
            </ul>

            <h4>2. Explore ExpansêÂµes Especializadas</h4>
            <code>npx bmad-method list:expansions</code>
            <p>Instale expansêÂµes relevantes para sua êÂ¡rea:</p>
            <ul>
                <li>Game Dev ê¢â â <code>bmad-2d-phaser-game-dev</code></li>
                <li>DevOps ê¢â â <code>bmad-infrastructure-devops</code></li>
                <li>Mobile ê¢â â <code>bmad-mobile-dev</code></li>
                <li>Escrita ê¢â â <code>bmad-creative-writing</code></li>
            </ul>

            <h4>3. Contribua com a Comunidade</h4>
            <p>Compartilhe seus projetos e aprendizados:</p>
            <ul>
                <li>GitHub: FaêÂ§a fork de projetos BMad</li>
                <li>Issues: Reporte bugs e sugira melhorias</li>
                <li>Discussions: Tire dêÂºvidas e ajude outros</li>
                <li>Pull Requests: Contribua com cêÂ³digo</li>
            </ul>

            <h3>ê°Å¸ââ Links Importantes</h3>

            <h4>RepositêÂ³rios Oficiais:</h4>
            <ul>
                <li>ê°Å¸ÂÂ« <strong>ARCKHê BMad Academy:</strong><br>
                    <code>https://github.com/linnoff88-dev/BMAD-Academy</code><br>
                    <em>Este projeto (academy)</em>
                </li>
                <li>ê°Å¸Å¡â¬ <strong>BMad Method (oficial):</strong><br>
                    <code>https://github.com/bmad-method/bmad-method</code><br>
                    <em>Framework principal</em>
                </li>
            </ul>

            <h4>DocumentaêÂ§êÂ£o:</h4>
            <ul>
                <li>ê°Å¸âÅ¡ Docs oficiais do BMad</li>
                <li>ê°Å¸ââ Exemplos e templates</li>
                <li>ê°Å¸Å½Â¥ VêÂ­deos tutoriais (em breve)</li>
            </ul>

            <h3>ê°Å¸âÂ¬ Comunidade e Suporte</h3>

            <h4>Onde Pedir Ajuda:</h4>
            <ul>
                <li>ê°Å¸âÂ¬ <strong>Chatbot desta Academy</strong> - Perguntas rêÂ¡pidas</li>
                <li>ê°Å¸Ââº <strong>GitHub Issues</strong> - Bugs e problemas têÂ©cnicos</li>
                <li>ê°Å¸âÂ¡ <strong>GitHub Discussions</strong> - Ideias e dêÂºvidas gerais</li>
                <li>ê°Å¸âÂ§ <strong>Email:</strong> linnoff88-dev@gmail.com</li>
            </ul>

            <h4>Como Contribuir:</h4>

            <p><strong>1. Melhorias nesta Academy:</strong></p>
            <ol>
                <li>Fork: <code>https://github.com/linnoff88-dev/BMAD-Academy</code></li>
                <li>Crie branch: <code>git checkout -b feature/minha-melhoria</code></li>
                <li>FaêÂ§a mudanêÂ§as</li>
                <li>Commit: <code>git commit -m "feat: adiciona nova liêÂ§êÂ£o"</code></li>
                <li>Push: <code>git push origin feature/minha-melhoria</code></li>
                <li>Abra Pull Request</li>
            </ol>

            <p><strong>2. SugestêÂµes de ContribuiêÂ§êÂ£o:</strong></p>
            <ul>
                <li>ê°Å¸âÂ Novas liêÂ§êÂµes ou conteêÂºdo</li>
                <li>ê°Å¸Å½Â® Mais desafios no Playground</li>
                <li>ê°Å¸ÅÂ TraduêÂ§êÂ£o para outros idiomas</li>
                <li>ê°Å¸Ââº CorreêÂ§êÂ£o de bugs</li>
                <li>ê°Å¸Å½Â¨ Melhorias de design</li>
                <li>ê°Å¸âÅ¡ Exemplos de projetos</li>
            </ul>

            <h3>ê°Å¸Å½Â¨ Personalize Sua ExperiêÂªncia</h3>

            <h4>Crie Seus PrêÂ³prios Agentes:</h4>
            <p>Agentes customizados para necessidades especêÂ­ficas da sua profissêÂ£o</p>

            <h4>Templates de Comandos:</h4>
            <p>Crie biblioteca de comandos que funcionam bem para vocêÂª</p>

            <h4>Workflows Personalizados:</h4>
            <p>Adapte fluxos de trabalho para sua rotina</p>

            <h3>ê°Å¸âË Continue Evoluindo</h3>

            <h4>Metas de Curto Prazo (1-2 semanas):</h4>
            <ul>
                <li>ê¢Åâ¦ Completar 1 projeto pequeno</li>
                <li>ê¢Åâ¦ Experimentar modo semi-automêÂ¡tico</li>
                <li>ê¢Åâ¦ Instalar 1 expansêÂ£o</li>
            </ul>

            <h4>Metas de MêÂ©dio Prazo (1-2 meses):</h4>
            <ul>
                <li>ê¢Åâ¦ Completar 3 projetos mêÂ©dios</li>
                <li>ê¢Åâ¦ Dominar modo automêÂ¡tico</li>
                <li>ê¢Åâ¦ Contribuir com 1 issue/PR</li>
            </ul>

            <h4>Metas de Longo Prazo (3-6 meses):</h4>
            <ul>
                <li>ê¢Åâ¦ Completar 1 projeto profissional complexo</li>
                <li>ê¢Åâ¦ Criar agentes customizados</li>
                <li>ê¢Åâ¦ Ajudar outros na comunidade</li>
            </ul>

            <h3>ê°Å¸Ââ  Certificado de ConclusêÂ£o</h3>

            <p>VocêÂª completou todas as 15 liêÂ§êÂµes da <strong>ARCKHê BMad Academy</strong>!</p>

            <p>ParabêÂ©ns por dominar o BMad Method. VocêÂª agora pode:</p>
            <ul>
                <li>ê°Å¸Å¡â¬ Criar projetos complexos sem ser programador</li>
                <li>ê¢Å¡Â¡ Automatizar tarefas com agentes de IA</li>
                <li>ê°Å¸Å½Â¯ Resolver problemas reais da sua profissêÂ£o</li>
                <li>ê°Å¸Â¤Â Contribuir com a comunidade BMad</li>
            </ul>

            <p><strong>Compartilhe sua conquista:</strong></p>
            <p>#BMadMethod #ARCKHêBMadAcademy #IAGenerativa #AutomacaoInteligente</p>

            <h3>ê°Å¸âÂ¡ Mensagem Final</h3>

            <p>O BMad Method êÂ© uma ferramenta poderosa que democratiza a criaêÂ§êÂ£o de soluêÂ§êÂµes tecnolêÂ³gicas. VocêÂª nêÂ£o precisa ser programador para criar sistemas incrêÂ­veis - vocêÂª sêÂ³ precisa ter boas ideias e saber comunicêÂ¡-las aos agentes.</p>

            <p><strong>Lembre-se:</strong></p>
            <ul>
                <li>ê°Å¸Å½Â¯ Comece pequeno, pense grande</li>
                <li>ê°Å¸ââ Pratique regularmente</li>
                <li>ê°Å¸âÅ¡ Continue aprendendo</li>
                <li>ê°Å¸Â¤Â Ajude outros a aprender</li>
                <li>ê°Å¸Å¡â¬ Transforme suas ideias em realidade</li>
            </ul>

            <p style="text-align: center; font-size: 1.5rem; margin: 40px 0;">
                <strong>Boa sorte na sua jornada com BMad! ê°Å¸Å½â°</strong>
            </p>

            <p style="text-align: center;">
                <em>Desenvolvido com ê°Å¸Â¤â por ARCKHê usando BMad Method e Claude Code</em>
            </p>

            <hr style="margin: 40px 0; border-color: var(--border);">

            <p style="text-align: center;">
                <strong>Gostou da academy? DêÂª uma ê¢Â­Â no GitHub!</strong><br>
                <code>https://github.com/linnoff88-dev/BMAD-Academy</code>
            </p>
        `
    },
    {
        id: 16,
        title: "QA Test Architect (AvanêÂ§ado)",
        content: `
            <h2>QA como Test Architect Profissional</h2>

            <p>O agente QA do BMad nêÂ£o êÂ© apenas um "revisor de cêÂ³digo". Ele êÂ© um <strong>Test Architect</strong> profissional com comandos avanêÂ§ados para garantir qualidade em todas as fases do desenvolvimento.</p>

            <h3>ê°Å¸Å½Â¯ Os 6 Comandos do Test Architect</h3>

            <h4>1. *risk - AnêÂ¡lise de Riscos</h4>
            <p><strong>Quando:</strong> Antes de codificar</p>
            <code>@qa *risk docs/stories/epic1.story1-login.md</code>

            <h4>2. *design - Test Design</h4>
            <p><strong>Quando:</strong> Depois de *risk</p>
            <code>@qa *design docs/stories/epic1.story1-login.md</code>

            <h4>3. *trace - Requirements Tracing</h4>
            <p><strong>Quando:</strong> Durante desenvolvimento</p>
            <code>@qa *trace docs/stories/epic1.story1-login.md</code>

            <h4>4. *nfr - Non-Functional Requirements</h4>
            <p><strong>Quando:</strong> Durante ou apêÂ³s implementaêÂ§êÂ£o</p>
            <code>@qa *nfr docs/stories/epic1.story1-login.md</code>

            <h4>5. *review - Comprehensive Review</h4>
            <p><strong>Quando:</strong> Story marcada "Ready for Review"</p>
            <code>@qa *review docs/stories/epic1.story1-login.md</code>

            <h4>6. *gate - Quality Gate</h4>
            <p><strong>Quando:</strong> ApêÂ³s *review e correêÂ§êÂµes</p>
            <code>@qa *gate docs/stories/epic1.story1-login.md</code>

            <p><strong>PrêÂ³xima liêÂ§êÂ£o:</strong> Workflow Completo do BMad</p>
        `
    },
    {
        id: 17,
        title: "Workflow Completo BMad",
        content: `
            <h2>Workflow Completo: Planning ê¢â â Development ê¢â â Deploy</h2>

            <p>Esta liêÂ§êÂ£o ensina o <strong>workflow profissional completo</strong> do BMad Method.</p>

            <h3>ê°Å¸Å½Â¯ As 3 Fases</h3>

            <div style="background: var(--bg-card); padding: 20px; border-radius: 8px; margin: 20px 0;">
                <ol>
                    <li><strong>PLANNING</strong> - Criar PRD e Architecture (Web UI)</li>
                    <li><strong>SHARDING</strong> - Dividir docs em êÂ©picos e stories (IDE)</li>
                    <li><strong>DEVELOPMENT</strong> - Implementar story por story (IDE)</li>
                </ol>
            </div>

            <h3>ê°Å¸ââ¹ FASE 1: Planning</h3>

            <p><strong>Passo 1: Analyst</strong></p>
            <code>@analyst faêÂ§a anêÂ¡lise competitiva de apps de delivery</code>

            <p><strong>Passo 2: PM</strong></p>
            <code>@pm crie um PRD completo para app de delivery</code>

            <p><strong>Passo 3: Architect</strong></p>
            <code>@architect defina arquitetura para o app</code>

            <p><strong>Passo 4: UX-Expert (Opcional)</strong></p>
            <code>@ux-expert crie front-end spec com wireframes</code>

            <p><strong>Passo 5: PO</strong></p>
            <code>@po valide o PRD contra a arquitetura</code>

            <h3>ê°Å¸âÂ¦ FASE 2: Sharding</h3>

            <p><strong>Passo 6: PO - Shard PRD</strong></p>
            <code>@po shard o PRD em êÂ©picos e salve em docs/epics/</code>

            <p><strong>Passo 7: PO - Shard Architecture</strong></p>
            <code>@po shard a arquitetura por mêÂ³dulos</code>

            <h3>ê°Å¸Å¡â¬ FASE 3: Development Loop</h3>

            <p><strong>Repetir para cada story:</strong></p>

            <ol>
                <li><code>@sm draft next story from epic</code></li>
                <li><code>@qa *risk story</code> (opcional)</li>
                <li><code>@qa *design story</code></li>
                <li><code>@dev *develop-story</code></li>
                <li><code>@qa *review story</code></li>
                <li>Commit e prêÂ³xima story!</li>
            </ol>

            <p style="text-align: center; font-size: 1.5rem; margin: 40px 0;">
                <strong>ParabêÂ©ns! VocêÂª completou o BMAD Academy! ê°Å¸Å½â°</strong>
            </p>

            <p><strong>PrêÂ³ximos passos:</strong></p>
            <ul>
                <li>ê°Å¸Å¡â¬ Crie seu primeiro projeto real com BMad</li>
                <li>ê°Å¸âÂ¬ Discord: <code>discord.gg/gk8jAdXWmj</code></li>
                <li>ê°Å¸âÅ¡ User Guide: <code>github.com/bmad-code-org/BMAD-METHOD</code></li>
                <li>ê¢Â­Â Estrela no GitHub: BMAD Academy</li>
            </ul>
        `
    }
];
