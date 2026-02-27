import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
      
      <div className="w-full max-w-lg bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl shadow-2xl text-white">
        <h1 className="text-3xl font-bold mb-2 text-center">Registration</h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-zinc-400 ml-1">Username</Label>
            <Input id="username" placeholder="Enter username..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-zinc-400 ml-1">Password</Label>
            <Input id="password" placeholder="Enter password..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="repeated-password" className="text-zinc-400 ml-1">Repeat password</Label>
            <Input id="repeated-password" placeholder="Enter password..." />
          </div>

          <Button className="w-full">
            Registr
          </Button>

          <Link href="/login" className="text-red-800"> You already have account? </Link>
        </div>
      </div>
    </main>
  )
}