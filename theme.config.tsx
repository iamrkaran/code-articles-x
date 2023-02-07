import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{color: 'teal', fontSize:'36px', fontWeight: 'bold', }}>Code Articles</span>,

  project: {
    link: 'https://github.com/iamClutchX/code-articles-x',
  },
  chat: {
    link: 'https://discord.gg/YNThsCfjuA',
  },
  docsRepositoryBase: 'https://github.com/iamClutchX/code-articles-x',
  footer: {
    text: <span style={{color: 'teal', fontSize:'20px', fontWeight: 'bold',
    alignItems: 'center',
     display: 'flex',  justifyContent: 'center'}}>2023 © Code Articles</span>,
    
  },

  // Google Analytics
  

}

export default config

