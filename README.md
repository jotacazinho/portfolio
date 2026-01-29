# 🎨 Portfólio - Calebi José Batista (jotacazinho)

Portfólio moderno e minimalista desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Estrutura dos Arquivos

```
portfolio/
├── index.html    # Estrutura HTML do site
├── style.css     # Estilos e animações
├── script.js     # Funcionalidades interativas
└── README.md     # Este arquivo
```

## 🚀 Como Usar

1. **Abrir o portfólio**: Basta abrir o arquivo `index.html` em qualquer navegador moderno
2. **Sem dependências**: O projeto não requer instalação de bibliotecas ou frameworks
3. **Totalmente responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktop

## ✏️ Personalização

### 1. Atualizar Links de Redes Sociais

No arquivo `index.html`, procure e substitua os links do LinkedIn e GitHub em **três locais**:

**Na seção Hero (linha ~47):**
```html
<a href="https://linkedin.com/in/SEU-PERFIL" target="_blank" ...>
<a href="https://github.com/SEU-USUARIO" target="_blank" ...>
```

**Na seção Contact (linha ~215):**
```html
<a href="https://linkedin.com/in/SEU-PERFIL" target="_blank" ...>
<a href="https://github.com/SEU-USUARIO" target="_blank" ...>
```

### 2. Adicionar Seus Projetos

Localize a seção de projetos no `index.html` (aproximadamente linha 120) e edite os cards:

```html
<article class="project-card">
    <div class="project-image">
        <!-- Aqui você pode adicionar uma imagem real do projeto -->
        <img src="caminho/para/sua-imagem.jpg" alt="Nome do Projeto">
    </div>
    <div class="project-content">
        <h3 class="project-title">Nome do Seu Projeto</h3>
        <p class="project-description">
            Descrição detalhada do que o projeto faz e quais tecnologias foram utilizadas.
        </p>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
        </div>
        <div class="project-links">
            <a href="https://seu-projeto.com" target="_blank" class="project-link">
                <!-- SVG do ícone -->
                Ver Demo
            </a>
            <a href="https://github.com/seu-usuario/seu-projeto" target="_blank" class="project-link">
                <!-- SVG do ícone -->
                Código
            </a>
        </div>
    </div>
</article>
```

**Dica**: Para adicionar imagens de preview dos projetos, substitua a div `project-placeholder` por:

```html
<div class="project-image">
    <img src="imagens/projeto1.jpg" alt="Nome do Projeto" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### 3. Adicionar Mais Projetos

Para adicionar um novo projeto, copie todo o bloco `<article class="project-card">...</article>` e cole logo após o último projeto. Exemplo:

```html
<!-- Projeto existente -->
<article class="project-card">
    ...
</article>

<!-- NOVO PROJETO - cole aqui -->
<article class="project-card">
    <div class="project-image">
        <img src="imagens/novo-projeto.jpg" alt="Novo Projeto">
    </div>
    <div class="project-content">
        <h3 class="project-title">Meu Novo Projeto Incrível</h3>
        <p class="project-description">
            Sistema de gerenciamento desenvolvido com as melhores práticas de desenvolvimento.
        </p>
        <div class="project-tags">
            <span class="tag">Vue.js</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Firebase</span>
        </div>
        <div class="project-links">
            <a href="https://demo.com" target="_blank" class="project-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Ver Demo
            </a>
            <a href="https://github.com/..." target="_blank" class="project-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Código
            </a>
        </div>
    </div>
</article>
```

### 4. Personalizar Cores

No arquivo `style.css`, você pode alterar as cores principais modificando as variáveis CSS no início do arquivo:

```css
:root {
    --primary: #6366f1;        /* Cor de destaque (azul/roxo) */
    --primary-dark: #4f46e5;   /* Cor de destaque escura */
    --secondary: #f8fafc;      /* Cor secundária (texto claro) */
    --text: #e2e8f0;           /* Cor do texto principal */
    --text-light: #94a3b8;     /* Cor do texto secundário */
    --background: #0f172a;     /* Fundo principal (preto/azul escuro) */
    --background-alt: #1e293b; /* Fundo alternativo */
}
```

### 5. Adicionar Mais Habilidades

No `index.html`, seção "Sobre Mim", localize o `skills-grid` e adicione:

```html
<div class="skills-grid">
    <div class="skill-item">HTML5</div>
    <div class="skill-item">CSS3</div>
    <div class="skill-item">JavaScript</div>
    <div class="skill-item">Git</div>
    <!-- Adicione mais aqui -->
    <div class="skill-item">Bootstrap</div>
    <div class="skill-item">Figma</div>
</div>
```

## 🎯 Recursos Incluídos

- ✅ Design moderno e minimalista
- ✅ Tema escuro (preto) elegante
- ✅ Animações sutis e suaves
- ✅ Totalmente responsivo
- ✅ Menu mobile funcional
- ✅ Scroll suave entre seções
- ✅ Efeitos de hover elegantes
- ✅ Navegação ativa baseada em scroll
- ✅ Otimizado para performance
- ✅ Acessibilidade (ARIA labels)
- ✅ Easter egg (Konami Code - tente!)

## 🎨 Estrutura de Imagens (Opcional)

Se quiser adicionar imagens, crie uma pasta `imagens/` na raiz do projeto:

```
portfolio/
├── imagens/
│   ├── projeto1.jpg
│   ├── projeto2.jpg
│   └── projeto3.jpg
├── index.html
├── style.css
└── script.js
```

## 📱 Redes Sociais

Certifique-se de atualizar seus links:
- **LinkedIn**: https://linkedin.com/in/seu-perfil
- **GitHub**: https://github.com/seu-usuario

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 moderno (Grid, Flexbox, Variáveis CSS, Animações)
- JavaScript ES6+ (Intersection Observer, Event Listeners)
- Google Fonts (Inter)
- Tema escuro moderno

## 💡 Dicas Adicionais

1. **SEO**: Adicione meta tags no `<head>` para melhorar o SEO
2. **Performance**: Otimize as imagens antes de adicionar (use TinyPNG ou similar)
3. **Analytics**: Adicione Google Analytics se quiser rastrear visitantes
4. **Hospedagem Gratuita**: Use GitHub Pages, Netlify ou Vercel

## 🚀 Deploy

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Seu site estará em: `https://seu-usuario.github.io/nome-do-repo`

### Netlify

1. Arraste a pasta do projeto para netlify.com/drop
2. Pronto! Seu site está online

## 📝 Licença

Sinta-se livre para usar este template para seu portfólio pessoal!

---

**Desenvolvido por Calebi José Batista (jotacazinho)**
