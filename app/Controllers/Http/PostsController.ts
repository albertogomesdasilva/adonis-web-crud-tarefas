import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public index = async ({  view }:HttpContextContract) => {
      //  return response.status(200).json('Page Post pelo Controller')
      // const html = await view.render('posts/index')

      const post = {
        id: 1,
        name: 'Cars',
        hidden: true
      }

      const users = [
        {id: 1,
          name: 'Alberto',
          age: 56
        },
        {
          id: 2,
          name: 'Tânia',
          age: 45
        },
        {id: 3,
        name: 'Wendell',
      age: 28
      },
      {
        id: 4,
        name: 'Thácylla',
        age: 20
      }
    ]

    const food = {
        ketchup: '5 tbsp',
        mustard: '1 tbsp',
        pickle: '0 tbsp',
      }

      
      

      const html = await view.render('demo', { 
        title: 'Página demo.edge', 
        valor: 52,
        post,
        users,
        food
      
      })
      
      return  html


        }
    }

