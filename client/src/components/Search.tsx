import * as React from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import axios from "axios"
import { Info } from "./Info"


export function Search() {
    const [items , setItems] = React.useState([])
    React.useEffect(()=>{
        async function fetchItems() {
            await axios.get(`http://localhost:3000/api/v1/item/all`)
            .then(res =>{
                setItems(res.data.items)
            })
        }
        fetchItems()
    },[])
  return (
        <Command className="bg-black text-white w-1/2">
          <CommandInput placeholder="Search framework..." className="h-10 mt-5" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {items.map((item:{
                id:string,
                name:string
            }) => (
              <CommandItem
                key={item.id}
                value={item.name}
                className="aria-selected:bg-black bg-black text-white aria-selected:text-white"
              >
                <Info item={item} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
  )
}
