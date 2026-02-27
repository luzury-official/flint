import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
      
      <div className="w-full max-w-lg bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl shadow-2xl text-white">
        <h1 className="text-3xl font-bold mb-2 text-center">Upload</h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-zinc-400 ml-1">Title of film</Label>
            <Input id="title" placeholder="Enter title..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="video" className="text-zinc-400 ml-1">File</Label>
            <Input id="video" type="file" accept="video/*" />
          </div>

          <Button className="w-full">
            Publish
          </Button>
        </div>
      </div>
    </main>
  )
}