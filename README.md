
# Movie Lib

Projeto desenvolvido para a disciplina de **Laboratório de Desenvolvimento Web** da FATEC, sob orientação do professor **Danilo Vieira**.

## Descrição

Aplicação web para gerenciamento e consulta de filmes utilizando a API TMDB (The Movie Database). Permite buscar, filtrar e explorar informações detalhadas sobre filmes de forma interativa e responsiva.

## Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **API:** TMDB (The Movie Database) v3
- **Arquitetura:** REST
- **Versionamento:** Git/GitHub

## Funcionalidades

- 🔍 Busca avançada de filmes por título
- 📊 Filtros por gênero, ano e classificação
- 📱 Interface responsiva e acessível
- 🎬 Exibição completa de detalhes dos filmes
- ⭐ Avaliações e recomendações
- ✨ [Adicione aqui as novas funcionalidades implementadas]

## Instalação e Configuração

1. Clone o repositório:
    ```bash
    git clone <seu-repositorio>
    ```
2. Obtenha uma chave de API em [tmdb.org](https://www.themoviedb.org/settings/api)
3. Crie o arquivo `.env`:
    ```env
    VITE_API_KEY="sua_chave"
    VITE_API=https://api.themoviedb.org/3/movie/
    VITE_SEARCH=https://api.themoviedb.org/3/search/movie/
    VITE_IMG=https://image.tmdb.org/t/p/w500/
    ```
4. Abra `index.html` no navegador

## Estrutura do Projeto

```
movie_lib/
├── index.html
├── style.css
├── .env
├── config.js (não incluído - criar com sua chave API)
└── assets/
```

## Objetivos Educacionais

- Praticar consumo de APIs REST
- Desenvolver interfaces responsivas
- Implementar buscas e filtros dinâmicos
- Aplicar conceitos de DOM manipulation
- Tratamento de requisições assíncronas

## Atualizações Recentes

- [Descreva as mudanças implementadas]
- [Data ou versão das atualizações]

## Autor

Desenvolvido como atividade avaliativa de LabWeb - FATEC

---

*Professor: Danilo Vieira*

