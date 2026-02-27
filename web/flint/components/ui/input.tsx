import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-base text-white shadow-sm transition-all outline-none placeholder:text-zinc-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        
        "focus-visible:border-red-600 focus-visible:ring-2 focus-visible:ring-red-600/20",
        
        "file:inline-flex file:h-8 file:border-0 file:bg-zinc-800 file:text-zinc-300 file:text-sm file:font-medium file:rounded-lg file:px-3 file:mr-4 file:mt-1 hover:file:bg-zinc-700 file:transition-colors cursor-pointer",
        
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        
        className
      )}
      {...props}
    />
  )
}

export { Input }