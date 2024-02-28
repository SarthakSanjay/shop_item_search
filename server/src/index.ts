import { PrismaClient } from '@prisma/client'
import express from "express"
import cors from 'cors'
const prisma = new PrismaClient()
const app = express()
app.use(cors())
app.use(express.json())
    app.get('/',(req,res)=>{
        res.send("working...")
    })
  app.post('/api/v1/item/create',async(req,res)=>{
    const body = req.body

    try {
        const item = await prisma.item.findFirst({
            where:{
                name: body.name
            }
        })
        if(item){
            return res.status(400).json({
                msg:"product already exists",
                item
            })
        }
       const createdItem = await prisma.item.create({
            data:body
        })
        res.status(200).json({
            msg:"item added",
            createdItem
        })
    } catch (error ) {
        if (error instanceof Error) {
            console.error(`Error name: ${error.name}`);
            console.error(`Error message: ${error.message}`);
          } else {
            console.error("An unknown error occurred.");
          }
    }
  })

  app.get('/api/v1/item/all',async(req,res)=>{
    const items = await prisma.item.findMany()
    if(!items){
        return res.status(200).json({
            items: "no items"
        })
    }
    res.status(200).json({items})
  })

  app.get('/api/v1/item',async(req,res)=>{
    const name = req.query.search?.toString()
    const item = await prisma.item.findFirst({
        where:{
            name:name
        }
    })
    if(!item){
        return res.status(400).json({
            msg:"no item with this name"
        })
    }
    res.status(200).json({
        item
    })
  })

//   app.delete('/api/v1/item/delete_all',async(req,res)=>{
//     const items = await prisma.item.deleteMany()
//     res.status(200).json({
//         msg:'deleted all',
//         items
//     })
//   })
app.delete('/api/v1/item/delete/:id',async(req,res)=>{
    const itemId = req.params.id.toString()
    const item = await prisma.item.delete({
        where:{
            id:itemId
        }
    })
    res.status(200).json({
        msg:"item deleted successfully",
        item
    })
})

async function startServer() {
      app.listen(3000 ,()=>{
        console.log(`server listining on port 3000`);
      })
    
  }

  startServer()
