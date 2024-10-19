import { Button } from "@/components/ui/button"
import { login, signup } from "./action"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
   <main className="h-screen w-screen flex justify-center items-center"> <Card className="w-1/4">
    <CardHeader className="text-stone-800 font-black text-4xl">
        Login
    </CardHeader>
    <CardContent>
    <form className="
  ">
   <label htmlFor="email">Email:</label>
   <Input id="email" name="email" type="email" required  className="text-black w-full p-1  mb-4"/>
   <label htmlFor="password">Password:</label>
   <Input id="password" name="password" type="password" required  className="text-black w-full  p-1 "/>
   <div className="flex  flex-row gap-4 mt-6">
   <Button formAction={login} className="">Log in</Button>
   <Button formAction={signup} variant="outline" className="">Sign up</Button>
   </div>
 </form>
        </CardContent></Card></main>
  )
}