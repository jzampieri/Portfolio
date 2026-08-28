# Portfólio — Julio Zampieri

Portfólio de engenheiro de software back-end. **Sem fotografia, sem vídeo, por
decisão de projeto** — o que carrega a página é tipografia em escala, dado
estruturado, régua e a troca de superfície.

## 🧭 Estrutura

Sete painéis, **cada um exatamente uma tela** (`height: 100svh`), alternando
superfície como divisor. Um gesto de scroll avança exatamente um painel.

| Painel | Superfície | O que é |
|---|---|---|
| Hero | branco | Nome em tela cheia + cargo |
| Sobre | parchment | Abertura, dois parágrafos, ficha de fatos no pé |
| Resultados | quase-preto | Três números em escala display, contados na entrada |
| Trabalho | branco | Lista de empresas à esquerda, detalhe à direita |
| Stack | parchment | Tabela de especificação em duas colunas |
| Formação | quase-preto | Certificações + curso no pé |
| Contato | preto | E-mail em escala display + legal no pé |

Todo painel usa a mesma moldura (`Panel.tsx`): cabeça no topo, corpo centrado
opticamente, pé no rodapé da tela. A altura é gasta em ar, não em empilhamento.

### Paginação

`usePager.ts` usa o **Observer** do GSAP para engolir wheel e touch, e anima a
janela com `ScrollToPlugin`. Um gesto = um painel, com trava até a tween
terminar. Teclado (setas, PageUp/Down, Home/End) e a régua lateral chamam o
mesmo `goTo`.

O Lenis foi removido: com paginação, a inércia dele brigava com o snap.

## 🎨 Design system

Tokens vindos de [`DESIGN.md`](./DESIGN.md), declarados no `@theme` do Tailwind
v4 em `src/index.css`:

- **Um único acento** — Action Blue `#0066cc` (`#2997ff` sobre escuro).
- **Superfícies alternadas** (`canvas` → `parchment` → `tile-1/2` → `black`).
  A troca de cor é o divisor; não existe borda decorativa.
- **Tipografia** — SF Pro no macOS/iOS, Inter como substituto. Display com
  tracking negativo, corpo a 17px.
- Raio: `pill` para ação, `sm` para utilitário, `none` para tile full-bleed.

## 📁 Arquivos

```
src/
├── components/
│   ├── Panel.tsx     → moldura comum (cabeça / corpo / pé, uma tela)
│   ├── Nav.tsx       → barra + menu hambúrguer em tela cheia
│   ├── Hero.tsx      → masthead de uma tela
│   ├── Numbers.tsx   → métricas com contagem no scroll
│   ├── Work.tsx      → abas de empresa, detalhe trocado no lugar
│   ├── Counter.tsx   → numeral animado, com separador por locale
│   └── CompanyMark.tsx → logo da empresa, com fallback tipográfico
├── content/site.ts   → TODO o conteúdo, PT e EN
├── hooks/usePager.ts → paginação por gesto, teclado e âncora
├── lib/gsap.ts       → plugins, defaults e reduced-motion
├── lib/useMagnetic.ts→ hover magnético
└── index.css         → tokens + escala tipográfica + primitivas
```

Para editar textos, cargos, stack ou certificações, mexa **apenas** em
`src/content/site.ts`.

## 🏢 Logos

`public/logos/*.webp`, 192×192, tratados como tiles de marca: preenchem a
moldura e o raio faz o recorte. Sem `logo` no cargo, o card cai no monograma de
`initials` — mesmo enquadramento, lista não desalinha.

## 🎬 Animação

GSAP 3 + ScrollTrigger + Observer + ScrollToPlugin. Tudo respeita
`prefers-reduced-motion`: o helper `settleIfReduced()` mata o ScrollTrigger e
leva a timeline ao estado final, e a paginação vira salto instantâneo.

**Tipografia grande responde a `vh` além de `vw`** (`min(7.5vw, 10.5vh)`) —
sem isso o conteúdo estoura a altura fixa em telas baixas.

## 🚀 Rodando local

```bash
npm install
npm run dev
```

```bash
npm run build
```

> Requer Node.js 18+.
