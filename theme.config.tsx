import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/footer';

const config: DocsThemeConfig = {
  logo: <span style={{color: 'teal', fontSize:'1.5rem', fontWeight: 'bold', }}>Code Articles</span>,
  project: {
    // icon: 'https://avatars.githubusercontent.com/u/77556288?s=200&v=4',
    link: 'https://github.com/iamClutchX/code-articles-x',
  },
  chat: {
    // icon: 'https://discord.com/assets/2c21aeda16de354ba5334551a883b481.png',
    link: 'https://discord.gg/YNThsCfjuA',
  },
  docsRepositoryBase: 'https://github.com/iamClutchX/code-articles-x',
  footer: {
    component: <Footer />,
    // text: <span style={{color: 'teal', fontSize:'20px', fontWeight: 'bold',
    // alignItems: 'center',
    //  display: 'flex',  justifyContent: 'center'}}>2023 © Code Articles</span>,
    
  },
  

}

export default config

