import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useMyContext } from "@/context/context";
import { useState } from "react";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  ten_gm: z.string(),
  fifty_gm: z.string(),
  hundered_gm: z.string(),
  quater_kg: z.string(),
  half_kg: z.string(),
  one_kg: z.string(),
  five_kg: z.string(),
  ten_kg: z.string(),
  twentyfive_kg: z.string(),
});
export function AddItem() {
    const [isOpen , setIsOpen] = useState<boolean>(false)
   const setAlert = useMyContext()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      ten_gm: "",
      fifty_gm: "",
      hundered_gm: "",
      quater_kg: "",
      half_kg: "",
      one_kg: "",
      five_kg: "",
      ten_kg: "",
      twentyfive_kg: "",
    },
  });

  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {
    const obj: Record<string , string> = {}
    Object.keys(values).map(key =>{
        if(values[key] !== ""){
            obj[key] = values[key]
        }
    })
    await axios.post(`http://localhost:3000/api/v1/item/create`,values)
    .then(res =>{
        setAlert(true)
        if(res.status === 200){
            setIsOpen(false)
            setTimeout(()=>{
                setAlert(false)

            },1000)
        }
    }).catch(error => console.log(error.message))
    console.log(obj);
  }

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={()=>{
            setIsOpen(true)
        }}>Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-transparent p-0 border-none text-white">
        <Card className="w-full bg-black text-white">
              <CardContent>
          <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
            <CardHeader>
              <CardTitle>Add Item</CardTitle>
              <CardDescription>Fill item information.</CardDescription>
            </CardHeader>
                <div className="grid w-full items-center gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                          type="text"
                          id="name"
                          placeholder="name"
                          className="bg-transparent"
                          {...field}
                        />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-wrap gap-2 gap-x-10">
                    <FormField
                      control={form.control}
                      name="one_kg"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="one_kg">1kg</FormLabel>
                          <Input
                            type="string"
                            id="one_kg"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="half_kg"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="half_kg">500gm</FormLabel>
                          <Input
                            type="string"
                            id="half_kg"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quater_kg"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="quater_kg">250gm</FormLabel>
                          <Input
                            type="string"
                            id="quater_kg"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="hundered_gm"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="hundered_gm">100gm</FormLabel>
                          <Input
                            type="string"
                            id="hundered_gm"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fifty_gm"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="fifty_gm">50gm</FormLabel>
                          <Input
                            type="string"
                            id="fifty_gm"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ten_gm"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="ten_gm">10gm</FormLabel>
                          <Input
                            type="string"
                            id="ten_gm"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ten_kg"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="ten_kg">10kg</FormLabel>
                          <Input
                            type="string"
                            id="ten_kg"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="five_kg"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5  w-1/4">
                          <FormLabel htmlFor="five_kg">5kg</FormLabel>
                          <Input
                            type="string"
                            id="five_kg"
                            placeholder="price"
                            className="bg-transparent"
                            {...field}
                          />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-x-5 ">

             <Button
                onClick={()=>{
                    setIsOpen(false)
                }}
                variant={"default"}
                className="bg-transparent border border-blue-500 w-1/2 "
                >
                Back
              </Button>
             <Button
                type="submit"
                variant={"outline"}
                className="bg-transparent w-1/2 "
                >
                Add
              </Button>
                </div>
                    </form>
          </Form>
                    </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
