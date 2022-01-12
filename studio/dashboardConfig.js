export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61df2a84ce642e24b2a3033b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-27xpki9r',
                  apiId: '28d7a6be-ec7f-431f-bfd6-3f5bd878a328'
                },
                {
                  buildHookId: '61df2a844ff34f232e144250',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kr87sn4e',
                  apiId: '5b85563e-4eaf-4429-8fc9-fb7afb1bd118'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mizdalj/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kr87sn4e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
