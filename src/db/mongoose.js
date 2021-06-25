const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
})


// const me = new User({
//     name: 'Priyatam4',
//     email: 'kumarpriyatam@gmail.com',
//     password: '     Phone@123       ',
//     age: 99
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })


// const task = new Task({
//   description: ' Learn React.js',
  

// })

// task.save().then (()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })