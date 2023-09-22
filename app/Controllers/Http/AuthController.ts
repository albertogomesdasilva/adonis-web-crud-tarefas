import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'


export default class AuthController {
    public signup = async ( { view, request, session, response }: HttpContextContract) => {

        // console.log(request.method())

        switch (request.method()) {
            case 'POST':
                const postSchema = schema.create({
                    firstName: schema.string([
                        rules.required(),
                        rules.alpha(),
                        rules.trim(),
                        rules.maxLength(50),
                    ]),
                    lastName: schema.string([rules.required(), rules.alpha(), rules.trim(), rules.maxLength(50)]),
                    email: schema.string([rules.required(), rules.email(), rules.trim() ]),
                    password: schema.string([rules.required(), rules.trim(), rules.minLength(8)])
                })
        
                const payload = await request.validate({ schema: postSchema, messages: {
                    'firstName.required' : 'First name is required',
                    'firstName.alpha' : 'The fist name must contain letters only',
                    'firstName.maxLength' : 'The first name should be maximum 50 characters long',
        
                    'lastName.required' : 'Last name is required',
                    'lastName.alpha' : 'The fist name must contain letters only',
                    'lastName.maxLength' : 'The last name should be maximum 50 characters long',
        
                    'email.required': 'Email is required',
                    'email.email': 'Email should be a valid email address',
        
                    'password.required': 'Password is required',
                    'password.minLength': 'Password should have at last 8 characters'
                } })
        
                try {
        
                   const result = await User.storeUser({ email: payload.email, 
                        firstName: payload.firstName, 
                        lastName: payload.lastName, 
                        password: payload.password
                    })
        
                    session.flash('success', result)
                    return response.redirect().toPath('/')
        
                    console.log(result)
                } catch (error) {
                    console.error(error)
                    session.flash('error', error.message)
                    return response.redirect().back()
                }
        
                              

                // GET
                default:
                    const html = await view.render('auth/signup')
                    return html
        }
    }

    public signPost = async ( { request, session, response }: HttpContextContract ) => {

        const postSchema = schema.create({
            firstName: schema.string([
                rules.required(),
                rules.alpha(),
                rules.trim(),
                rules.maxLength(50),
            ]),
            lastName: schema.string([rules.required(), rules.alpha(), rules.trim(), rules.maxLength(50)]),
            email: schema.string([rules.required(), rules.email(), rules.trim() ]),
            password: schema.string([rules.required(), rules.trim(), rules.minLength(8)])
        })

        const payload = await request.validate({ schema: postSchema, messages: {
            'firstName.required' : 'First name is required',
            'firstName.alpha' : 'The fist name must contain letters only',
            'firstName.maxLength' : 'The first name should be maximum 50 characters long',

            'lastName.required' : 'Last name is required',
            'lastName.alpha' : 'The fist name must contain letters only',
            'lastName.maxLength' : 'The last name should be maximum 50 characters long',

            'email.required': 'Email is required',
            'email.email': 'Email should be a valid email address',

            'password.required': 'Password is required',
            'password.minLength': 'Password should have at last 8 characters'
        } })

        try {

           const result = await User.storeUser({ email: payload.email, 
                firstName: payload.firstName, 
                lastName: payload.lastName, 
                password: payload.password
            })

            session.flash('success', result)
            return response.redirect().toPath('/')

            console.log(result)
        } catch (error) {
            console.error(error)
            session.flash('error', error.message)
            return response.redirect().back()
        }

        // console.log(payload)

         }

         public login = async ( { view }: HttpContextContract) => {
            const html = await view.render('auth/login')
            return html
         }

         public loginPost =async ({ request, response, session, auth }: HttpContextContract) => {
            const postSchema = schema.create({
                email: schema.string([rules.required(), rules.email(), rules.trim()]),
                password: schema.string([rules.required(), rules.trim(), rules.minLength(8)]),
            })

            const payload = await request.validate({
                schema: postSchema,
                messages: {
                    'email.required': 'Email necessário' ,
                    'email.email': 'O email deverá ser um email válido',

                    'password.required': 'Necessário uma senha' ,
                    'password.minLenght': 'A senha deverá ter no mínimo 8 caracteres'
                },
            })

            try {
                await auth.use('web').attempt(payload.email, payload.password)
                session.flash('success', 'Logged in')
                // return response.redirect().toRoute('/')
                return response.redirect().toRoute('task.index')
            } catch(error) {
                console.log(error)
                session.flash('error', error.message)
                return response.redirect().back()
            }
         }

         public logout=async ({ auth, response }: HttpContextContract) => {
            await auth.use('web').logout()
            return response.redirect().toRoute('/')
         }


}
