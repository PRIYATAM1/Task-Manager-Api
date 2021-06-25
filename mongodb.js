// CRUD create read update delete

// const mongodb = require('mongodb')

// const MongoClient = mongodb.MongoClient

// const ObjectId = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')



const connectionURL = 'mongodb://127.0.0.1:27017'

const databaseName = 'task-manager'

// const id = new ObjectiD()
// console.log(id) 

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('Unable to connect database.')
    }
    const db = client.db(databaseName)



    // db.collection('user').insertOne({
    //     name: 'Priyatm',
    //     age: 24
    // }, (error, result) => {
    //     console.log(result.ops)
    // })

    // db.collection('user').insertMany( [
    //    {
    //         name: 'priyatm',
    //         age: 21
    //    },
    //    {
    //        name: 'Kumar',
    //        age: 24
    //    }
    // ], (error, result) => {
    //     if ( error ) {
    //         return console.log('Unable to insert document!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany( [
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew Inspection',
    //         completed: true
    //     },
    //     {
    //         description: 'pet plants',
    //         completed: false
    //     }     
    // ] , (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert tasks')
    //         }

    //         console.log(result.ops)
    // })

    // db.collection('user').findOne({_id : new ObjectID("60bbd3aff993275fc8f86b01")} , (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('user').find({age: 24}).toArray((error, users) => {
    //     console.log(users)
    // })
    


//  db.collection('user').updateOne({
//         _id: new ObjectID("60bbd3aff993275fc8f86b00")
//     }, {
//         $inc: {
//             age: 1
//         }
//     }).then ((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log (error)
//     })

//     db.collection('tasks').updateMany({
//         completed: true
//     }, {
//         $set : {
//             completed: false
//         }
//     }).then((result) => {
//         console.log(result.modifiedCount)
// }).catch ((error) => {
//     console.log(error)
// })

db.collection('user').deleteMany({
    age: 22
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

})