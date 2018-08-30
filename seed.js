const { db } = require('./server/db')
const { School } = require('./server/db')

const schools = [
    { name: 'School 1' },
    { name: 'Harvard' },
    { name: 'Hogwarts' },
    { name: 'that school from aaaahhh real monsters' },
    { name: 'hard knocks' }
]
const seed = async () => {
  await schools.map(school => School.create(school))
}

const main = () => {
  console.log('Syncing db...')
  db
        .sync({ force: true })
        .then(() => {
          console.log('Seeding databse...')
          return seed()
        })
        .catch(err => {
          console.log('Error while seeding')
          console.log(err.stack)
        })
        .then(() => {
          db.close()
          return null
        })
}

main()
