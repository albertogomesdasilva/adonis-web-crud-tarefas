import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

const users = [
  { 
    email: 'admin@admin.com',
    password: '123456',
    first_name: 'Administrador',
    last_name: 'Administrador do Sistema'
  },
  { 
    email: 'albertogomesdasilva@gmail.com',
    password: '123456',
    first_name: 'Alberto',
    last_name: 'Gomes da Silva'
  },
  { 
    email: 'thacylla@gmail.com',
    password: '123456',
    first_name: 'Thácylla',
    last_name: 'Cristina Pires da Silva'
  },
  {
    email: 'cofee@gmail.com',
    password: '123456',
    first_name: 'Cofee',
    last_name: 'Cofee Cofee'
  }
]


export default class extends BaseSeeder {
  public async run () {
    try {
      await Database.table('users').multiInsert(users)
      console.info('Users seeded')
    } catch (error) {
      console.log(error)

    }
  }
}
