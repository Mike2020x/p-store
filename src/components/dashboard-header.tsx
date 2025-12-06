"use client"

//import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, FolderTree, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

export function DashboardHeader() {
  //const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/products", label: "Products", icon: Package },
    { href: "/dashboard/categories", label: "Categories", icon: FolderTree },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="text-2xl font-semibold tracking-tight">Dashboard</div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon
              //const isActive = pathname === item.href
              const isActive = false
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Back to Store</span>
        </Link>
      </div>
    </header>
  )
}
