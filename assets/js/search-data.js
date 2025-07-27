
const currentUrl = window.location.href;
const siteUrl = "https://abbarreto.github.io"; 
let updatedUrl = currentUrl.replace("https://abbarreto.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "Bio",
    section: "Menu de navegação",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-notícias",
          title: "Notícias",
          description: "",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publicações",
          title: "Publicações",
          description: "publicações por categoria em ordem cronológica reversa. gerado pelo jekyll-scholar.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-confs-e-empregos",
        
          title: "Confs e Empregos",
        
        description: "Neste post, listo alguns links que costumo acompanhar para ficar por dentro de conferências e oportunidades de emprego nas áreas de relatividade e física quântica em geral.",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2025/useful-links/";
          
        },
      },{id: "post-arxiv-e-scirate",
        
          title: "arXiv e SciRate",
        
        description: "Neste post, compartilho dois sites que uso para acompanhar os artigos mais recentes nas áreas de gravitação (GR-QC) e física quântica (quant-ph).",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2025/arxiv-scirate/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/pt-br/the_godfather/";
            },},{id: "news-participating-on-vcq-amp-amp-turis-summer-school-2024",
          title: 'Participating on VCQ&amp;amp;amp;TURIS - Summer School 2024.',
          description: "",
          section: "Novidades",},{id: "news-membro-da-ca-rqi",
          title: 'Membro da CA-RQI',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/news/pt-br/announcement_2/";
            },},{id: "news-membro-da-ca-bridgeqg",
          title: 'Membro da CA-BridgeQG',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/news/pt-br/announcement_3/";
            },},{id: "projects-projeto-1",
          title: 'projeto 1',
          description: "com imagem de fundo",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/1_project/";
            },},{id: "projects-projeto-2",
          title: 'projeto 2',
          description: "um projeto com imagem de fundo e comentários do giscus",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/2_project/";
            },},{id: "projects-projeto-3-com-um-nome-bem-longo",
          title: 'projeto 3 com um nome bem longo',
          description: "um projeto que redireciona pra outro website",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/3_project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/4_project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/5_project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projetos",handler: () => {
              window.location.href = "/projects/pt-br/9_project/";
            },},{
        id: 'social-email',
        title: 'Enviar um email',
        section: 'Redes sociais',
        handler: () => {
          window.open("mailto:%61%62%62%61%72%72%65%74%6F%38%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://github.com/abbarreto86", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://inspirehep.net/authors/1371091", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Redes sociais',
        handler: () => {
          window.open("http://lattes.cnpq.br/3242250540541623", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7220-0982", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Adriano-Barreto/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oXUNHtoAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://integra.ifrs.edu.br/portfolio/pessoas/adriano-braga-barreto", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "/en-us" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Muda o tema para claro',
      description: 'Muda o tema do site para claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Muda o tema para escuro',
      description: 'Muda o tema do site para escuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa o tema padrão do sistema',
      description: 'Muda o tema do site para o padrão do sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
