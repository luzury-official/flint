import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot" // Обрати внимание, shadcn использует этот пакет

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // БАЗОВЫЕ СТИЛИ: добавил rounded-xl и плавный переход transition-all
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        // ТВОЙ СТИЛЬ: теперь это стандартный вариант (default)
        default: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-zinc-800 bg-transparent shadow-xs hover:bg-zinc-900 text-zinc-400",
        secondary:
          "bg-zinc-800 text-white hover:bg-zinc-700",
        ghost:
          "hover:bg-zinc-900 hover:text-white text-zinc-400",
        link: "text-red-600 underline-offset-4 hover:underline",
      },
      size: {
        // Стандартный размер теперь h-12 (48px), как в твоем коде
        default: "h-12 px-6 py-2",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-9 rounded-lg px-3",
        lg: "h-14 rounded-2xl px-10 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }