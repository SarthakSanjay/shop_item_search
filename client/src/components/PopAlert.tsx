import { RocketIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function PopAlert() {
  return (
    <Alert className="absolute z-10 bg-black text-white">
      <RocketIcon className="h-4 w-4 text-white" />
      <AlertTitle>Item Added</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
