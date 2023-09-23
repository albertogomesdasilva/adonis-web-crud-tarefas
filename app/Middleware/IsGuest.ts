import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsGuest {
  public async handle({ auth, session, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    await auth.check()

    if(auth.isAuthenticated){
      session.flash('warning', 'Você está logado!')
      return response.redirect().toRoute('task.index')
    }

    await next()
  }
}
