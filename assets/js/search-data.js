
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
      },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-vcq-amp-turis-summer-school-2024",
        
          title: "VCQ&amp;TURIS - Summer School 2024.",
        
        description: "Interfacing Gravity and Quantum Physics.",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/vcq-summer-school/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/assets/pdf/pt-br/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-uma-postagem-com-código",
        
          title: "uma postagem com código",
        
        description: "um exemplo de uma postagem em um blog com código",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/pt-br/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "Novidades",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/news/pt-br/announcement_2/";
            },},{id: "news-participating-on-vcq-amp-amp-turis-summer-school-2024",
          title: 'Participating on VCQ&amp;amp;amp;TURIS - Summer School 2024.',
          description: "",
          section: "Novidades",},{id: "news-membro-da-ca-rqi",
          title: 'Membro da CA-RQI',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/news/pt-br/announcement_4/";
            },},{id: "news-membro-da-ca-bridgeqg",
          title: 'Membro da CA-BridgeQG',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/news/pt-br/announcement_5/";
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
          window.open("https://github.com/abbarreto", "_blank");
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
