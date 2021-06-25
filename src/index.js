const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const auth = require('./middleware/auth')
const app = express()
const port = process.env.PORT


// app.use((req, res, next) => {

//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     }

//     else {
//         next()
//     }

// })

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        // if (!file.originalname.endsWith('.pdf'))
        if (!file.originalname.match(/\.(doc|docx)$/))
        {
            return cb(new Error ('Please upload a Doc.'))
        }
        cb(undefined, true)

        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined,false)
    }
})

const errorMiddleware = (req, res, next) => {

    throw new Error('From my middleware')

}

app.post('/upload', errorMiddleware, upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//Without middleware:   new request -> run route handler
//with middleware:  new request -> do something -> run route handler

app.listen(port, () => {
    console.log('server is up on port '+ port)
})

// const pet = {
//     name: 'HAT',
// }

// pet.toJSON = function () {
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet))

