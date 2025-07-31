# 🚀 Portfólio Leonardo Garbuio

Um portfólio profissional moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript vanilla, apresentando as habilidades e projetos de Leonardo Garbuio como Desenvolvedor Full-Stack.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com as cores da empresa (amarelo e preto)
- **Totalmente Responsivo**: Otimizado para todos os dispositivos (desktop, tablet, mobile)
- **Animações Suaves**: Efeitos de scroll e transições elegantes
- **Performance Otimizada**: Carregamento rápido e experiência fluida
- **Acessibilidade**: Navegação por teclado e indicadores de foco
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Variáveis CSS (Custom Properties)
  - Flexbox e Grid Layout
  - Animações e transições
  - Media Queries para responsividade
- **JavaScript Vanilla**:
  - Navegação suave
  - Animações de scroll
  - Validação de formulários
  - Sistema de notificações
  - Menu mobile interativo

## 📁 Estrutura do Projeto

```
meu_Site/
├── index.html              # Página principal
├── css/
│   ├── style.css           # Estilos principais
│   └── style2.css          # Estilos adicionais
├── javascript/
│   └── main.js             # Funcionalidades JavaScript
├── imagens/
│   └── GitHub-Simbolo.png  # Imagem do perfil
└── README.md               # Documentação
```

## 🎨 Design System

### Cores
- **Primária**: `#FFD700` (Amarelo)
- **Primária Escura**: `#FFC000` (Amarelo escuro)
- **Secundária**: `#1a1a1a` (Preto)
- **Texto Primário**: `#333333`
- **Texto Secundário**: `#666666`
- **Fundo Primário**: `#ffffff`
- **Fundo Secundário**: `#f8f9fa`

### Tipografia
- **Títulos**: Poppins (Google Fonts)
- **Corpo**: Inter (Google Fonts)
- **Ícones**: Font Awesome 6.4.0

## 🚀 Funcionalidades

### Navegação
- Menu fixo com efeito de scroll
- Navegação suave entre seções
- Menu hambúrguer para mobile
- Indicador de seção ativa

### Seções
1. **Hero**: Apresentação principal com efeito de digitação
2. **Sobre**: Informações pessoais e estatísticas
3. **Habilidades**: Barras de progresso animadas
4. **Projetos**: Cards interativos com hover effects
5. **Contato**: Formulário com validação

### Interatividade
- Animações AOS (Animate On Scroll)
- Efeitos de hover em cards e botões
- Sistema de notificações
- Botão "Voltar ao topo"
- Indicador de progresso de scroll

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile Pequeno**: < 480px

## ⚡ Performance

- **Lazy Loading**: Para imagens
- **Debouncing**: Em eventos de scroll
- **CSS Otimizado**: Variáveis e reutilização
- **JavaScript Modular**: Código organizado e eficiente

## 🔧 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd meu_Site
   ```

2. **Abra o arquivo**:
   - Abra `index.html` em qualquer navegador moderno
   - Ou use um servidor local para desenvolvimento

3. **Personalização**:
   - Edite as informações em `index.html`
   - Modifique as cores em `css/style.css` (variáveis CSS)
   - Atualize as funcionalidades em `javascript/main.js`

## 📝 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --primary-color: #FFD700;    /* Sua cor primária */
    --primary-dark: #FFC000;     /* Sua cor primária escura */
    --secondary-color: #1a1a1a;  /* Sua cor secundária */
    /* ... outras variáveis */
}
```

### Adicionar Projetos
Edite a seção de projetos em `index.html`:

```html
<div class="project-card" data-aos="fade-up" data-aos-delay="100">
    <div class="project-image">
        <!-- Imagem do projeto -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição do projeto</p>
        <div class="project-tech">
            <span class="tech-tag">Tecnologia</span>
        </div>
    </div>
</div>
```

### Atualizar Informações de Contato
Modifique a seção de contato em `index.html`:

```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-envelope"></i>
    </div>
    <div class="contact-details">
        <h4>E-mail</h4>
        <p>seu-email@exemplo.com</p>
    </div>
</div>
```

## 🌐 Deploy

### GitHub Pages
1. Faça push do código para o GitHub
2. Vá em Settings > Pages
3. Selecione a branch main
4. O site estará disponível em `https://seu-usuario.github.io/meu_Site`

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build settings
3. Deploy automático a cada push

### Vercel
1. Conecte seu repositório ao Vercel
2. Configure o projeto
3. Deploy automático

## 🔍 SEO

O site inclui:
- Meta tags otimizadas
- Estrutura semântica HTML5
- Alt text em imagens
- URLs amigáveis
- Schema markup (pode ser adicionado)

## 📊 Analytics

Para adicionar Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**Leonardo Garbuio**
- 📧 Email: leonardogarbuiocavalheiro@gmail.com
- 📱 Telefone: (42) 99154-6824
- 🌐 GitHub: [@LeonardoGarbuio](https://github.com/LeonardoGarbuio)
- 💼 LinkedIn: [leonardogarbuio](https://linkedin.com/in/leonardogarbuio)

## 🙏 Agradecimentos

- [Font Awesome](https://fontawesome.com/) - Ícones
- [Google Fonts](https://fonts.google.com/) - Tipografia
- [AOS Library](https://michalsnik.github.io/aos/) - Animações de scroll
- [Unsplash](https://unsplash.com/) - Imagens de exemplo

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 