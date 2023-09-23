import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateTaskValidator from 'App/Validators/CreateTaskValidator'
import Task from 'App/Models/Task'
import User from 'App/Models/User'

export default class TasksController {

  public index = async ({ view, auth, session, response }: HttpContextContract) => {
    try {
          const user = await User.getAllTaskByUserId(auth.user!.id)


          const html = await view.render('task/index', { tasks: user.tasks })
          return html

    } catch (error) {
      console.error(error)
      session.flash('error', error.message)
      return response.redirect().back()
    }

  }

  public create =async ({ view }:HttpContextContract) => {
    const html = await view.render('task/create')
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
    public show =async ({ params, session, response, view, bouncer }: HttpContextContract) => {
      const { id } = params
      // console.log(params, id)
      try {
        const task = await Task.findOrFail(id)

        // Autorização
          await bouncer.authorize('showTask', task)
        //

        const html = await view.render('task.show', { task })
        return html

      }catch(error) {
        console.error(error)
        session.flash('error', error.message)
        // return response.redirect().back()
        return response.redirect().toRoute('task.index')
      }
    }

    public edit =async ( { params, session, response, view, bouncer }:HttpContextContract) => {
      const { id } = params

      try{
        const task = await Task.findOrFail(id)

           // Autorização
           await bouncer.authorize('editTask', task)
           //

        const html = await view.render('task.edit', { task })
        return html
      }catch(error) {
        console.error(error)
        session.flash('error', error.message)
        // return response.redirect().back()
        return response.redirect().toRoute('task.index')

      }
    }

    public update = async ({ request, params, session, response, bouncer }: HttpContextContract) => {
      const { id } = params
      const payload = await request.validate(CreateTaskValidator)

      try {

        const task = await Task.findOrFail(id)
        
           // Autorização
           await bouncer.authorize('editTask', task)
           //


        const result = await Task.updateTask({ 
          id,
          title: payload.title, 
          description: payload.description,
          priority: payload.priority,
        })
        session.flash('success', result)
        return response.redirect().toRoute('task.show', { id })
      } catch(error) {
        console.error(error)
        session.flash('error', error.message)
        // return response.redirect().back()
        return response.redirect().toRoute('task.index')
      }
    }

    public destroy = async ({ params, session, response, bouncer }: HttpContextContract) => {
      const { id } = params

      try {

        const task = await Task.findOrFail(id)

        // AUTORIZAÇÃO
          await bouncer.authorize('destroyTask', task)
        //

        const result = await Task.deleteTaskById(id)
        session.flash('success', result)
        return response.redirect().toRoute('task.index', { id })
      } catch(error) {
        console.error(error)
        session.flash('error', error.message)
        return response.redirect().back()
      }
    }

}
