import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
<input
  type={type}
  data-slot="input"
  className={cn(
    // Clases base proporcionadas
    "block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",

    // Aplicar colores personalizados
    "text-[var(--foreground)] bg-[var(--background)]",

    // Mejoras para el input de tipo file
    "file:mr-4 file:py-2 file:px-4",
    "file:rounded-md file:border-0",
    "file:text-sm file:font-semibold",
    "file:bg-gray-200 file:text-gray-900",
    "file:hover:bg-gray-300",
    "dark:file:bg-gray-600 dark:file:text-gray-200 dark:file:hover:bg-gray-500",

    className,
  )}
  {...props}
/>

  )
}

export { Input }

