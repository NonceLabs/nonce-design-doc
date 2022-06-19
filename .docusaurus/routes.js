import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c91'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'dd1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a25'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '7b1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '95b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e6d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7ad'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5a7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e43'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '4b2'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '6d7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'd26'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '36f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '374'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9d0'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '9cf'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '988'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c96'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '5d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9cd'),
    routes: [
      {
        path: '/docs/category/components',
        component: ComponentCreator('/docs/category/components', '577'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/Box',
        component: ComponentCreator('/docs/components/Box', '545'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/Button',
        component: ComponentCreator('/docs/components/Button', '23f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/CheckBoxGroup',
        component: ComponentCreator('/docs/components/CheckBoxGroup', '21c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/Heading',
        component: ComponentCreator('/docs/components/Heading', '3a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/Input',
        component: ComponentCreator('/docs/components/Input', '4f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/Layout',
        component: ComponentCreator('/docs/components/Layout', '674'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/RadioGroup',
        component: ComponentCreator('/docs/components/RadioGroup', '7ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/SettingBlock',
        component: ComponentCreator('/docs/components/SettingBlock', 'caa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components/Toast',
        component: ComponentCreator('/docs/components/Toast', 'c7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'da8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
