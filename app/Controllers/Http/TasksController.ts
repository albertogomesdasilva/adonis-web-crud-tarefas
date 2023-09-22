import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateTaskValidator from 'App/Validators/CreateTaskValidator'
import Task from 'App/Models/Task'

export default class TasksController {

  public index = async ({ view }: HttpContextContract) => {
    const html = await view.render('tasks.index')
    return html
  }

  public create =async ({ view }:HttpContextContract) => {
    const html = await view.render('tasks.create')
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
}
