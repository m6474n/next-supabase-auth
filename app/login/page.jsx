import { login, signup } from "./action"

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required  className="text-black"/>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required  className="text-black"/>
      <button formAction={login} className="bg-slate-700 p-4 rounded-xl ">Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}