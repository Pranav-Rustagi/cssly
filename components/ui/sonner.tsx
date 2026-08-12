"use client"

import * as React from "react"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

// Reads the project's own `data-theme` attribute on <html> (set by the
// blocking script in app/layout.tsx and toggled by components/theme-toggle).
// This project has no theme-provider library mounted.
function useDataTheme(): ToasterProps["theme"] {
  const [theme, setTheme] = React.useState<ToasterProps["theme"]>("system")

  React.useEffect(() => {
    const root = document.documentElement
    const read = () =>
      setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light")

    read()
    const observer = new MutationObserver(read)
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })
    return () => observer.disconnect()
  }, [])

  return theme
}

const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useDataTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
