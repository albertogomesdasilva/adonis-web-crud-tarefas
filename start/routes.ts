import Route from '@ioc:Adonis/Core/Route'

 Route.get('/', async ({ view }) => {
   return (await view.render('welcome'))
 })

Route.group(() => {

  
  Route.get('/login', 'AuthController.login').as('login')
  
  Route.get('/signup', 'AuthController.signup').as('signup')
  
  Route.post('/signup', 'AuthController.signPost')
  
  //Route.route('/signup', ['GET', 'POST'], 'AuthController.signup').as('signup')
  
  
  Route.post('/login', 'AuthController.loginPost').as('loginPost')

}).middleware('isGuest')

Route.get('/logout', 'AuthController.logout').as('logout').middleware('auth')

Route.resource('task', 'TasksController').middleware({
  "*": 'auth'
})



