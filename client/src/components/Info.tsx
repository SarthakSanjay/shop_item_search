import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "./ui/label"
import { useMyContext } from "@/context/context"
import axios from "axios"

export function Info({item}) {
    const setAlert = useMyContext()
 
    async function handleDelete(){
        await axios.delete(`http://localhost:3000/api/v1/item/delete/${item.id}`)
        .then(res =>{
            setAlert(true)
            setTimeout(()=>{
                setAlert(false)

            },1000)
        })
    }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-black w-full ">{item.name}</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-black text-white h-1/2">
        <DrawerHeader>
            <DrawerTitle>{item.name}</DrawerTitle>
        </DrawerHeader>
        <DrawerDescription className="flex gap-x-5 px-10 text-3xl text-white">
           {item.one_kg ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>1kg</span> <span className="text-green-500">₹{item.one_kg}</span></Label>: ''} 
           {item.half_kg ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>500gm</span> <span className="text-green-500">₹{item.half_kg}</span></Label>: ''} 
           {item.quater_kg ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>250gm</span> <span className="text-green-500">₹{item.quater_kg}</span></Label>: ''} 
           {item.ten_gm ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>10gm</span> <span className="text-green-500">₹{item.ten_gm}</span></Label>: ''} 
           {item.fifty_gm ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>50gm</span> <span className="text-green-500">₹{item.fifty_gm}</span></Label>: ''} 
           {item.hundered_gm ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>100gm</span> <span className="text-green-500">₹{item.hundered_gm}</span></Label>: ''} 
           {item.five_kg ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>5kg</span> <span className="text-green-500">₹{item.five_kg}</span></Label>: ''} 
           {item.ten_kg ? <Label className="border px-2 py-1 rounded-lg text-xl w-1/2 flex justify-between"><span>10kg</span> <span className="text-green-500">₹{item.ten_kg}</span></Label>: ''} 
        </DrawerDescription>
        <DrawerFooter>
            <Button onClick={handleDelete}>
                Delete
            </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
