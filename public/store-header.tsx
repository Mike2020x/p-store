"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/store" className="flex items-center space-x-2">
          <div className="text-2xl font-semibold tracking-tight">Store</div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
        </nav>

        <Button size="icon" variant="ghost" className="relative">
          <ShoppingBag className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
