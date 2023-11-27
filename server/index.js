import express  from 'express';

import cors from 'cors'
import { User } from './models/Users.js';
import { connectToDatabase } from './configs/db.js';



const app = express()
app.use(cors())
app.use(express.json())

await connectToDatabase();
app.get('/',(req,res)=>{
    User.find()
    .then(users => res.json(users)
    )
.catch(err =>res.json(err))
})

app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id
    User.findById({_id:id})
    .then(users =>res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id",(req,res) =>{
    const id = req.params.id
    User.findByIdAndDelete({_id:id})
}) 


app.put("/updateUser/:id",(req,res)=>{
 const id = req.params.id
    User.findByIdAndUpdate({_id:id},{name :req.body.name,email :req.body.email,age : req.body.age})
    .then(users =>res.json(users))
    .catch(err => res.json(err))
})

app.post('/createUser',(req,res) =>{
    User.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log('Server is running')
})