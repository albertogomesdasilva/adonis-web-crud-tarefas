import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateTaskValidator from 'App/Validators/CreateTaskValidator'
import Task from 'App/Models/Task'
import User from 'App/Models/User'

export default class TasksController {

  public index = async ({ view, auth, session, response }: HttpContextContract) => {
    try {
          const user = await User.getAllTaskByUserId(auth.user!.id)

           console.log(user.tasks)
            console.log(user.tasks[0].$attributes.title)

          const html = await view.render('tasks/index', { tasks: user.tasks })
          return html

    } catch (error) {
      console.error(error)
      session.flash('error', error.message)
      return response.redirect().back()
    }

  }

  public create =async ({ view }:HttpContextContract) => {
    const html = await view.render('tasks/create')
    return html
  }

  public store =async ({ request, auth, session, response }: HttpContextContract) => {
    const payload = await request.validate(CreateTaskValidator)

    try{
      const result = await Task.storeTask({
        title:payload.title,
        description:payload.description,
        priority:payload.priority,
        userId: auth.user!.id,
      })
      session.flash('success', result)
      return response.redirect().toPath('/')
    } catch(error) {
      console.log(error)
      session.flash('error', error.message)
      return response.redirect().back()

    }
  }
    public show =async ({ params, session, response, view }: HttpContextContract) => {
      const { id } = params
      // console.log(params, id)
      try {
        const task = await Task.findOrFail(id)
        const html = await view.render('tasks.show', { task })
        return html

      }catch(error) {
        console.error(error)
        session.flash('error', error.message)
        return response.redirect().back()
      }
    }

}
