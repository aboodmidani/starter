import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    navbar: group({
      title: 'Navbar',
      description: 'Navbar configuration',
      fields: {
        heroText: field({
          type: 'string',
          title: 'Hero Text',
          description: 'Main hero text in navbar'
        }),
        firstText: field({
          type: 'string',
          title: 'First Text'
        }),
        secondText: field({
          type: 'string',
          title: 'Second Text'
        })
      }
    })
  }
}) 