import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'


import { PrismaClient } from '@prisma/client'

const cors = require('cors')



const prismaClient = new PrismaClient() 
const app = express()


app.use(bodyParser.json())

app.use(
    cors({
        origin: '*'
    })
)



app.post('/', async (req: Request, res: Response) => {
    const { text } = req.body
    await prismaClient.toDo.create({
        data: {
            text
        }
    })
    
    res.send({message: 'scessage added'})
})


app.get('/', async (req: Request, res: Response) => {

    const data = await prismaClient.toDo.findMany({
        orderBy: {
            createdAt: 'asc'
        }
    })

    res.send(data)
})  


app.put('/', async (req: Request, res: Response) => {
    const { id, text, done } = req.body
    console.log({id, text, done})

    
    const data = await prismaClient.toDo.findMany({
        where: {
            id: id
        }
    })
    if (!data.length) {
        res.send({err: "no users found"})  
    }  

    await prismaClient.toDo.update({
        where: {
            id
        }, data: {
            text,
            done
        }
    })

    res.send({message: "susscess update"})
})


app.delete('/', async (req: Request, res: Response) => {
    const { id } = req.body
    console.log(id)
    
    const data = await prismaClient.toDo.findMany({
        where: {
            id: id
        }
    })
    if (!data.length) res.send({err: "no users found"})  


    await prismaClient.toDo.delete({
        where: {
            id
        }
    })
    res.send({message: "susscess delete this one"})
})


app.listen(3000, () => console.log('server listion 3000'))