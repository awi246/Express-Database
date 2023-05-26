// import express  from "express";
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const add = (a: number | string, b: any) => a + b
console.log(add(5, 6))

interface User {
  id: string
}

const printUSER = (user: User) => {
  console.log(user.id)
}

const x = 'hellosss'
console.log('HELLOPW')
