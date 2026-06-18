# Especificação de Requisitos de Software (SRS)
**Projeto:** Plataforma RH
**Versão:** 1.0
**Data:** 2 de Junho de 2026

## 1. Introdução
### 1.1 Propósito
Este documento descreve os requisitos funcionais e não funcionais para o Módulo de Currículos e Vagas da Plataforma de RH. O objetivo deste módulo é permitir que candidatos gerenciem suas informações profissionais e que a administração visualize esses dados.

### 1.2 Escopo
O sistema compreende o desenvolvimento de uma interface frontend em Angular integrada a um backend simulado (json-server). As funcionalidades incluem o CRUD completo de currículos, vinculação de dados por ID de usuário e interface administrativa para gestão.

---

## 2. Descrição Geral


## 3. Requistos do Sistema 

### 3.1 Requistos Funcionais (RF)

### 3.2 Requsitos Não-Funcionais (RNF)

## 4. Interface de Dados e Modelagem do Sistema

### 4.1 Diagramas

#### 4.1.1 Diagrama de Uso

#### 4.1.2 Diagrama de Classe

#### 4.1.1 Diagrama de Fluxo

## 5. Critérios de Aceitação

1.  **Operação CRUD:** É possível criar, ler, atualizar e excluir um registro no `db.json` através da interface?
2.  **Navegação:** As rotas configuradas levam aos componentes corretos sem erros de console?
3.  **Feedback:** O usuário recebe uma confirmação (ex: MatSnackBar) ao salvar um currículo?
4.  **Consistência:** Os dados exibidos na listagem correspondem exatamente ao que está no backend simulado?

## 6. Configuração do Ambiente

## 7. Instalação e Execução

Pré-requisitos: `node` (>=16) e `npm` instalados.

- Instalar dependências:

```bash
npm install
```

- Rodar backend (API simulada com `json-server`) na porta 3005:

```bash
npx json-server --watch backend/db.json --port 3005
```

- Rodar aplicação em modo desenvolvimento (frontend):

```bash
npm start
# abre em http://localhost:4200 por padrão
```

## 8. Build e Produção

- Gerar build (client + server):

```bash
npm run build
```

- Os artefatos ficam em `dist/sa-rh-completo`.

## 9. Backend (API simulada)

- Arquivo principal de dados: `backend/db.json`.
- Endpoints expostos pelo `json-server` (exemplos):
	- `GET /vagas`
	- `GET /curriculos`
	- `POST /curriculos`
	- `PUT /curriculos/:id`
	- `DELETE /curriculos/:id`
- A porta usada pelo backend de desenvolvimento é `3005`.

## 10. Notas sobre SSR e rotas

- O projeto contém configuração para SSR (server-side rendering). Para evitar um problema com rotas paramétricas durante prerender, a rota curinga foi configurada com `RenderMode.Server` (render no servidor) — isso evita erros ao gerar rotas estáticas.

## 11. Estilos e SCSS

- Variáveis globais e estilos principais encontram-se em `src/styles.scss` (cores, tokens e `.card`, `.btn`, etc.).
- Substituímos funções Sass deprecadas `darken()` por `color.adjust()` e, quando necessário, adicionamos `@use "sass:color";` nos arquivos component-scoped.
- Caso queira consolidar variáveis, crie um arquivo `_variables.scss` em `src/styles` e importe nos componentes.

## 12. Troubleshooting (erros comuns e correções aplicadas)

- Avisos `rootDir`: adicionamos `rootDir: ./src` em `tsconfig.app.json` e `tsconfig.spec.json` para eliminar warnings do TypeScript.
- CSS não carregando: verifique `styleUrls` (plural) no decorator do componente — havia `styleUrl` incorreto em alguns componentes.
- Arquivos com nomes errados (ex.: `curriculo-deital.html`, `.sccs`) foram renomeados para os nomes corretos.
- Erro Sass `There is no module with the namespace "color"`: resolvido adicionando `@use "sass:color";` antes de usar `color.adjust()`.
- Erro com `@extend .card`: removido o `@extend` e aplicadas as propriedades diretamente para compatibilidade com o build.

## 13. Como contribuir

- Fork e crie uma branch para sua alteração: `git checkout -b feat/minha-melhoria`.
- Rodar testes e linter (se aplicável) antes de submeter PR.
- Descrever no PR o que foi alterado e os passos para testar localmente.

## 14. Contato

- Dúvidas e reportes: abra uma issue neste repositório indicando passos para reproduzir e o log de erro.



