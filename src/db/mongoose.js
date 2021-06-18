const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: false //true
})


// const me = new User({
//     name: '   Mike   ',
//     email: '  SDSDmike@skl.io  ',
//     password: ' passwd00  '
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error', error)
// })


// const myTask = new Task({
//     description: 'Clean house',
//     completed: false
// })

// myTask.save().then(()=>{
//     console.log(myTask)
// }).catch((error)=>{
//     console.log('Error', error)
// })